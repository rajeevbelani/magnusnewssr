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

export default class NewsFeed extends Component {
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
    // console.log(`POSTS :::  ${JSON.stringify(posts)}`)
    return (

      <Columns
        size="small"
        justify="center"
        maxCount={noColums}
      >
        <Box pad="medium">
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <div style="width:225px; text-align:center;" ><iframe  src="https://www.eventbrite.com/calendar-widget?eid=45800039150" frameborder="0" height="577" width="195" marginheight="0" marginwidth="0" scrolling="no" allowtransparency="true"></iframe><div style="font-family:Helvetica, Arial; font-size:12px; padding:10px 0 5px; margin:2px; width:195px; text-align:center;" ></div></div>
              `,
            }}
          />
        </Box>
        {posts.map(post => (
          <Box pad="medium">
            { getMappedTypeForPost(post) === 'TYPE_BLOG' && <BlogCard post={post} showDescription={showDesc} /> }
            { getMappedTypeForPost(post) === 'TYPE_SOCIAL' && <SocialCard post={post} tipCard /> }
            { getMappedTypeForPost(post) === 'TYPE_QUOTE' && <QuoteCard post={post} showDescription={showDesc} /> }
          </Box>
        ))}
      </Columns>
    )
  }
}
