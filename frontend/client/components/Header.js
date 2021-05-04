import { Col, Nav, Navbar, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import Navigation from './Navigation'
import Image from 'next/image'

const Header = () => {
  const router = useRouter()
  return (
    <Row>
      <Col xs={12}>
        <Navbar
          collapseOnSelect
          expand='lg'
          bg='dark'
          variant='dark'
          style={{ backgroundColor: '#000000 !important' }}
        >
          <Navbar.Brand href='#' onClick={() => router.push('/')}>
            <Image src='/webgame.png' alt='logo' height='50' width='199' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'></Nav>
            <Navigation />
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  )
}
export default Header
