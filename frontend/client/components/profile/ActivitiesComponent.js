import { Col, Row } from 'react-bootstrap'

const ActivitiesComponent = () => {
  const data = ['1', '2', '3', '4', '5']
  return (
    <Row>
      <Col
        md={12}
        style={{ backgroundColor: '#1A1A1A', marginTop: 10, padding: 20 }}
      >
        <h2 style={{ fontSize: 36 }}>Activities</h2>
        <div>
          <Row>
            {data.map((value) => (
              <Col>
                <img
                  src='/images/activities.svg'
                  alt='activities'
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

export default ActivitiesComponent
