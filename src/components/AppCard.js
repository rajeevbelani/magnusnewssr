import Anchor from 'grommet/components/Anchor'
import Card from 'grommet/components/Card'
import Heading from 'grommet/components/Heading'
import Image from 'grommet/components/Image'
import Label from 'grommet/components/Label'
import LinkNextIcon from 'grommet/components/icons/base/LinkNext'
import React, { Component } from 'react'
import { Link } from 'react-static'
import { getBlogImage, getBlogLink, getBlogShortDescription, getBlogTypeString } from '../containers/util'


export default class AppCard extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    let descriptionNode = (<Heading tag="h5" />)
    descriptionNode = (<Heading tag="h5"> Get discounts and offers for travel and medical treatment </Heading>)

    return (
      <Card
        colorIndex="light-1"
        margin="small"
        
        separator="bottom"
        // heading={
        //   <Heading tag="h3"> <b>{post.title}</b> </Heading>
        // }
        // onClick={this._onClickCard.bind(this, getBlogLink(this.props.post))}
        //   description={descriptionNode}
        direction="column"
        //   thumbnail={`${post.image.url}`}
        thumbnail={
          <Image size="medium" src="http://www.magnusmedi.com/images/magnuslogowithtext.jpeg" />
        }
        link={
          <Anchor href="https://drive.google.com/file/d/1uvpm87djD_naFHKByASHZ_WNzQDcgGTd/view" label="Click here to Download"
            icon={<LinkNextIcon />} />
        }
      >
        <Heading tag="h3">
          <b>Android App</b>
        </Heading>
        {descriptionNode}
      </Card>
    )
  }
}
