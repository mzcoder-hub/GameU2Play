import { Nav } from 'react-bootstrap'
import { useRouter } from 'next/router'

const NavLink = ({ path, name, color }) => {
  const router = useRouter()

  return (
    <Nav.Link onClick={() => router.push(path)} style={{ color }} key={name}>
      {name}
    </Nav.Link>
  )
}

NavLink.defaultProps = {
  path: '',
  name: '',
  color: '#F4B740 !important',
}

export default NavLink
