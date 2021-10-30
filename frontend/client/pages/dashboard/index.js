import { Col, Row } from 'react-bootstrap'
import Layout from '../../components/Layout'
import Meta from '../../components/Meta'

const index = () => {
  return (
    <Layout>
      <Meta />
      <Col
        md={12}
        style={{
          background: '#0C0C0C',
          padding: 35,
          color: '#FFFFFF',
        }}
      >
        <Row style={{ padding: 35 }}>
          <Col md={4}>Sidebar Left</Col>
          <Col md={4}>Feed</Col>
          <Col md={4}>Sidebar Right</Col>
        </Row>
      </Col>
    </Layout>
  )
}

export default index
