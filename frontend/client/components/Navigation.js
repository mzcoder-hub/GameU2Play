import { Nav } from 'react-bootstrap'
import NavLink from './NavLink'
import RoutesNav from '../pages/Routes/RoutesNav'

const Navigation = () => {
  return (
    <Nav style={{ alignItems: 'center', color: '#F4B740' }}>
      {RoutesNav.map((val) => (
        <NavLink
          color='#F4B740'
          icon={val.icon}
          path={val.path}
          name={val.title}
          key={val.title}
        />
      ))}
    </Nav>
  )
}

export default Navigation
