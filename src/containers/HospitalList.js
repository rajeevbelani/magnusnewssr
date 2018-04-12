
import React from 'react'
import { withRouteData, Link } from 'react-static'
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import Columns from 'grommet/components/Columns'
import Section from 'grommet/components/Section'
import Headline from 'grommet/components/Headline'
import Anchor from 'grommet/components/Anchor'
import Heading from 'grommet/components/Heading'
import LinkNextIcon from 'grommet/components/icons/base/LinkNext'
// import Header from '../components/Header'
//

export default withRouteData(({ hospitals }) => (
  <Box>
    <Section pad="large"
      justify="center"
      align="center"
      colorIndex="neutral-1-t">
      <Headline margin="none">
        Hospitals
      </Headline>
    </Section>
    <Box
      className="columns-container"
      colorIndex="light-2"
      pad={{ horizontal: 'large' }}
      full="horizontal"
    >
      <Columns
        size="medium"
        justify="center"
        maxCount={3}
        responsive
      >
        {hospitals.map(hospital => (
          <Card
            colorIndex="light-1"
            margin="small"
            contentPad="medium"
            direction="column"
            link={
              <Link to={`/hospitals/hospital/${hospital.slug}/`}><Anchor href={`/blog/post/${hospital.slug}/`} label="Learn More"
                icon={<LinkNextIcon />} /></Link>
            }>
            <Heading tag="h3">
              <b>{hospital.name}</b>
            </Heading>
          </Card>
        ))}
      </Columns>
    </Box>
  </Box>
))
