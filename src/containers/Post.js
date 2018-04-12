import React from 'react'
import Heading from 'grommet/components/Heading'
import Hero from 'grommet/components/Hero'
import Footer from 'grommet/components/Footer'
import Section from 'grommet/components/Section'
import Button from 'grommet/components/Button'
import Markdown from 'grommet/components/Markdown'
import Card from 'grommet/components/Card'
import FormField from 'grommet/components/FormField'
import SocialShare from 'grommet/components/SocialShare'
import Label from 'grommet/components/Label'
import HeadLine from 'grommet/components/Headline'
import Paragraph from 'grommet/components/Paragraph'
import GridList, { GridListTile, GridListTileBar } from 'material-ui-next/GridList'
import Box from 'grommet/components/Box'
import LinkNext from 'grommet/components/icons/base/FormNextLink'
import { getBlogTypeString, getBlogLink, getBlogHeading, getBlogShortDescription, getBlogImage, getBlogDescription, getBlogAuthor, getBlogAuthorDescription, getBlogFullLink, getNextBlogTitle } from './util'
import { withRouteData, Link } from 'react-static'


export default withRouteData(({ post }) => (
  <Box style={{ width: '100%' }}>
    <Section pad="none" align="center" colorIndex="light-2">
      <Box
        size={{ width: 'xxlarge' }}
        pad={{ horizontal: 'medium', vertical: 'medium' }}
        colorIndex="light-2"
      >
        <Heading>{`${getBlogHeading(post)}`} </Heading>
        <Heading strong tag="h4">{`${getBlogShortDescription(post)}`} </Heading>
        {/* <Heading tag="h2">{`${post.content.extended.md}`} </Heading> */}
        <Hero size="small" backgroundImage={`${getBlogImage(post)}`} />
      </Box>
    </Section>
    <Section pad="none" align="center" colorIndex="light-2">
      <Box
        direction="row"
        justify="center"
        size={{ width: 'xxlarge' }}
        pad={{ horizontal: 'large', vertical: 'medium', between: 'large' }}
        colorIndex="light-1">
        <Box>
          <Paragraph>
            <Markdown components={{
              h1: { props: { strong: true } },
              h2: { props: { strong: true } },
              p: { props: { size: 'large' } },
              li: { props: { style: { 'font-size': 24 } } },
              ul: { props: { strong: true } },
              img: { props: { size: 'large' } }
            }} content={`${post.content.extended.md}`} />
          </Paragraph>
        </Box>
        <Box basis="1/3">
          <Box margin={{ top: 'medium' }}>
            <Label size="small" uppercase>The Author</Label>
            <Paragraph size="large" margin="none">
              <strong>{getBlogAuthor(post)}</strong>
            </Paragraph>
            <Paragraph margin="medium" dangerouslySetInnerHTML={{ __html: getBlogAuthorDescription(post) }} />
          </Box>
          <Box
            direction="row"
            justify="between"
            separator="top"
          >
            <Label margin="small" size="small" uppercase>
              <strong>Share</strong>
            </Label>
            <Box
              align="center"
              direction="row"
              responsive={false}
            >
              <SocialShare
                type="email"
                link={getBlogFullLink(post)}
                colorIndex="grey-4"
              />
              <SocialShare
                type="twitter"
                link={getBlogFullLink(post)}
                colorIndex="grey-4"
              />
              <SocialShare
                type="facebook"
                link={getBlogFullLink(post)}
                colorIndex="grey-4"
              />
              <SocialShare
                type="linkedin"
                link={getBlogFullLink(post)}
                colorIndex="grey-4"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Section>
  </Box>
))
