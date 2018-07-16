import React, { Component } from 'react'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd'
import { Redirect } from 'react-static';

const FormItem = Form.Item
const Option = Select.Option
const AutoCompleteOption = AutoComplete.Option

const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}]

const encode = data => Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")

class EnquiryForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    prefix: '1',
    phone: '',
    email: '',
    message: '',
  };
  handleSubmit = e => {
    e.preventDefault()
    // <Redirect to='/dashboard' />
    // console.log(`THIS STATE ::  ${JSON.stringify(this.state)}`)

    // this.setState({ [e.target.name]: e.target.value })
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(`Handle Submit ::: ${JSON.stringify(values)}`)
        console.log(`Handle Submit 111 ::: ${JSON.stringify(this.state)}`)
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({ 'form-name': 'contact', ...this.state }),
        })
          .then(() => alert('Success'))
          .catch(error => alert(error))
      }
    })
  }

  handleChange = e => {
    // this.getCountryCodes()
    console.log(`Handle Change :: ${e.target.name}`)
    this.setState({ [e.target.name]: e.target.value })
  }

  handlePhoneCodeChange = e => {
    console.log(`Handle PHone Code Change ::  ${JSON.stringify(e)}`)
    this.setState({ prefix: e })
  }
  handleConfirmBlur = e => {
    const value = e.target.value
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!')
    } else {
      callback()
    }
  }
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }
  handleWebsiteChange = value => {
    let autoCompleteResult
    if (!value) {
      autoCompleteResult = []
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`)
    }
    this.setState({ autoCompleteResult })
  }
  render () {
    const { getFieldDecorator } = this.props.form
    const { autoCompleteResult, phone, email, message } = this.state

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    }
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: this.state.prefix,
    })(
      <Select name="phonePrefix" style={{ width: 80 }} onChange={this.handlePhoneCodeChange}>
        {/* {this.getCountryCodes()} */}
        <Option value="1">+1</Option>
        <Option value="234">+234</Option>
        <Option value="251">+251</Option>
        <Option value="252">+252</Option>
        <Option value="253">+253</Option>
        <Option value="254">+254</Option>
        <Option value="255">+255</Option>
        <Option value="256">+256</Option>        
        <Option value="257">+257</Option>        
        <Option value="258">+258</Option>        
        <Option value="259">+259</Option>        
        <Option value="260">+260</Option>        
        <Option value="261">+261</Option>        
        <Option value="262">+262</Option>        
        <Option value="60">+60</Option>        
        <Option value="61">+61</Option>        
        <Option value="62">+62</Option>        
        <Option value="63">+63</Option>
        <Option value="64">+64</Option>                        
        <Option value="65">+65</Option>        
        <Option value="66">+66</Option>        
        <Option value="7">+7</Option>        
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
        <Option value="8">+880</Option>        
        <Option value="90">+90</Option>
        <Option value="91">+91</Option>
        <Option value="92">+92</Option>
        <Option value="93">+93</Option>
        <Option value="94">+94</Option>
        <Option value="95">+95</Option>
        <Option value="960">+960</Option>
        <Option value="961">+961</Option>
        <Option value="962">+962</Option>
        <Option value="963">+963</Option>
        <Option value="964">+964</Option>
        <Option value="965">+965</Option>
        <Option value="966">+966</Option>
        <Option value="967">+967</Option>
        <Option value="968">+968</Option>
        <Option value="970">+970</Option>
        <Option value="971">+971</Option>
        <Option value="972">+972</Option>
        <Option value="973">+973</Option>
        <Option value="974">+974</Option>
        <Option value="975">+975</Option>
        <Option value="976">+976</Option>
        <Option value="977">+977</Option>

      </Select>
    )

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ))


    function getCountryCodes () {
      let codesSelector = "";
      for (let i = 10; i <= 99; i++) {
        codesSelector += `<Option value="2${i}">+${i}</Option>`
      }
      console.log(`CodesSelector ::  ${codesSelector}`)
    }

    return (
      <Form name="contact" method="post" data-netlify="true" className="footerForm" onSubmit={this.handleSubmit}>

        {/* <p hidden>
          <label>
              Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
          </label>
        </p> */}
        <FormItem
          {...formItemLayout}
          label="E-mail"
          style={{ color: '#fff' }}
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input name="email" value={email} onChange={this.handleChange} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Phone"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(
            <Input addonBefore={prefixSelector} name="phone" value={phone} style={{ width: '100%' }} onChange={this.handleChange} />
            // <Input name="phone" value={phone} style={{ width: '100%' }} onChange={this.handleChange} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              Message&nbsp;
              <Tooltip title="Please give a brief description of what you are looking for?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: false, message: 'Please input your nickname!', whitespace: true }],
          })(
            <Input name="message" value={message} onChange={this.handleChange} />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Enquire Now</Button>
        </FormItem>
      </Form>
    )
  }
}

const FooterForm = Form.create()(EnquiryForm)
export default FooterForm
