import React, { Component } from 'react'

import Card from 'grommet/components/Card'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import Quote from 'grommet/components/Quote'
import LinkNextIcon from 'grommet/components/icons/base/LinkNext'
import Anchor from 'grommet/components/Anchor'
import Button from 'grommet/components/Button'
import SocialTwitterIcon from 'grommet/components/icons/base/SocialTwitter'
import TipIcon from 'grommet/components/icons/base/Tip'
import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook'
import SocialLinkedinIcon from 'grommet/components/icons/base/SocialLinkedin'
import { Link } from 'react-static'


import { getBlogTypeString, getBlogLink, getBlogShortDescription, getBlogAuthor } from '../containers/util'

export default class QuoteCard extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  _onClickCard (path, event) {
    // event.preventDefault();
    // window.location.href = path;
  }

  render () {
    const { post, showDescription, twitterCard, facebookCard, tipCard, linkedInCard } = this.props
    const descriptionNode = (<Heading tag="h4" />)

    // const twitterIconBox = (
    //   <Box align="end">
    //     <SocialTwitterIcon />
    //   </Box>
    // )

    // const facebookIconBox = (
    //   <Box align="end">
    //     <SocialFacebookIcon />
    //   </Box>
    // )

    // const linkedinIconBox = (
    //   <Box align="end">
    //     <SocialLinkedinIcon />
    //   </Box>
    // )

    // const tipIconBox = (
    //   <Box align="end" margin="medium">
    //     <TipIcon />
    //   </Box>
    // )

    // let iconBox
    // if (twitterCard) { iconBox = (twitterIconBox) }
    // if (facebookCard) { iconBox = (facebookIconBox) }
    // if (tipCard) { iconBox = (tipIconBox) }
    // if (linkedInCard) { iconBox = (linkedinIconBox) }


    const socialFeedCard = (
      <Link to={'/contact'}>
        <Quote credit={getBlogAuthor(post)}
          size="medium"
          colorIndex="light-1"
          borderColorIndex="accent-1">
          <Heading tag="h3">
            <b>{ getBlogShortDescription(post) }</b>
          </Heading>
        </Quote>
      </Link>
    )

    return (
      // <Quote>
      //   { socialFeedCard }
      // </Quote>
      socialFeedCard
    )
  }
}
