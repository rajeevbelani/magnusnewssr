import React from 'react'
import Box from 'grommet/components/Box'
import Header from 'grommet/components/Header'
import { Link } from 'react-static'
import Menu from 'grommet/components/Menu'
import Title from 'grommet/components/Title'
import Image from 'grommet/components/Image'
import logoImg from '../mmlogo_small.png'
// import Drawer from 'rc-drawer-menu'
import nabhLogo from '../nabhlogo.png'
import iataLogo from '../iata.png'

export default () => (
  <Header fixed justify="center" colorIndex="light-1" pad="small">
    <Box size={{ width: { max: 'xxlarge' }, padding: 0 }} direction="row"
      responsive={false} align="start" float
      flex="grow">
      <Title />
      <Link to="/"><Image src={logoImg} size="thumb" /></Link>
      <Box pad="small" />
      {/* <Drawer defaultOpem="true"> */}
      <Menu label="Menu" inline direction="row" pad={{ horizontal: 'large' }}>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/patientstories">Patient Stories</Link>
        <Link to="/treatments">Treatments</Link>
        {/* <Link to="/doctors">Doctors</Link>
          <Link to="/hospitals">Hospitals</Link> */}
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </Menu>
      {/* </Drawer> */}
      <Image src={nabhLogo} size="thumb" />
      <Image src={iataLogo} size="thumb" />
    </Box>
  </Header>
)

