import Navbar from './Navbar'
import Image from 'next/image'
import Footer from './Footer'
import { Col, Container, Row } from 'react-bootstrap'

const Layout = ({ children, urlBackground }) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Navbar />
          {children}
          <Footer />
        </Row>
      </Container>
    </>
  )
}

export default Layout
