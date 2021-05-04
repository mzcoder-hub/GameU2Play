import Header from './Header'
import Image from 'next/image'
import homeStyles from '../styles/Home.module.css'
import { Col, Container, Row } from 'react-bootstrap'

const Layout = ({ children }) => {
  return (
    <>
      <Container fluid className={homeStyles.containerCustomStyle}>
        <Row>
          <Col xs={12}>
            <img
              src='/bg-top.png'
              className={homeStyles.backgroundImageTop}
              alt=''
            />
            <Header />
            {children}
            {/* <Footer /> */}
            <img
              src='/bg-bottom.png'
              className={homeStyles.backgroundImageBottom}
              alt=''
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Layout
