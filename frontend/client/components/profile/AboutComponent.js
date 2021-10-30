import { Col, Row } from 'react-bootstrap'

const AboutComponent = () => {
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
        <h2 style={{ fontSize: 36 }}>About Me</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laboruma Sed ut{' '}
          </p>
        </div>
      </Col>
    </Row>
  )
}

export default AboutComponent
