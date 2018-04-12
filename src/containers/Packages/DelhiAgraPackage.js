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
import Image from 'grommet/components/Image'
import Accordion from 'grommet/components/Accordion'
import AccordionPanel from 'grommet/components/AccordionPanel'
import ReactGA from 'react-ga'
import GridList, { GridListTile, GridListTileBar } from 'material-ui-next/GridList'
import Box from 'grommet/components/Box'
import LinkNext from 'grommet/components/icons/base/FormNextLink'
import OtherPackages from './OtherPackages'
import PackageContactForm from '../../components/PackageContactForm'
import { Link } from 'react-static'
import heroimage from './leisure_banner.png'
import './packages.css'
import MumbaiWellnessTile from './MumbaiWellnessTile'
import MumbaiBusinessTile from './MumbaiBusinessTile'

export default class DelhiAgraPackage extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  // componentDidMount () {
  //   ReactGA.initialize('UA-114309319-1')
  //   ReactGA.pageview(window.location.pathname + window.location.search)
  // }

  render () {
    return (
      <Box style={{ width: '100%' }}>
        <Section pad={{ horizontal: 'medium', vertical: 'medium' }} align="center" colorIndex="light-2">
          <Box
            size={{ width: 'xxlarge' }}
            pad={{ horizontal: 'medium', vertical: 'medium' }}
            colorIndex="light-2"
          >
          
            <Hero size="small" backgroundImage={heroimage} />
            <Heading>Health-eisure</Heading>
            <Heading strong tag="h4">In today’s Fast-paced life, we are always on the go and rarely get time to focus on our health and spare quality time with family.
            Regular health Checkups are extremely important as they will help you to detect diseases before they become life threatening. Thus
            we have carefully designed 7 day comprehensive health check up packages at NABH accredited hospitals in India coupled with leisure
            tour to Agra and Jaipur. With this package you can travel to India with your family for a full body check up and also spend some
            quality time visiting famous tourist destinations. So why wait, book your health-eisure package today</Heading>
          </Box>
        </Section>
        <Section pad="none" align="center" colorIndex="light-2">

          <Box
            direction="row"
            justify="center"
            size={{ width: 'xxlarge' }}
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
                  <Paragraph size="small" margin="small">
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
                    <strong>Day 1: Arrival at DELHI:</strong>
                    <ul>
                      <li>Arrival at Delhi International Airport you’ll be assisted by our tour manager.</li>
                      <li>Hotel Check-in and overnight in Delhi Hotel</li>
                    </ul>


                    <strong>Day 2: Health Checkup Day</strong>
                    <ul>
                      <li>Early morning around 7 Am, you will be
                    picked up for the hospital.</li>
                      <li>Schedule for whole day comprehensive
                    health checkup.</li>
                      <li>You will be dropped at Hotel in the
                    evening.</li>
                      <li> Stay overnight in Delhi </li>
                    </ul>


                    <strong>Day 3: Delhi – Agra</strong>
                    <ul>
                      <li>Post breakfast Around 9 am we start our
                    Journey for “TAJ MAHAL” Agra</li>
                      <li>We reach agra around 2 PM.</li>
                      <li>Check in at Hotel and immediately leave
                    for TAJ MAHAL</li>
                      <li>Enjoy the beautiful TAJ MAHAL and our
                    local guide will explain you the beauty of
                    it</li>
                      <li> Overnight stay in Agra </li>
                    </ul>


                    <strong>Day 4: Agra – Jaipur</strong>
                    <ul>
                      <li>Post breakfast around 9 am - visit Agra
                  fort</li>
                      <li> After that Proceed towards Jaipur “Pink
                  City” of India. </li>
                      <li> Enroute we will see Fatehpur Sikri and
                  reach Jaipur. </li>
                    </ul>


                    <strong>Day 5: Jaipur Sightseeing</strong>
                    <ul>
                      <li>Post breakfast we will go for explore
                    the Pink city (Jaipur)</li>
                      <li> Night stay in Jaipur </li>
                    </ul>


                    <strong>Day 6: Jaipur – Delhi (Doctor Consultation)</strong>
                    <ul>
                      <li>Post breakfast in the morning, leave for
                  Delhi.</li>
                      <li>Upon arrival in Delhi, you will be
                  transferred to Hospital </li>
                      <li> Collect Medical reports and do doctor
                  consultation.</li>
                      <li> Overnight stay at Delhi</li>
                    </ul>
                    <strong>Day 7: Delhi (Departure)</strong><br />
                Post breakfast, airport drop as per the flight
                Schedule.
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
        </Section>
        <Footer>
          <Box
            align="center"
            direction="row"
            size={{ width: 'xxlarge' }}
            flex="grow">
            <MumbaiBusinessTile />
            <MumbaiWellnessTile />
            {/* <Box basis="1/2" pad={{ horizontal: 'large' }}> */}
            {/* <Label uppercase>Share the article</Label> */}
          </Box>
        </Footer>
        <Footer />
      </Box>
    )
  }
}

