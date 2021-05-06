import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Tombol from '../components/Tombol'
import homeStyles from '../styles/Home.module.css'

const MatchesFeed = ({
  team1,
  team1Logo,
  team2,
  team2Logo,
  scoring,
  date,
  status,
  imgSize,
  fontSizeDate,
  buttonSize,
  fontSizeButton,
  fontSizeTeamName,
}) => {
  return (
    <div className={`${homeStyles.matches}`}>
      <Row style={{ padding: 10 }}>
        <Col md={2} className={homeStyles.team_name}>
          {' '}
          <img src={team1Logo} alt={team1} width={imgSize} height={imgSize} />
        </Col>
        <Col md={3} className={homeStyles.team_name}>
          <h2 style={{ fontSize: fontSizeTeamName }}>{team1}</h2>
        </Col>
        <Col md={2} className='text-center'>
          <Row>
            <Col sm={12}>
              <h3>VS</h3>
            </Col>
            <Col sm={12} style={{ fontSize: fontSizeDate }}>
              <div>{date}</div>
              <div>08:00 GMT-7</div>
            </Col>
            <Col sm={12}>
              <Tombol
                color='#fff'
                variant={
                  status === 'ONGOING'
                    ? 'warning'
                    : status === 'ASAP'
                    ? 'secondary'
                    : 'success'
                }
                fontWeight='bold'
                fontSize={fontSizeButton}
                width='100%'
                size={buttonSize}
              >
                {scoring}
              </Tombol>
            </Col>
          </Row>
        </Col>
        <Col md={3} className={homeStyles.team_name}>
          <h2 style={{ fontSize: fontSizeTeamName }}>{team2}</h2>
        </Col>
        <Col md={2} className={homeStyles.team_name}>
          {' '}
          <img src={team2Logo} alt={team2} width={imgSize} height={imgSize} />
        </Col>
      </Row>
    </div>
  )
}

MatchesFeed.defaultProps = {
  team1: '',
  team1Logo: '',
  team2: '',
  team2Logo: '',
  scoring: '',
  date: '',
  status: '',
  imgSize: 'auto',
  fontSizeButton: '',
  fontSizeDate: '2rem',
  buttonSize: '',
  fontSizeTeamName: '',
}

export default MatchesFeed
