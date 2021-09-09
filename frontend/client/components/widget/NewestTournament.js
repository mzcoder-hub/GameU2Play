import { Col, Row } from 'react-bootstrap'

import WidgetCss from '../../styles/widget.module.css'
const NewestTournament = () => {
  return (
    <Row className={WidgetCss.newWestTournament}>
      <Col md={12}>
        <h2>Turnamen Terbaru</h2>
        <Row className={WidgetCss.item}>
          <Col md={6} className={WidgetCss.imageNewTournament}>
            <img src='/images/posts/post-1.png' alt='newest tournament' />
          </Col>
          <Col md={6} className={WidgetCss.detailWidgetTournament}>
            <h4>ESPORTS ARENA MLBB 1V1 MID ONLY CHALLENGE S7</h4>
            <span>05 Juli 2021</span>
          </Col>
        </Row>
        <Row className={WidgetCss.item}>
          <Col md={6} className={WidgetCss.imageNewTournament}>
            <img src='/images/posts/post-1.png' alt='newest tournament' />
          </Col>
          <Col md={6} className={WidgetCss.detailWidgetTournament}>
            <h4>ESPORTS ARENA MLBB 1V1 MID ONLY CHALLENGE S7</h4>
            <span>05 Juli 2021</span>
          </Col>
        </Row>
        <Row className={WidgetCss.item}>
          <Col md={6} className={WidgetCss.imageNewTournament}>
            <img src='/images/posts/post-1.png' alt='newest tournament' />
          </Col>
          <Col md={6} className={WidgetCss.detailWidgetTournament}>
            <h4>ESPORTS ARENA MLBB 1V1 MID ONLY CHALLENGE S7</h4>
            <span>05 Juli 2021</span>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default NewestTournament
