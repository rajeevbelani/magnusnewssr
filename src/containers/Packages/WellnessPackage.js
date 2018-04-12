import React, { Component } from 'react'
import Heading from 'grommet/components/Heading'


import Hero from 'grommet/components/Hero'
import Footer from 'grommet/components/Footer'
import Section from 'grommet/components/Section'
import Button from 'grommet/components/Button'
import Markdown from 'grommet/components/Markdown'
import Title from 'grommet/components/Title'
import Card from 'grommet/components/Card'
import FormField from 'grommet/components/FormField'
// import { Timeline } from 'antd'
import SocialShare from 'grommet/components/SocialShare'
import Label from 'grommet/components/Label'
import HeadLine from 'grommet/components/Headline'
import Paragraph from 'grommet/components/Paragraph'
import Accordion from 'grommet/components/Accordion'
import AccordionPanel from 'grommet/components/AccordionPanel'

import GridList, { GridListTile, GridListTileBar } from 'material-ui-next/GridList'
import Box from 'grommet/components/Box'
import LinkNext from 'grommet/components/icons/base/FormNextLink'
import OtherPackages from './OtherPackages'
import PackageContactForm from '../../components/PackageContactForm'
import { Link } from 'react-static'
import heroimage from './wellness_banner.png'
import ReactGA from 'react-ga'
import MumbaiBusinessTile from './MumbaiBusinessTile'
import DelhiAgraTile from './DelhiAgraTile'

export default class WellnessPackage extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

