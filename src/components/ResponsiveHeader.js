import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
// import Drawer from 'material-ui/Drawer'
import Drawer from 'rc-drawer-menu'
import { Link, Router, withRouter } from 'react-static'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import List from 'material-ui/List'
import Header from '../layout/Header'
import PreHeader from '../layout/PreHeader'
import 'rc-drawer-menu/assets/index.css'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Hidden from 'material-ui/Hidden'
// import Header from '../layout/Header'
import styled, { injectGlobal } from 'styled-components'
import Divider from 'material-ui/Divider'
import MenuIcon from 'material-ui-icons/Menu'
import Routes from 'react-static-routes'
import { Layout, Menu, Icon, Affix } from 'antd'
// import { mailFolderListItems, otherMailFolderListItems } from './tileData'

const drawerWidth = 240

injectGlobal`
  #root {
    min-width: 100%;
    min-height: 100%;
    display: flex;
  }
`

const Logo = styled.div`
  height: 32px;
  background: #fff;
  border-radius: 6px;
  margin: 16px;
`

// const Trigger = styled(Icon)`
//   font-size: 18px;
//   line-height: 64px;
//   padding: 0 16px;
//   cursor: pointer;
//   transition: color 0.3s;

//   :hover {
//     color: #108ee9;
//   }
// `
const styles = theme => ({
  root: {
    flexGrow: 1,

    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
})

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  };

  render () {
    const { classes, theme } = this.props

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>mailFolderListItems</List>
        <Divider />
        <List>otherMailFolderListItems</List>
      </div>
    )

    return (
      <div>
        {/* <Hidden mdDown>  */}
        {/* <Drawer width="240px" /> */}
        <Hidden mdUp>
          <Affix>
            <PreHeader />
          </Affix>
        </Hidden>

        <Header />

        {/* </Hidden>  */}
        <div>
          <Hidden mdUp>
            <div className={classes.navIconHide}>
              <Drawer width="200px">
                {/* <Sider
              style={{ backgroundColor: '#404040' }}
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
            > */}
                <Logo />
                <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                  <Menu.Item key="1">
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                      {/* <Icon type="home" /> */}
                      <span>Home</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>
                      {/* <Icon type="bars" /> */}
                      <span>Blog</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/patientstories" style={{ color: 'inherit', textDecoration: 'none' }}>
                      {/* <Icon type="pushpin-o" /> */}
                      <span>Patient Stories</span>
                    </Link>
                  </Menu.Item>
                  {/* <Menu.Item key="4">
                    <Link to="/hospitals" style={{ color: 'inherit', textDecoration: 'none' }}>
                      <span>Hospitals</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <Link to="/doctors" style={{ color: 'inherit', textDecoration: 'none' }}>
                      <span>Doctors</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="6">
                    <Link to="/treatments" style={{ color: 'inherit', textDecoration: 'none' }}>
                      <span>Treatments</span>
                    </Link>
                  </Menu.Item> */}
                  <Menu.Item key="8">
                    <Link to="/newsevents" style={{ color: 'inherit', textDecoration: 'none' }}>
                      <span>News & Events</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="7">
                    <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>
                      <span>About</span>
                    </Link>
                  </Menu.Item>
                </Menu>
              </Drawer>
            </div>
          </Hidden>
          {/* <Hidden mdUp>
            <div className={classes.navIconHide}>
              <Drawer width="240px" />
            </div>
          </Hidden> */}

          {/* <main className={classes.content}>
            <div className={classes.toolbar} />
            <Routes />
            <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
          </main> */}
        </div>
      </div>
    )
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer)
