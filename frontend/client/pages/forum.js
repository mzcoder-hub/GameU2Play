import { Col, Row } from 'react-bootstrap'
import AOS from 'aos'
import Meta from '../components/Meta'

const forum = () => {
  return (
    <Row>
      <Col xs={12}>
        <Meta />
        <h1 style={{ color: '#fff' }}>Welcome to Forum Pages</h1>
      </Col>
    </Row>
  )
}

export default forum
