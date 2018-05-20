import React, { Component } from 'react'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd'

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

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class EnquiryForm extends Component {
  state = {
    // confirmDirty: false,
    // autoCompleteResult: [],
  };
  handleSubmit = e => {
    // e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      console.log(`Handle Submit ::  ${err}`)
      if (!err) {
        fetch("/", {
          method: "POST",
          body: encode({ "form-name": "footerForm1", ...this.state })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));
    
        e.preventDefault();
        console.log('Received values of form: ', values)
      }
    })
  }

  handleChange = e => {
    if (e.target.files) {
      this.setState({ [e.target.name]: e.target.files[0] });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
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
    const { autoCompleteResult } = this.state

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
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    )

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ))

    return (
      <Form name="footerForm1" method="post" data-netlify="true" className="footerForm" onSubmit={this.handleSubmit}>
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
            <Input name="form-name" value="footerForm" onChange={this.handleChange} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Phone"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(
            <Input style={{ width: '100%' }} name="form-name" value="footerForm" onChange={this.handleChange}  />
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
            <Input name="form-name" value="footerForm" onChange={this.handleChange} />
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
