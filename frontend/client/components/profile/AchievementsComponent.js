import { Col, Row } from 'react-bootstrap'

const AchievementsComponent = () => {
  const data = ['1', '2', '3', '4', '5']
  return (
    <Row>
      <Col
        md={12}
        style={{ backgroundColor: '#1A1A1A', marginTop: 10, padding: 20 }}
      >
        <h2 style={{ fontSize: 36 }}>Achievements</h2>
        <div>
          <Row>
            {data.map((value) => (
              <Col>
                <img
                  src='/images/slot-kosong.svg'
                  alt='slot'
                  width='100%'
                  height='150'
                  style={{ margin: 10 }}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Col>
    </Row>
  )
}

export default AchievementsComponent
