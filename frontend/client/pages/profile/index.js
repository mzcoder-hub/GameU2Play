import { Col } from 'react-bootstrap'
import Layout from '../../components/Layout'
import Meta from '../../components/Meta'
import BodyProfile from '../../components/profile/BodyProfile'
import HeaderTop from '../../components/profile/HeaderTop'

const index = () => {
  return (
    <Layout>
      <Meta />
      <Col md={12} style={{ background: '#0C0C0C' }}>
        <HeaderTop />
        <BodyProfile />
      </Col>
    </Layout>
  )
}

export default index
