import { Col, Row } from 'react-bootstrap'

const GamesComponent = () => {
  return (
    <Row>
      <Col
        md={12}
        style={{
          backgroundColor: '#1A1A1A',
          marginTop: 10,
          marginLeft: 10,
          padding: 20,
        }}
      >
        <h2 style={{ fontSize: 36 }}>My Game</h2>
        <div>Image Game That player Playing</div>
      </Col>
    </Row>
  )
}

export default GamesComponent
