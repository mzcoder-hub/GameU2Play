import { Col, Nav, Navbar, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import Navigation from './Navigation'
import Tombol from './Tombol'
import Image from 'next/image'

const Header = () => {
  const router = useRouter()
  return (
    <Col xl={12} style={{ padding: 0 }}>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'
        style={{ backgroundColor: '#1A1A1A !important' }}
      >
        <Navbar.Brand href='#' onClick={() => router.push('/')}>
          <Image src='/webgame.png' alt='logo' height='50' width='199' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Navigation />
          <Nav className='mr-auto'></Nav>
          <Nav
            style={{
              alignItems: 'center',
            }}
          >
            <Nav.Link>
              <Tombol
                variant='warning'
                borderRadius='6px'
                border='1px solid #F4B740'
                backgroundColor='#14142B'
                color='#F4B740'
              >
                Login
              </Tombol>
            </Nav.Link>
            <Nav.Link>
              <Tombol
                variant='warning'
                borderRadius='6px'
                backgroundColor='#F4B740'
              >
                Register
              </Tombol>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  )
}
export default Header
