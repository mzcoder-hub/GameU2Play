import { Col, Row } from 'react-bootstrap'
import AboutComponent from './AboutComponent'
import AchievementsComponent from './AchievementsComponent'
import ActivitiesComponent from './ActivitiesComponent'
import GamesComponent from './GamesComponent'

const BodyProfile = () => {
  return (
    <Row style={{ color: 'white', padding: 70 }}>
      <Col xs lg={8}>
        <AchievementsComponent />
        <ActivitiesComponent />
      </Col>
      <Col xs lg={4}>
        <AboutComponent />
        <GamesComponent />
      </Col>
    </Row>
  )
}

export default BodyProfile
