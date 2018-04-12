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
import heroimage from './wealth_banner.png'
import ReactGA from 'react-ga'
import MumbaiWellnessTile from './MumbaiWellnessTile'
import DelhiAgraTile from './DelhiAgraTile'

export default class MumbaiPackage extends Component {
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
              <Heading>Health is Wealth</Heading>
              <Heading strong tag="h4">As a businessman you work everyday towards taking full control of your business. Then why not take full control of your health too.
              Regular health Checkups are extremely important as they will help you to detect diseases before they become life threatening. It
              helps in lowering the risks of various conditions by prescribing treatments at early stages. Our 6 day package includes complete body
              check up at NABH/NABL accredited hospitals in India. It also includes visit to various factories and networking hubs to grow your
              business. To know more send us your details and we shall connect with you soon. </Heading>
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
                    
                      <strong>Day 3: Mumbai Sightseeing:</strong>
                      <ul>
                        <li>Post breakfast enjoy local sightseeing in Mumbai -
                      Visit Gateway of India, Haji ali mosque, Tarapore
                      aquarium and Juhu Beach.</li>
                        <li> Overnight stay in Hotel</li>
                      </ul>
                    

                    
                      <strong>Day 4: Business Opportunity Trip: Day 1</strong>
                      <ul>
                        <li>Post breakfast we start our business journey.</li>
                        <li> Visit Fire extinguisher Company, which is India’s
                        biggest and holds over 56% of market Share. We
                        visit the factory and explore how you can take the
                        distributorship or retail sales agency for the same.</li>
                        <li> Overnight stay in Mumbai Hotel</li>
                      </ul>
                    

                    
                      <strong>Day 5: Business opportunity Trip – Day 2</strong>
                      <ul>
                        <li>Chemicals: Visit one of the company who is a biggest
                      chemical distributors in the world – who export
                      Industrial chemical to specialty chemicals, solvents to
                      dyes. Biggest stockiest of BASF, DOW, Evonik and all
                      big brands of the world</li>
                        <li> Pharma: We visit to a company, which is over 80 year
                      old and has 11% distribution of all pharma products
                      by all major brands. also big manufacturers of API.</li>
                        <li> Bed Linen and Towel: We also Explore the
                      opportunity of visiting factory who manufacturers of
                      high quality towels and bed linen products.</li>
                        <li> Overnight stay at Hotel</li>
                      </ul>
                    

                    
                      <strong>Day 6: Jaipur – Delhi (Doctor Consultation)</strong>
                      <ul>
                        <li> Meeting with different companies where you would
                      like to explore for other work.</li>
                        <li> Local market shopping for your family and relatives.</li>
                        <li> Overnight stay at Hotel</li>
                      </ul>
                    

                    
                      <strong>Day 7: Hospital visit for Doctor Consultation</strong>
                      <li> Post breakfast in the morning, leave for Hospital.</li>
                      <li> Collect Medical reports and do doctor consultation.</li>
                      <li> Overnight stay at Hotel</li>
                    
                      <strong>Day 8: Mumbai (Departure):</strong><br/>
                      Post breakfast, airport drop as per the flight Schedule.
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
              <MumbaiWellnessTile />
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

