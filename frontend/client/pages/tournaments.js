import { Col, Row } from 'react-bootstrap'
import Meta from '../components/Meta'

const tournaments = () => {
  return (
    <Row>
      <Col xs={12}>
        <Meta
          title='Tournaments - GameU2Play'
          keywords='Discover New Tournaments Gaming, Discover Tournaments Gaming News, Discover Tournaments Gaming Update'
          description='Discover New Tournaments Gaming, Discover Tournaments Gaming News, Discover Tournaments Gaming Update'
        />
        <h1 style={{ color: '#fff' }}>Welcome to Tournament Page</h1>
      </Col>
    </Row>
  )
}

export default tournaments
