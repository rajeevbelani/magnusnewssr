import Hidden from '@material-ui/core/Hidden';
import { Button, Form, Modal } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { enquireScreen } from '../../layout/utils';
import FooterForm from '../FooterForm';


let isMobile = false

class Banner extends Component {
  constructor (props) {
    super(props)
    enquireScreen(b => {
      console.log(`Response from enquire screen :: ${b}`)
      // this.setState({ menuMode: b ? 'inline' : 'horizontal' })
      isMobile = b
    })
  }

  state = {
    visible: false,
    // autoCompleteResult: [],
  }

  showModal = () => {
    console.log(`SHOW MODAL ::: ${this.state.visible}`)
    this.setState({
      visible: true,
    })
  }

  handleOk = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false, visible: false })
    }, 3000)
  }
  handleCancel = () => {
    this.setState({ visible: false })
  }

  //   const isZhCN = utils.isZhCN(location.pathname)
  render () {
    const opts = {
      height: '290',
      width: '300',
    }
    return (
      <div className="banner-wrapper">
        {isMobile && (
          <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
            <div className="home-banner-image">
              <YouTube videoId="REZelbp272g" opts={opts} />
              {/* <img src="https://www.fraserinstitute.org/sites/default/files/styles/large/public/comparing-performance-of-universal-health-care-countries-2017-web.jpg?itok=QnM2pgxO" width="100%" /> */}
              {/* <img alt="banner"
              src="https://gw.alipayobjects.com/zos/rmsportal/rqKQOpnMxeJKngVvulsF.svg"
              width="100%"w
            /> */}
            </div>
          </TweenOne>
        )}
        <QueueAnim className="banner-title-wrapper" type={isMobile ? 'bottom' : 'right'}>
          <div key="line" className="title-line-wrapper">
            <div className="title-line"
              style={{ transform: 'translateX(-64px)' }}
            />
          </div>
          <h1 key="h1">Your Health Deserves More</h1>
          <p key="content">
            Helping you Travel to India for treatment every step of the way
          </p>
          <div key="button" className="button-wrapper">
            <Form onSubmit={this.showModal}>
              <Button type="primary" onClick={this.showModal}>
                Get a FREE Quote
              </Button>
            </Form>
            {/* <Link to="/docs/getting-started">
            <Button style={{ margin: '0 16px' }} type="primary" ghost>
              app.home.start
            </Button>
          </Link> */}
            {/* <GitHubButton
            key="github-button"
            type="stargazers"
            namespace="ant-design"
            repo="ant-design-pro"
          /> */}
          </div>
        </QueueAnim>
        {!isMobile && (
          <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
            {/* <BannerSVGAnim /> */}
            {/* <img src="https://www.fraserinstitute.org/sites/default/files/styles/large/public/comparing-performance-of-universal-health-care-countries-2017-web.jpg?itok=QnM2pgxO" /> */}
            <Hidden mdUp>
              <YouTube videoId="REZelbp272g" opts={opts} />
            </Hidden>
            <Hidden mdDown>
              <YouTube videoId="REZelbp272g" />
            </Hidden>
          </TweenOne>
        )}

        <Modal
          visible={this.state.visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          // footer={[
          //   <Button key="back" onClick={this.handleCancel}>Return</Button>,
          //   <Button key="submit" type="primary" loading={false} onClick={this.handleOk}>
          //     Submit
          //   </Button>,
          // ]}
        >
          <FooterForm />
        </Modal>
      </div>
    )
  }
}

export default Banner
