import React, { Component } from 'react'
import { Link } from 'react-static'
import Button from 'grommet/components/Button'
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import Columns from 'grommet/components/Columns'
import Heading from 'grommet/components/Heading'
import Anchor from 'grommet/components/Anchor'
import Image from 'grommet/components/Image'
import Quote from 'grommet/components/Quote'
import LinkNextIcon from 'grommet/components/icons/base/LinkNext'
import { getMappedTypeForPost, getBlogTypeString, getBlogLink } from '../containers/util'
import BlogCard from './BlogCard'
import SocialCard from './SocialCard'
import SimpleMediaCard from './SimpleMediaCard'
import QuoteCard from './QuoteCard'

export default class NewNewsFeed extends Component {
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
    const { posts, showDesc, noColums } = this.props

    return (<Box
      className="columns-container"
      colorIndex="light-2"
      pad={{ horizontal: 'small', vertical: 'small' }}
    >

      <Columns
        size="small"
        justify="center"
        maxCount={noColums}
      >
        {posts.map(post => (
          <Box pad="medium">
            { getMappedTypeForPost(post) === 'TYPE_BLOG' && <SimpleMediaCard post={post} showDescription={showDesc} /> }
            { getMappedTypeForPost(post) === 'TYPE_SOCIAL' && <SocialCard post={post} tipCard /> }
            { getMappedTypeForPost(post) === 'TYPE_QUOTE' && <QuoteCard post={post} showDescription={showDesc} /> }
          </Box>
        ))}
      </Columns>
    </Box>)
  }
}
