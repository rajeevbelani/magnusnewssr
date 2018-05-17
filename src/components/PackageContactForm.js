import React, { Component } from 'react'
import Box from 'grommet/components/Box'
import Form from 'grommet/components/Form'
import Heading from 'grommet/components/Heading'
import FormFields from 'grommet/components/FormFields'
import Section from 'grommet/components/Section'
import Notification from 'grommet/components/Notification'
import FormField from 'grommet/components/FormField'
import Button from 'grommet/components/Button'
import Layer from 'grommet/components/Layer'
import TextInput from 'grommet/components/TextInput'
import Paragraph from 'grommet/components/Paragraph'
import Footer from 'grommet/components/Footer'
import LoadingIndicator from '../components/LoadingIndicator'
import {
  addNewEnquiry
} from '../actions/enquiry'

class PackageContactForm extends Component {
  constructor () {
    super()
    this._onSubmit = this._onSubmit.bind(this)
    this._onNameChange = this._onNameChange.bind(this)
    this._onEmailChange = this._onEmailChange.bind(this)
    this._onMessageChange = this._onMessageChange.bind(this)
    this.state = {
      name: undefined,
      email: undefined,
      ailment: 'Ailment',
      treatment: 'Treatment',
      message: 'Additional Message',
      sendingEnquiry: false,
      notificationActive: false
    }
  }

  _onSubmit (event) {
    console.log(`On Submit ::  ${this.state.name} ::  ${this.state.email}`)
    this.setState({ sendingEnquiry: true })
    const enquiry = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      ailment: this.state.ailment,
      treatment: this.state.treatment,
    }
    addNewEnquiry(enquiry, () => {
      this.setState({ sendingEnquiry: false,
        notificationActive: true })
    })
    // event.preventDefault();
    // if (this.state.name) {
    //   // const currentSlug = this.state.name.replace(/[^\w\d_\-.]+/ig, '')
    //   this.props.onSubmit({
    //     name: this.state.name,
    //     description: this.state.desc,
    //     app: this.state.app,
    //     slug: currentSlug,
    //     startDate: this.state.startDate,
    //     endDate: this.state.endDate,
    //     orientation: this.state.orientation,
    //     isArchived: false,
    //   })
    // }
  }

  _onNameChange (event) {
    this.setState({ name: event.target.value })
  }

  _onEmailChange (event) {
    this.setState({ email: event.target.value })
  }

  _onMessageChange (event) {
    // console.log(`On Message Change ::  ${event.target.value}`)
    this.setState({ message: event.target.value })
  }


  render () {
    let loadingNode
    let notificationNode
    if (this.state.sendingEnquiry) {
      loadingNode = <LoadingIndicator modal message={'Sending your Request. Please Wait...'} />
    }
    if (this.state.notificationActive) {
      notificationNode = <Notification state="Your request has been received. We will get in touch with you shortly on your email." message="Request Submitted" status="ok" />
    }

    return (
      // <Layer onClose={this.props.onClose}
      //   closer
      //   align="center"
      //   a11yTitle={'Add Campaign'}>
      <Box>
        { loadingNode }
        { notificationNode }
        {/* <Section align="center" colorIndex="light-2"> */}
        <Box
          align="center"
          // size={{ width: 'xxlarge' }}
          // pad={{ horizontal: 'large', vertical: 'medium' }}
        >
          <Form pad="large">

            <FormFields>
              <FormField
                help="First and last name"
                label="Name *"
                htmlFor="nameInput"
              >
                <input
                  required
                  autoFocus
                  placeholder="Enter Name Here"
                  id="nameInput"
                  autoComplete="on"
                  name="name"
                  type="text"
                  onChange={this._onNameChange}
                />
              </FormField>
              <FormField
                help="How should we get in touch with you?"
                label="Email *"
                htmlFor="emailInput"
              >
                <input
                  required
                  id="emailInput"
                  autoComplete="on"
                  name="email"
                  placeholder="Enter your Email here"
                  type="email"
                  onChange={this._onEmailChange}
                />
              </FormField>
              <FormField
                label="Phone Number *"
                htmlFor="phoneInput"
              >
                <input
                  required
                  id="phoneInput"
                  autoComplete="on"
                  name="phone"
                  placeholder="Enter your Phone Number here"
                  type="number"
                  onChange={this._onEmailChange}
                />
              </FormField>

              <FormField
                label="Country *"
                htmlFor="countryInput"
              >
                <input
                  required
                  id="countryInput"
                  autoComplete="on"
                  name="country"
                  placeholder="Enter your Phone Number here"
                  type="text"
                  onChange={this._onEmailChange}
                />
              </FormField>

            </FormFields>
            <FormField
              label="Message"
              htmlFor="message-input"
            >
              <TextInput
                required
                id="message-input"
                onDOMChange={this._onMessageChange}
              />
            </FormField>
            <Footer pad={{ vertical: 'medium' }} align="center">
              <Button
                fill
                label="Submit"
                primary
                onClick={this._onSubmit}
              />
            </Footer>
          </Form>
        </Box>
        {/* </Section> */}

      </Box>
      // </Layer>
    )
  }
}

export default PackageContactForm

