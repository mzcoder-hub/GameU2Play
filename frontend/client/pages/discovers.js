import { Col, Row } from 'react-bootstrap'
import Headline from '../components/Headline'
import Meta from '../components/Meta'
import discoverStyles from '../styles/Discovers.module.css'

const discovers = () => {
  return (
    <Row>
      <Col xs md={12}>
        <Meta
          title='Discover - GameU2Play'
          keywords='Discover New Gaming, Discover Gaming News, Discover Gaming Update'
          description="Discovering all things 'bout gaming, and gaining experience"
        />
        <Headline
          headlineText={['PC', 'Games']}
          colorPlace='1'
          colorText='red'
          lineType='redLine'
          fontSize='33px'
          sizeColLine1='2'
          sizeColText1='2'
          sizeColLine2='8'
        />
      </Col>
    </Row>
  )
}

export default discovers
