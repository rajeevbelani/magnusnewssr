
import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import Columns from 'grommet/components/Columns'
import Section from 'grommet/components/Section'
import Headline from 'grommet/components/Headline'
import Image from 'grommet/components/Image'
import Heading from 'grommet/components/Heading'
import Anchor from 'grommet/components/Anchor'
import LinkNextIcon from 'grommet/components/icons/base/LinkNext'
import ContactForm from '../components/ContactForm.js'

import { getBlogTypeString, getBlogHeading, getBlogShortDescription, getBlogDescription, getBlogImage, getBlogLink } from './util'
// import Header from '../components/Header'
//


export default withRouteData(({ patientStories }) => (
  <Box colorIndex="light-2">
    <Head>
      {/* <meta charSet="UTF-8" />
      <title>Medical Tourism in India, Medical treatment at Affordable Price, Travel with Magnus Medi, </title> */}
    </Head>
    <Section pad="large"
      justify="center"
      align="center"
      colorIndex="neutral-1-t">
      <Headline margin="none">
        Patient Stories
      </Headline>
    </Section>
    <Box
      className="columns-container"
      colorIndex="light-2"
      pad={{ horizontal: 'small' }}
    >
      <Columns
        size="medium"
        justify="center"
        maxCount={3}
      >
        {patientStories.map(post => (
          <Link to={getBlogLink(post)}>
            <Card
              colorIndex="light-1"
              margin="small"
              label={getBlogTypeString(post)}
              heading={
                <Heading tag="h3"><strong>{getBlogHeading(post)}</strong></Heading>
              }
              description={
                <Heading tag="h4">{getBlogShortDescription(post)}</Heading>
              }
              contentPad="medium"
              direction="column"
              thumbnail={
                <Image size="medium" src={`${getBlogImage(post)}`} />
              }
              link={
                <Link to={`/patientstories/post/${post.slug}/`}><Anchor href={`/patientstories/post/${post.slug}/`} label="Read More"
                  icon={<LinkNextIcon />} /></Link>

              } />
          </Link>
        ))}
      </Columns>
    </Box>
  </Box>
))
