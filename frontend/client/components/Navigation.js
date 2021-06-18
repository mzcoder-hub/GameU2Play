import { Nav } from 'react-bootstrap'
import Tombol from './Tombol'
import NavLink from './NavLink'
import RoutesNav from '../pages/Routes/RoutesNav'

const Navigation = () => {
  return (
    <Nav style={{ alignItems: 'center' }}>
      {RoutesNav.map((val) => (
        <NavLink path={val.path} name={val.title} key={val.title} />
      ))}
    </Nav>
  )
}

export default Navigation
