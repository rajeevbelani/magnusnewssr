import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
// const { Sider, Content } = Layout
import { Affix, Col, Row } from 'antd';
import Image from 'grommet/components/Image';
import React from 'react';
import { hot } from 'react-hot-loader';
// import Header from './containers/Header'
import { Provider } from 'react-redux';
import { Link, Route, Router, Switch } from 'react-static';
import Routes from 'react-static-routes';
import { injectGlobal } from 'styled-components';
import '../node_modules/grommet-css';
import ResponsiveHeader from './components/ResponsiveHeader';
import AppLinks from './containers/AppLinks';
import DelhiAgraPackage from './containers/Packages/DelhiAgraPackage';
import MumbaiPackage from './containers/Packages/MumbaiPackage';
import WellnessPackage from './containers/Packages/WellnessPackage';
import ThankYou from './containers/ThankYou';
// import Footer from './components/Footer'
import Footer from './layout/Footer';
import store from './store';
import './theme/style.js';


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
          <div style={{ 'width': '100%' }}>
            <ResponsiveHeader />
            <div style={{ 'font-family': 'Avenir' }}>
                {/* <Header /> */}
                  <CssBaseline />
                  <div pad="none"
                    margin="none">
                    <Switch>
                    <Route path="/landing/apps" component={AppLinks} />  
                    <Route path="/packages/health/delhiagra" component={DelhiAgraPackage} />
                    <Route path="/packages/health/businesshealth" component={MumbaiPackage} />
                    <Route path="/packages/health/wellness" component={WellnessPackage} />
                    <Route path="/thankyou" component={ThankYou} />
                    {/* <Route path=""> */}
                    <Routes />
                    </Switch>
                  </div>
                  <Footer />
                {/* <Footer style={{ textAlign: 'center', background: '#888' }}>
                      Copyright Magnus Medi
                </Footer>  */}
              </div>
              <Hidden mdUp>
                <Affix offsetBottom={40} className="fab">
                  <Row gutter={10}>
                      <Col span={12}></Col>
                      <Col span={6}><Link to='https://api.whatsapp.com/send?phone=919137961307&text=Hi I need some advice on travelling to India for some treatment'><Image src='./whatsapp.png' size='small' /></Link></Col>
                  </Row>
                </Affix>
            </Hidden>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default hot(module)(MagnusApp)
