import React from 'react'
import { Link } from 'react-static'
import { Row, Col, Icon } from 'antd'
import FooterForm from '../components/FooterForm'


class Footer extends React.Component {

  render () {
    return (
      <footer id="footer" className="dark">
        <div className="footer-wrap">
          <Row>
            <Col lg={8} sm={24} xs={24}>
              <div className="footer-center">
                <div>
                  <h2>Get In Touch</h2>
                  <FooterForm />
                </div>
              </div>
            </Col>
            <Col lg={8} sm={24} xs={24}>
              <div className="footer-center">
                <div>
                  <h2>Social Media</h2>
                  <Row>
                    <Col lg={24} sm={24}>
                      <Link to="http://bit.ly/2FdbHxw" target="_blank" ><Icon type="facebook" style={{ fontSize: 24, color: '#fff', paddingRight: 12, marginRight: 9 }} /></Link>
                      <Link to="http://bit.ly/2CvIP0H" target="_blank" ><Icon type="twitter" style={{ fontSize: 24, color: '#fff', paddingRight: 12, marginRight: 9 }} /></Link>
                      <Link to="http://bit.ly/2EF0I36" target="_blank" > <Icon type="linkedin" style={{ fontSize: 24, color: '#fff', paddingRight: 12, marginRight: 9 }} /></Link>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={8} sm={24} xs={24}>
              <div className="footer-center">
                <div>
                  <h1>Address</h1>
                  <h2>HEAD OFFICE</h2>
                  <p>Magnus Meditourism Private Limited<br />
                  28, 1st floor, Madhuban Industrial Estate <br />
                  Off Mahakali Caves Road, Near Paper Box <br />
                  Andheri (East), <br />
                  Mumbai 400093, <br />
                  INDIA <br /> </p>
                  <h2>UGANDA OFFICE</h2>
                  <p>Room 33, 3rd floor, Akamwesi Complex, Plot 112, <br />
                  Old Port Bell Road, P.O. Box 34254,<br />
                  Kampala, Uganda <br /></p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Row className="bottom-bar">
          <Col>
            <span
              style={{ lineHeight: '24px', paddingRight: 12, marginRight: 11, borderRight: '1px solid rgba(255, 255, 255, 0.55)' }}
            >
              <a
                href="http://www.magnusmedi.com/privacypolicy.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                Privacy Policy
              </a>
            </span>
            <span style={{ marginRight: 24 }}>
              <a
                href="http://www.magnusmedi.com/privacypolicy.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                Terms of Use
              </a>
            </span>
            <br />
            <span style={{ marginRight: 12 }}>Copyright 2018 © Magnus Medi</span>
          </Col>
        </Row>
      </footer>
    )
  }
}

export default Footer
