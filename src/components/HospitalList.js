import React, { Component } from 'react'
import Heading from 'grommet/components/Heading'
import { Link } from 'react-static'
import { List, Avatar, Icon, Radio, Button, Tag } from 'antd'
import { getBlogTypeString, getBlogLink, getBlogShortDescription, getBlogImage } from '../containers/util'


const listData = []
for (let i = 0; i < 5; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  })
}


const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
)

export default class HospitalList extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  _onClickCard (path, event) {
    // event.preventDefault();
    // window.location.href = path;
  }

  getHospitalDescription (hospital) {
    console.log(`hospital.description :: ${hospital.description}`)
    if (hospital.description !== undefined) { return hospital.description.short }
    return ''
  }

  render () {
    const { hospitals } = this.props
    const pagination = {
      pageSize: 10,
      current: 1,
      total: 27,
      onChange: (() => {}),
    }
    console.log(`Hospitals :: ${JSON.stringify(this.props)}`)
    // let descriptionNode = (<Heading tag="h5" />)
    // if (showDescription) { descriptionNode = (<Heading tag="h5"> { getBlogShortDescription(post) } </Heading>) }

    return (
      <div style={{ padding: '20px' }}>
        <List
          itemLayout="vertical"
          size="large"
          pagination={pagination}
          dataSource={hospitals}
          renderItem={item => (
            <List.Item
              key={item.key}
              actions={[<Button>View Details</Button>, <Button type="primary">Send Enquiry</Button>]}
              extra={<img width={322} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
            >
              <List.Item.Meta
                title={<Heading tag="h3">
                  <b>{item.name}</b><br />
                  <Avatar src="https://www.vaidam.com/sites/all/themes/vaidam/images/accreditations_83.png" style={{ paddingLeft: '5px' }} />
                  <Avatar src="https://www.vaidam.com/sites/all/themes/vaidam/images/accreditations_84.png" style={{ paddingLeft: '5px' }} />
                  <Avatar src="https://www.vaidam.com/sites/all/themes/vaidam/images/accreditations_85.png" style={{ paddingLeft: '5px' }} />
                </Heading>}
                description={[`${item.type}  |  `, <Tag color="#37474F"><b>{item.noBeds}</b> </Tag>, ' Beds | ', <IconText text={`Established in ${item.establishedIn}`} />]} />
              {item.translationServices && <Avatar size="small" style={{ backgroundColor: '#87d068', margin: '5px' }} icon="check" />}
              {!item.translationServices && <Avatar size="small" style={{ backgroundColor: '#f44336', margin: '5px' }} icon="close" />}
              Translation Services
              
              {/* <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />, <IconText text={`Established in ${item.establishedIn}`} /> */}
            </List.Item>
          )}
        />
      </div>)
  }
}
