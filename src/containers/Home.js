import React, { Component } from 'react'
import { withSiteData } from 'react-static'
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
    </div>)
  }
}

// export default withSiteData(() => (

// ))


export default withRouteData(({ homepageData }) => (
  <Home homepageData={homepageData} />
))
