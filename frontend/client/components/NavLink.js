import { Nav } from 'react-bootstrap'
import { useRouter } from 'next/router'

const NavLink = ({ path, name }) => {
  const router = useRouter()

  return (
    <Nav.Link
      onClick={() => router.push(path)}
      style={{ color: '#F4B740 !important' }}
      key={name}
    >
      {name}
    </Nav.Link>
  )
}

NavLink.defaultProps = {
  path: '',
  name: '',
}

export default NavLink
