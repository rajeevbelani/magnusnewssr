import React from 'react'
import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Title from 'grommet/components/Title'
import FacebookIcon from 'grommet/components/icons/base/SocialFacebook'
import TwitterIcon from 'grommet/components/icons/base/SocialTwitter'
import LinkedInIcon from 'grommet/components/icons/base/SocialLinkedin'
import { Link } from 'react-static'
import Menu from 'grommet/components/Menu'

export default () => (

  <Box style={{ width: '100%', 'background-color': '#0C6A8A' }} flex="grow" size="medium" justify="between" align="center" pad="large">
    <Box
      align="center" flex="grow" direction="row">
      <Box justify="between" align="center" basis="1/4">
        <Title style={{ 'font-size': '20px', color: '#fff' }}>© 2018 Magnus Medi</Title>
      </Box>
      <Box basis="1/4" justify="between" align="center">
        <Title style={{ 'font-size': '20px', color: '#fff' }}>wecare@magnusmedi.com</Title>
      </Box>
      <Box basis="1/4" justify="between" align="center">
        <Title style={{ 'font-size': '20px', color: '#fff' }}>87878787878</Title>
      </Box>
      <Box basis="1/4" justify="between" align="center">
        <Title style={{ 'font-size': '20px', color: '#fff' }}>Short Address</Title>
      </Box>

    </Box>
    <Box align="center" flex="grow" direction="row" pad={{ between: 'medium' }}>
      <Box basis="1/4" justify="between" align="center"><Link to="http://bit.ly/2FdbHxw" target="_blank" ><FacebookIcon style={{ fill: '#fff' }} /></Link></Box>
      <Box basis="1/4" justify="between" align="center"><Link to="http://bit.ly/2CvIP0H" target="_blank" ><TwitterIcon style={{ fill: '#fff' }} /></Link></Box>
      <Box basis="1/4" justify="between" align="center"><Link to="http://bit.ly/2EF0I36" target="_blank" ><LinkedInIcon style={{ fill: '#fff' }} /></Link></Box>
    </Box>

    <Box align="center" flex="grow" direction="row" pad={{ between: 'medium' }}>
      <Menu direction="row"
        size="small"
        dropAlign={{ right: 'right' }}>
        <Anchor style={{ color: '#fff' }} href="http://www.magnusmedi.com/privacypolicy.html">
         Privacy Policy
        </Anchor>
        <Anchor style={{ color: '#fff' }} href="http://www.magnusmedi.com/privacypolicy.html">
          Terms of Use
        </Anchor>
      </Menu>
    </Box>
  </Box>
)

