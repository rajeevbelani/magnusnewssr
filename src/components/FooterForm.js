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
    phone: '',
    email: '',
    message: '',
  };
  handleSubmit = e => {
    e.preventDefault()
    // <Redirect to='/dashboard' />
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
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

  handleChange = e => this.setState({ [e.target.name]: e.target.value })
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
      initialValue: '86',
    })(
      <Select name="phonePrefix" style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    )

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ))

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
