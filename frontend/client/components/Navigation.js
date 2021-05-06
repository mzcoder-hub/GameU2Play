import { Nav } from 'react-bootstrap'
import Tombol from './Tombol'
import NavLink from './NavLink'
import RoutesNav from '../pages/Routes/RoutesNav'

const Navigation = () => {
  return (
    <Nav style={{ alignItems: 'center', backgroundColor: '#000000!important' }}>
      {RoutesNav.map((val) => (
        <NavLink path={val.path} name={val.title} key={val.title} />
      ))}
      <Nav.Link>
        <Tombol variant='warning' fontWeight='bold' borderRadius='1.25rem'>
          Login / Register
        </Tombol>
      </Nav.Link>
    </Nav>
  )
}

export default Navigation
