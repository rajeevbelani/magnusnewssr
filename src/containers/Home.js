import React, { Component } from 'react'
import { withSiteData, Head } from 'react-static'
import { Card } from 'antd'
import logoImg from '../logo.png'
import Banner from '../components/Home/Banner'
import Features from '../components/Home/Features'
import HospitalList from '../components/HospitalList'
import OurAssociates from '../components/Home/OurAssociates'
import { withRouteData, Head } from 'react-static'
// import PatientStories from '../components/Home/PatientStoriesCarousel'
import PatientStories from '../components/Home/PatientStories'
import enquireScreen from '../layout/utils'
// import FloatingActionButton from '../components/FloatingContactButton'

class Home extends Component {
  // constructor () {
  //   super()
  // }

  render () {
    const patientSnippets = this.props.homepageData.snippets

    return (<div style={{ ul: '0px' }}>
      <Head>
        <meta charSet="UTF-8" />
        <title>Blogs on Medical treatment in India, Know more about medical travel to India</title>
        <meta name="description" content="India is one of the best destinations for advanced medical procedures and treatment of various diseases at an affordable price. To know more contact us at Magnus Medi." />
        <meta name="keywords" content="Medical Health news, blogs on medical tourism, healthcare information" />
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
