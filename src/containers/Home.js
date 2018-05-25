import React, { Component } from 'react';
import { Head, withRouteData } from 'react-static';
import Banner from '../components/Home/Banner';
import Features from '../components/Home/Features';
import OurAssociates from '../components/Home/OurAssociates';
// import PatientStories from '../components/Home/PatientStoriesCarousel'
import PatientStories from '../components/Home/PatientStories';
// import FloatingActionButton from '../components/FloatingContactButton'

class Home extends Component {
  // constructor () {
  //   super()
  // }

  componentDidMount () {
    // window.startLazyLoad()
  }

  render () {
    const patientSnippets = this.props.homepageData.snippets

    return (<div style={{ ul: '0px' }}>
      <Head>
        <meta charSet="UTF-8" />
        <title>Medical Tourism in India, Medical treatment at Affordable Price, Travel with Magnus Medi</title>
        <meta name="description" content="Magnus Medi helps you to get the best treatment at an affordable price by connecting you to best hospitals and doctors in India. It assists you in your medical journey to India by providing multiple opinions, hotels and travel facilities." />
        <meta name="keywords" content="Best Medical tourism company in India, Healthcare tourism in India, Medical Travel Assistance, Medical tour facilitator, Affordable price for medical treatment in India, Medical Care, multiple opinions from doctor, free quotes, Enquiry" />
      </Head>
      <div>
        <Banner />
        <Features />
        <OurAssociates />
        {/* <FloatingActionButton /> */}
        <PatientStories patientSnippets={patientSnippets} />
        {/* <Card title="Welcome to" style={{ width: '100%' }} bodyStyle={{ padding: 0 }}>
        <div className="custom-image">
          <img alt="react-static" width="100%" src={logoImg} />
        </div>
      </Card> */}
      </div>
    </div>)
  }
}
// export default withSiteData(() => (

// ))


export default withRouteData(({ homepageData }) => (
  <Home homepageData={homepageData} />
))
