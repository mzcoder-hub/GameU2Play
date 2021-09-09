import { Nav } from 'react-bootstrap'
import { useRouter } from 'next/router'

const NavLink = ({ icon, path, name, color }) => {
  const router = useRouter()

  return (
    <Nav.Link onClick={() => router.push(path)} style={{ color }} key={name}>
      {icon ? (
        <span>
          <img src={icon} alt={name} />
        </span>
      ) : undefined}
      {'  '}
      {name}
    </Nav.Link>
  )
}

NavLink.defaultProps = {
  path: '',
  name: '',
  color: '#F4B740 !important',
  icon: '',
}

export default NavLink
