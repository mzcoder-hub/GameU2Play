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
  gameType,
  gameTypeName,
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
              {gameType === 'dota' ? (
                <img
                  src='/images/gameLogo/dota.png'
                  alt='Dota'
                  width='30'
                  height='30'
                />
              ) : gameType === 'csgo' ? (
                <img
                  src='/images/gameLogo/csgo.png'
                  alt='CSGO'
                  width='30'
                  height='30'
                />
              ) : gameType === 'ageofempire' ? (
                <img
                  src='/images/gameLogo/aoe.png'
                  alt='Age of Empire'
                  width='30'
                  height='30'
                />
              ) : gameType === 'fornite' ? (
                <img
                  src='/images/gameLogo/fornite.jpg'
                  alt='Fornite'
                  width='30'
                  height='30'
                />
              ) : gameType === 'lol' ? (
                <img
                  src='/images/gameLogo/lol.png'
                  alt='League Of Legend'
                  width='30'
                  height='30'
                />
              ) : gameType === 'overwatch' ? (
                <img
                  src='/images/gameLogo/overwatch.png'
                  alt='Overwatch'
                  width='30'
                  height='30'
                />
              ) : gameType === 'pubg' ? (
                <img
                  src='/images/gameLogo/pubg.svg'
                  alt="PlayerUnknown's Battlegrounds"
                  width='30'
                  height='30'
                />
              ) : gameType === 'valorant' ? (
                <img
                  src='/images/gameLogo/valorant.png'
                  alt='Valorant'
                  width='30'
                  height='30'
                />
              ) : (
                <></>
              )}
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
  gameType: '',
  gameTypeName: '',
}

export default MatchesFeed
