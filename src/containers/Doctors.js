import React from 'react'
import { withRouteData, Link } from 'react-static'
import Section from 'grommet/components/Section'
import Title from 'grommet/components/Title'
import Headline from 'grommet/components/Headline'
import DoctorList from '../components/DoctorList'
//

export default withRouteData(({ doctors }) => (
  <div>
    <Section pad="large"
      justify="center"
      align="center"
      colorIndex="neutral-1-t">
      <Headline size="small" margin="none">
        Doctors
      </Headline>
    </Section>
    <DoctorList hospitals={doctors} />
  </div>
))
