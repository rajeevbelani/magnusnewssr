import React from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import { Link } from 'react-static'
import axios from 'axios'
import { Row, Col, Icon, Menu, Button, Popover, Select } from 'antd'
import { enquireScreen, getLocalizedPathname } from './utils'
import logoImg from '../mmlogo.png'
import nabhLogo from '../nabhlogo.png'
import iataLogo from '../iata.png'

const { Option, OptGroup } = Select

// const LOGO_URL = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
const LOGO_URL = logoImg
const textSearchUrl = 'https://www.google.com/search?q=site:pro.ant.design+'

// https://www.algolia.com/apps/YEWBNYLVLW/
const searchUrl = 'https://yewbnylvlw-dsn.algolia.net/1/indexes/antd pro/query?x-algolia-agent=Algolia for vanilla JavaScript 3.21.1&x-algolia-application-id=YEWBNYLVLW&x-algolia-api-key=b42bc1a0c8ab7be447666944228a3176'

class PreHeader extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  state = {
    currentMenuItem: '',
    inputValue: '',
    menuVisible: false,
    menuMode: 'horizontal',
    searchOption: [],
    searching: false,
  };

  componentDidMount () {
    console.log(`Component did update :: ${this.state.inputValue}`)
    // this.context.router.listen(this.handleHideMenu)
    this.setCurrentLocation()
    const { searchInput } = this
    enquireScreen(b => {
      this.setState({ menuMode: b ? 'inline' : 'horizontal' })
    })
    document.addEventListener('keyup', event => {
      if (event.keyCode === 83 && event.target === document.body) {
        searchInput.focus()
      }
    })
  }

  componentDidUpdate () {
    console.log(`Component did update :: ${this.state.inputValue}`)
    this.setCurrentLocation()
  }

  componentDidCatch () {
    console.log(`Component did catch :: ${this.state.inputValue}`)
    this.setCurrentLocation()
  }

  search = (key, success, error) => {
    clearTimeout(this.timer)
    if (!key) {
      success()
      return
    }

    this.timer = setTimeout(() => {
      this.setState({
        searching: true,
      })
      axios.post(searchUrl, {
        params: `query=${key}&hitsPerPage=20&facets=*&maxValuesPerFacet=10&facetFilters=[]`,
      }).then(response => {
        this.setState({
          searching: false,
        })
        if (success) {
          success(response)
        }
      }).catch(err => {
        this.setState({
          searching: false,
        })
        if (error) {
          error(err)
        }
      })
    }, 200)
  }

  handleHideMenu = () => {
    this.setState({
      menuVisible: false,
    })
  }

  handleShowMenu = () => {
    this.setState({
      menuVisible: true,
    })
  }

  onMenuVisibleChange = visible => {
    this.setState({
      menuVisible: visible,
    })
  }

  handleSelect = value => {
    location.href = value
  }

  setCurrentLocation () {
    const path = location.pathname
    const module = location.pathname.replace(/(^\/|\/$)/g, '').split('/').slice(0, -1).join('/')
    let activeMenuItem = module || 'home'
    if (/doctors/.test(path)) {
      activeMenuItem = 'Doctors'
    } else if (/blog/.test(path)) {
      activeMenuItem = 'blog'
    } else if (/patientstories/.test(path)) {
      activeMenuItem = 'patientStories'
    } else if (/treatments/.test(path)) {
      activeMenuItem = 'treatments'
    } else if (/hospitals/.test(path)) {
      activeMenuItem = 'Hospitals'
    } else if (/about/.test(path)) {
      activeMenuItem = 'About'
    } else if (path === '/') {
      activeMenuItem = 'home'
    }
    console.log(`this.state.currentMenuItem  :: ${this.state.currentMenuItem}  ::   ${activeMenuItem}`)
    if (this.state.currentMenuItem !== activeMenuItem) {
      this.setState({ currentMenuItem: activeMenuItem })
    }
  }

  handleChange = value => {
    this.setState({ inputValue: value })

    this.search(value, data => {
      if (data && data.data && data.data.hits) {
        this.setState({
          searchOption: data.data.hits,
        })
      }
    })
  }

  render () {
    const { inputValue, menuMode, menuVisible, searchOption, searching } = this.state
    const { intl } = this.props
    // const path = location.pathname

    // const module = location.pathname.replace(/(^\/|\/$)/g, '').split('/').slice(0, -1).join('/')
    // let activeMenuItem = module || 'home'
    // if (/^components/.test(path)) {
    //   activeMenuItem = 'components'
    // } else if (/blog/.test(path)) {
    //   activeMenuItem = 'blog'
    // } else if (path === '/') {
    //   activeMenuItem = 'home'
    // }
    // const activeMenuItem = ''

    const isZhCN = false

    const menu = (
      <Menu mode={menuMode} selectedKeys={[this.state.currentMenuItem]} id="nav" key="nav">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="blog">
          <Link to="/blog">Blog</Link>
        </Menu.Item>
        <Menu.Item key="patientStories">
          <Link to="/patientstories">Patient Stories</Link>
        </Menu.Item>
        <Menu.Item key="Treatments">
          <Link to="/doctors">Treatments</Link>
        </Menu.Item>
        <Menu.Item key="Doctors">
          <Link to="/doctors">Doctors</Link>
        </Menu.Item>
        <Menu.Item key="Hospitals">
          <Link to="/hospitals">Hospitals</Link>
        </Menu.Item>
        <Menu.Item key="About">
          <Link to="/about">About</Link>
        </Menu.Item>
        {/* {
          menuMode === 'inline' && (
            <Menu.Item key="preview">
              <a target="_blank" href="http://preview.pro.ant.design/" rel="noopener noreferrer">
                <FormattedMessage id="app.home.preview" />
              </a>
            </Menu.Item>
          )
        } */}
      </Menu>
    )

    const componentSearchOption = searchOption.filter(v => v.type === 'component').map(
      d => <Option key={d.url}>{d.title} {isZhCN && d.subTitle}</Option>
    )
    const docSearchOption = searchOption.filter(v => v.type === 'doc').map(
      d => <Option key={d.url}>{isZhCN ? d.title : (d['title-en'] || d.title)}</Option>
    )

    const options = []

    if (componentSearchOption) {
      options.push(<OptGroup label="Search" key="component">{componentSearchOption}</OptGroup>)
    }
    if (docSearchOption) {
      options.push(<OptGroup label="Docs" key="doc">{docSearchOption}</OptGroup>)
    }

    if (inputValue) {
      options.push(<Option key={`${textSearchUrl}${inputValue}`}>All{inputValue}</Option>)
    }

    return (
      <div id="header" className="header">
        <Row>
          <div>
            <div id="preview" style={{ float: 'left', marginLeft: '5px' }}>
              <Row gutter={3}>
                <Col>
                  <Link style={{ lineHeight: '64px', paddingRight: '5px' }}>
                    <a
                      id="preview-button"
                      target="_blank"
                      href="mailto:test@test.com"
                      rel="noopener noreferrer">
                      <Button icon="mail">
                            Email Us
                      </Button>
                    </a>
                  </Link>
                </Col>
              </Row>
            </div>
            <div id="preview">
              <Row gutter={3}>
                <Col>
                  <Link style={{ lineHeight: '64px', paddingRight: '5px' }}>

                    <a
                      id="preview-button"
                      target="_blank"
                      href="javascript:window.open('tel:8108888129')"
                      rel="noopener noreferrer">
                      <Button icon="phone">
                            Call Us
                      </Button>
                    </a>
                  </Link>
                </Col>
              </Row>
            </div>
          </div>

        </Row>
      </div>
    )
  }
}

export default PreHeader
