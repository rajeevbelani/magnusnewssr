import React from 'react'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import Parallax from 'rc-scroll-anim/lib/ScrollParallax'
import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'
import PropTypes from 'prop-types'
import { Avatar } from 'antd'

const TweenOneGroup = TweenOne.TweenOneGroup


const featuresEN = [
  {
    title: ' Omari Ali Sheikh from Tanzania',
    content: '"My experience with Magnus Medi has left fond memories within my heart, I left India with good health, happiness and a prayer on my lip."',
    src:'http://res.cloudinary.com/woodsoft/image/upload/v1516897110/rbccxksjbs5oobf1biuc.png',
    color: '#13C2C2',
    shadowColor: 'rgba(19,194,194,.12)',
  },
  {
    title: 'Judith from Uganda',
    content: '"After patiently under-going surgeries and chemotherapy for Breast Cancer for almost a year, I am proud to declare that I am cancer-free now. Thank you Magnus Medi, I am so impressed with your services and support."',
    src: 'http://res.cloudinary.com/woodsoft/image/upload/v1518007264/uhtuh5dhpkigxgwus3ad.png',
    color: '#2F54EB',
    shadowColor: 'rgba(47,84,235,.12)',
  },
  {
    title: 'Baby Mariam from Mombasa',
    content: '"It was a miracle for us that our 4 month old baby was urgently operated for a hole in the heart at Ambani hospital and also assured recovery. Mihir and Magnus Medi helped us throughout the journey. They restored our faith in Samaritans and their existence."',
    src: 'http://res.cloudinary.com/woodsoft/image/upload/v1517897393/sebx2o2pmkblm1llzbvd.jpg',
    color: '#F5222D',
    shadowColor: 'rgba(245,34,45,.12)',
  },
//   {
//     title: 'Best Practice',
//     content: 'Solid workflow make your code health',
//     src: 'https://gw.alipayobjects.com/zos/rmsportal/pbmKMSFpLurLALLNliUQ.svg',
//     color: '#FA8C16',
//     shadowColor: 'rgba(250,140,22,.12)',
//   },
//   {
//     title: 'Mock Data',
//     content: 'Easy to use mock development solution',
//     src: 'https://gw.alipayobjects.com/zos/rmsportal/aLQyKyUyssIUhHTZqCIb.svg',
//     color: '#EB2F96',
//     shadowColor: 'rgba(235,45,150,.12)',
//   },
//   {
//     title: 'UI Test',
//     content: 'Fly safely with unit test and e2e test',
//     src: 'https://gw.alipayobjects.com/zos/rmsportal/RpJIQitGbSCHwLMimybX.svg',
//     color: '#1890FF',
//     shadowColor: 'rgba(24,144,255,.12)',
//   },
]

const pointPos = [
  { x: -30, y: -10 },
  { x: 20, y: -20 },
  { x: -65, y: 15 },
  { x: -45, y: 80 },
  { x: 35, y: 5 },
  { x: 50, y: 50, opacity: 0.2 },
]

class PatientTestimonialHome extends React.PureComponent {
  static contextTypes = {
    intl: PropTypes.object.isRequired,
  };
  constructor (props) {
    super(props)
    this.state = {
      hoverNum: null,
    }
  }
  onMouseOver = i => {
    this.setState({
      hoverNum: i,
    })
  }
  onMouseOut = () => {
    this.setState({
      hoverNum: null,
    })
  }
  getEnter = e => {
    const i = e.index
    const r = (Math.random() * 2) - 1
    const y = (Math.random() * 10) + 5
    const delay = Math.round(Math.random() * (i * 50))
    return [
      { delay, opacity: 0.4, ...pointPos[e.index], ease: 'easeOutBack', duration: 300 },
      {
        y: r > 0 ? `+=${y}` : `-=${y}`,
        duration: (Math.random() * 1000) + 2000,
        yoyo: true,
        repeat: -1,
      }]
  }
  render () {
    const { hoverNum } = this.state
    let children = [[], [], []]
    featuresEN.forEach((item, i) => {
      const isHover = hoverNum === i
      const pointChild = [
        'point-0 left', 'point-0 right',
        'point-ring', 'point-1', 'point-2', 'point-3',
      ].map(className => (
        <TweenOne
          component="i"
          className={className}
          key={className}
          style={{
            background: item.color,
            borderColor: item.color,
          }}
        />
      ))
      const child = (
        <li key={i.toString()} >
          <div
            className="page1-box"
            onMouseEnter={() => { this.onMouseOver(i) }}
            onMouseLeave={this.onMouseOut}
          >
            <TweenOneGroup
              className="page1-point-wrapper"
              enter={this.getEnter}
              leave={{ x: 0, y: 30, opacity: 0, duration: 300, ease: 'easeInBack' }}
              resetStyleBool={false}
            >
              {(this.props.isMobile || isHover) && pointChild}
            </TweenOneGroup>
            <div
              className="page1-image"
              style={{
                boxShadow: `${isHover ? '0 12px 24px' :
                  '0 6px 12px'} ${item.shadowColor}`,
              }}
            >
              <Avatar src={item.src} alt="img" style={i === 4 ? { marginLeft: -15, width: '120px', height: '120px', borderRadius: '60px' } : { width: '120px', height: '120px', borderRadius: '60px' }} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        </li>
      )
      children[Math.floor(i / 3)].push(child)
    })

    children = children.map((item, i) => (
      <QueueAnim
        className="page1-box-wrapper-big"
        key={i.toString()}
        type="bottom"
        leaveReverse
        delay={[i * 100, (children.length - 1 - i) * 100]}
        component="ul"
      >
        {item}
      </QueueAnim>
    ))
    return (
      <div className="home-page page1" >
        <div className="home-page-wrapper" id="page1-wrapper">
          {/* {!this.props.isMobile && (
            <Parallax
              className="page1-bg"
              animation={{ translateY: 200, ease: 'linear', playScale: [0, 1.65] }}
              location="page1-wrapper"
            >
              Services
            </Parallax>
          )} */}
          <h2><span>Patient</span> Speak</h2>
          <div className="title-line-wrapper page1-line">
            <div className="title-line" />
          </div>
          {/* <OverPack> */}
            {children}
          {/* </OverPack> */}
        </div>
      </div>
    )
  }
}

export default PatientTestimonialHome
