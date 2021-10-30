import { Col, Row } from 'react-bootstrap'

const PlayersComponent = () => {
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
        <h2 style={{ fontSize: 36 }}>Players</h2>
        <div>List Players</div>
      </Col>
    </Row>
  )
}

export default PlayersComponent
