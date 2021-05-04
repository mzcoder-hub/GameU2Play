import { Col, Row } from 'react-bootstrap'
import Meta from '../components/Meta'

const index = () => {
  return (
    <Row>
      <Col xs={12}>
        <Meta />
        <h1 style={{ color: '#fff' }}>Welcome to GamingU2Play</h1>
      </Col>
    </Row>
  )
}

export default index
