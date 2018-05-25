import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import React from 'react';

const TweenOneGroup = TweenOne.TweenOneGroup


const featuresEN = [
  {
    title: 'Connecting with Doctors & Hospital',
    content: 'Magnus Medi Can connect you with over 80 accredited hospitals across India',
    src: 'https://trello-attachments.s3.amazonaws.com/5a2ff1753cafd84e09e60ed5/5afe9bb95259d6fc227998fe/6ab27feaf27c2ef09956fb74093c1c5f/60X60_1.png',
    color: '#13C2C2',
    shadowColor: 'rgba(19,194,194,.12)',
  },
  {
    title: 'Multiple Opinion',
    content: 'We can give you top 5 to 6 Opinion based on proper information, quality doctors and citywise difference in costs',
    src: 'https://trello-attachments.s3.amazonaws.com/5a2ff1753cafd84e09e60ed5/5afe9bb95259d6fc227998fe/5902a941502a80e6b834d98a3d1eb58b/60X60_2.png',
    color: '#2F54EB',
    shadowColor: 'rgba(47,84,235,.12)',
  },
  {
    title: 'Medical Visa',
    content: 'it is mandatory to get Medical visa while you travel to india for treatment, Magnus team can assist you to get it smoothly',
    src: 'https://trello-attachments.s3.amazonaws.com/5a2ff1753cafd84e09e60ed5/5afe9bb95259d6fc227998fe/fe9af6e6222c6610ca9d47a98b3bde37/60X60_3.png',
    color: '#F5222D',
    shadowColor: 'rgba(245,34,45,.12)',
  },
  {
    title: 'Logistics',
    content: 'From air travel booking, to local accomodation and transport everything will be arranged by Magnus team',
    src: 'https://trello-attachments.s3.amazonaws.com/5a2ff1753cafd84e09e60ed5/5afe9bb95259d6fc227998fe/4f9d5cd6b07b2abae5fa472686d3b663/60X60_4.png',
    color: '#1AC44D',
    shadowColor: 'rgba(26,196,77,.12)',
  },
  {
    title: 'Forex',
    content: 'Its important that you exchange your foreign currency at better rates, Magnus helps you to do it from registered foreign exchange service provider',
    src: 'https://trello-attachments.s3.amazonaws.com/5a2ff1753cafd84e09e60ed5/5afe9bb95259d6fc227998fe/270e9831c93afce2e6488dc65f9380b9/60X60_5.png',
    color: '#FAAD14',
    shadowColor: 'rgba(250,173,20,.12)',
  },
  {
    title: 'Local Indian Line',
    content: 'Getting an Indian line is troublesome but with Magnus you can get it as soon as you come out of Airport without any trouble',
    src: 'https://trello-attachments.s3.amazonaws.com/5a2ff1753cafd84e09e60ed5/5afe9bb95259d6fc227998fe/b88e48ca3dcd5bdfe76cbf167eccc4fb/60X60_6.png',
    color: '#722ED1',
    shadowColor: 'rgba(114,46,209,.12)',
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

class Features extends React.PureComponent {
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
              <img src={item.src} alt="img" style={i === 4 ? { marginLeft: -15 } : {}} />
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
        className="page1-box-wrapper"
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
          <h2>What can <span>Magnus</span> do for you </h2>
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

export default Features
