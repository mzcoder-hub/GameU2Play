import { Col, Container, Row, Navbar, Nav } from 'react-bootstrap'
import Image from 'next/image'
import NavigationFooter from './NavigationFooter'
import IndexCss from '../styles/index.module.css'

const Footer = ({ background }) => {
  return (
    <Col xl={12} style={{ background }}>
      <Container style={{ marginTop: 50 }}>
        <Row>
          <Col md={12} className='text-center'>
            <Image src='/webgame.svg' alt='logo' height='50' width='199' />
            <Navbar
              collapseOnSelect
              expand='lg'
              bg='dark'
              variant='dark'
              style={{
                backgroundColor: '#0B0D17 !important',
                borderBottom: '1px solid rgb(255 255 255 / 45%)',
              }}
            >
              <Navbar.Toggle aria-controls='responsive-navbar-nav' />
              <Navbar.Collapse id='responsive-navbar-nav'>
                <NavigationFooter colorText='#FFFFFF' />
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col md={12} className={IndexCss.Footer}>
            <Row>
              <Col md={6}>© 2021 U2Play.com</Col>
              <Col md={6}>
                <div style={{ marginTop: -5 }} className='text-right'>
                  <Image
                    src='/icons/instagram.svg'
                    alt='instagram'
                    height='50'
                    width='50'
                  />
                  <Image
                    src='/icons/twitter.svg'
                    alt='instagram'
                    height='50'
                    width='50'
                  />
                  <Image
                    src='/icons/youtube.svg'
                    alt='instagram'
                    height='50'
                    width='50'
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Col>
  )
}

Footer.defaultProps = {
  background: '#0B0D17',
}

export default Footer
