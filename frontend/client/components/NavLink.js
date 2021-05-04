import { Nav } from 'react-bootstrap'
import { useRouter } from 'next/router'

const NavLink = ({ path, name }) => {
  const router = useRouter()

  return (
    <Nav.Link
      onClick={() => router.push(path)}
      style={{ color: '#fff' }}
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