//   componentDidMount () {
//     ReactGA.initialize('UA-114309319-1')
//     ReactGA.pageview(window.location.pathname + window.location.search)
//   }


  render () {
    return (
      <Section className="homeclass">
        {/* <Hero size="small" backgroundImage={`${homeBanner1}`} colorIndex="light-1"> */}

        <Hero align="center" backgroundColorIndex="dark" backgroundImage={heroimage} size="small">
          <Box style={{ 'background-color': 'rgba(0, 0, 0, 0.3)', color: '#fff', 'font-size': '16' }}>

            {/* <Heading style={{ color: '#fff' }}> Health-eisure </Heading>
            <Heading style={{ color: '#fff' }}> Complete Medical check up with travel leisure </Heading> */}
          </Box>

        </Hero>
        <Box>
          <Section pad="none" align="center" colorIndex="light-2">
            <Box
              size={{ width: '80%' }}
              align="start"
              pad={{ horizontal: 'medium', vertical: 'medium' }}
              colorIndex="light-2"
            >
              <Heading>Healthness</Heading>
              <Heading strong tag="h4">The road to a healthy and happy life is regular health check up. Health check ups include various tests which help in diagnosing the diseases in advance before they become life threatening and painful. Our 6 day package includes complete body check up at NABH/NABL accredited hospitals in India along with a rejuvenating wellness treatment at an Ayurvedic centre. So come, nurture your health with great care. To know more send us your details and we shall connect with you soon. </Heading>
            </Box>
          </Section>
          <Section pad="none" align="center" colorIndex="light-2">

            <Box
              direction="row"
              justify="center"
              size={{ width: '80%' }}
              pad={{ horizontal: 'large', vertical: 'medium', between: 'large' }}
              colorIndex="light-1">
              <Box basis="2/3">


                <Accordion openMulti active={0}>
                    <AccordionPanel heading={<Title><strong>Key Benefits</strong></Title>}>
                    <Paragraph size="medium" margin="small">
                      <ul>
                        <li><strong>Quality:</strong> Check-up to be done only at NABH/NABL Accredited Hospital</li>
                        <li><strong>Parameters:</strong> Over 50 Health Parameters Covered under Health Check-up Package</li>
                        <li><strong>Affordability:</strong> 20 – 30 % lower than the average market prices.</li>
                        <li><strong>Appointments:</strong> No more waiting at anywhere like Hospital & Hotel.</li>
                        <li><strong>Opportunity:</strong> Visit well known tourist attractions around the capital of India</li>
                        <li><strong>Customization:</strong> Can be customized Holiday & Health Medical Check-up Packages</li>
                        <li><strong>Zero Headache:</strong> Everything is taken care by us, you have to just pack your bag and enjoy your trip in India. </li>
                      </ul>
                    </Paragraph>
                    </AccordionPanel>
                  <AccordionPanel heading={<Title><strong>Tests Included</strong></Title>}>
                    <Paragraph size="medium" margin="small">
                    A major aspect of Comprehensive Health Checkup is the early detection and treatment of any lurking serious conditions. A regular health
check-up not only ensures your well-being, but also catches the onset of preventable diseases, saving you a lot of distress and expense. We
have some major conditions listed below that can commonly be identified by a Comprehensive Health Checkup.

                      <ul>
                        <li>Vitamin Investigation</li>
                        <li> Thyroid History</li>
                        <li> Investigations</li>
                        <li> Imaging of Key Areas</li>
                        <li> Pulmonary Diagnostics</li>
                        <li> ENT </li>
                        <li> Lipid Profile </li>
                        <li> Diabetic </li>
                        <li> Kidney Functions </li>
                        <li> Evaluation of Cardiac Systems</li>
                        <li> Liver Function Test </li>
                        <li> HIV/HBsAG </li>
                        <li> 2 Physicians Consultation </li>
                        <li> Calcium Score </li>
                        <li> Detailed Blood Profile </li>
                        <li> Detailed Specialty consultation </li>
                        <li> Infection Screening </li>
                        <li> Ophthalmologist </li>
                        <li> Dentistry Opinion </li>
                        <li> Dietician Opinion </li>
                        <li> Cancer Markers </li>
                        <li> Pap Smear (Only for Female) </li>

                      </ul>
                    </Paragraph>
                  </AccordionPanel>
                  <AccordionPanel heading={<Title><strong>Itinerary</strong></Title>}>
                    <Paragraph>
                      <strong>Day 1: Arrival at Mumbai:</strong>
                      <ul>
                        <li>Arrival at Mumbai International Airport you’ll be assisted by our tour manager.</li>
                        <li>Hotel Check-in and overnight in Hotel</li>
                      </ul>

                      <strong>Day 2: Health Checkup Day</strong>
                      <ul>
                        <li>Early morning around 7 Am, you will be picked up for the
                        hospital.</li>
                        <li>Schedule for whole day comprehensive health checkup.</li>
                        <li> You will be dropped at Hotel in the evening.</li>
                        <li> Stay overnight in Hotel</li>
                      </ul>

                      <strong>Day 3: Ayurveda / Wellness Treatment Stay</strong>
                      <ul>
                        <li>Post breakfast we start journey for Wellness
                    Retreat Treatment Package – which is a center of
                    excellence for complete Ayurvedic Treatments.</li>
                        <li>Wellness Retreat is One and half hour away from
                    main Mumbai City, By afternoon we reach there</li>
                        <li> Where you have to stay for 3Days 2 Nights</li>
                        <li> Overnight stay in Wellness Centre</li>
                      </ul>

                      <strong>Day 4 & Day 5 : Ayurveda / Wellness Treatment Stay</strong>
                      <ul>
                        <li>3 Days Escape into Holistic Healing Centre with a range of
                      integrated treatments.</li>
                        <li> You will get here experience of Ayurveda, naturopathy
                      therapies, Yoga sessions and health lectures along with
                      delicious holistic meals and nature walks.</li>
                        <li> Overnight stay in Wellness Centre</li>
                      </ul>


                      <strong>Day 6: Hospital visit for Doctor Consultation</strong>
                      <ul>
                        <li>Post lunch we leave for main Mumbai City and Check-in
                      into Hotel.</li>
                        <li> Within half n hour we leave for Hospital to Collect the
                      Medical Checkup reports</li>
                        <li> Collect Medical reports and do doctor consultation.</li>
                        <li> Overnight stay at Mumbai Hotel</li>
                      </ul>
                      <strong>Day 7: Mumbai (Departure):</strong><br />
                      Post breakfast, airport drop as per the flight Schedule.
                    </Paragraph>
                    <Paragraph size="large">
                    Package Starts with USD 900/- per person. We can customise the package for you. To talk to our assistant fill up the enquiry form and press submit
                    </Paragraph>
                  </AccordionPanel>
                </Accordion>
                <Paragraph size="large">
                    Package Starts with USD 900/- per person. We can customise the package for you. To talk to our assistant fill up the enquiry form and press submit
                </Paragraph>
              </Box>
              <Box basis="1/3">
                <Box
                  direction="row"
                  justify="between"
                  separator="top"
                >
                  <PackageContactForm />
                </Box>
              </Box>
            </Box>
            {/*<OtherPackages />*/}
          </Section>
          <Footer>
            <Box
              align="center"
              direction="row"
              size={{ width: 'xxlarge' }}
              flex="grow">
              <DelhiAgraTile />
              <MumbaiBusinessTile />
              {/* <Box basis="1/2" pad={{ horizontal: 'large' }}> */}
              {/* <Label uppercase>Share the article</Label> */}
            </Box>
          </Footer>
          <Footer />
        </Box>
      </Section>
    )
  }
}

