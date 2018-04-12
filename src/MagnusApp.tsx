import React from 'react'
import { Loading, Router, Switch, Route, Link } from 'react-static'
import { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import CssBaseline from 'material-ui-next/CssBaseline'
import App from 'grommet/components/App'
// import Header from './containers/Header'
import { Provider } from 'react-redux'
import '../node_modules/grommet-css'
import Box from 'grommet/components/Box'
import Routes from 'react-static-routes'
import store from './store'
import Image from 'grommet/components/Image'
import Button from 'material-ui/Button'
import ResponsiveHeader from './components/ResponsiveHeader'
// import Footer from './components/Footer'
import Footer from './layout/Footer'
// const { Sider, Content } = Layout
import { Button, Layout, Menu, Icon, Affix, Row, Col } from 'antd'
import './theme/style.js'
import SpeedDial from './components/SpeedDial';
import DelhiAgraPackage from './containers/Packages/DelhiAgraPackage'
import MumbaiPackage from './containers/Packages/MumbaiPackage'
import WellnessPackage from './containers/Packages/WellnessPackage'


injectGlobal`
  #root {
    min-width: 100%;
    min-height: 100%;
    display: flex;
  }
`



class MagnusApp extends React.Component {
  state = {
    collapsed: false,
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Box style={{ 'width': '100%' }}>
            <ResponsiveHeader />
            <div style={{ 'font-family': 'Avenir' }}>
                {/* <Header /> */}
                  <CssBaseline />
                  <Box pad="none"
                    margin="none">
                    <Switch>
                    <Route path="/packages/health/delhiagra" component={DelhiAgraPackage} />
                    <Route path="/packages/health/businesshealth" component={MumbaiPackage} />
                    <Route path="/packages/health/wellness" component={WellnessPackage} />
                    <Routes />
                    </Switch>
                  </Box>
                  <Footer />
                {/* <Footer style={{ textAlign: 'center', background: '#888' }}>
                      Copyright Magnus Medi
                </Footer>  */}
              </div>
              <Affix offsetBottom={40} className="fab">
                <Row gutter={10}>
                    <Col span={12}></Col>
                    <Col span={6}><Link to='https://api.whatsapp.com/send?phone=918108888129&text=somemessage'><Image src='./whatsapp.png' size='thumb' /></Link></Col>
                </Row>
            </Affix>  
          </Box>
        </Router>
      </Provider>
    )
  }
}

export default hot(module)(MagnusApp)
