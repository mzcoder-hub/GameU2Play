import { Nav } from 'react-bootstrap'
import Tombol from './Tombol'
import NavLink from './NavLink'
import RoutesNav from '../pages/Routes/RoutesNav'

const NavigationFooter = ({ colorText, borderBottom }) => {
  return (
    <Nav className='justify-content-center' style={{ flex: 1 }}>
      {RoutesNav.map((val) => (
        <NavLink
          path={val.path}
          name={val.title}
          key={val.title}
          color={colorText}
        />
      ))}
    </Nav>
  )
}

NavLink.defaultProps = {
  colorText: '',
}

export default NavigationFooter
