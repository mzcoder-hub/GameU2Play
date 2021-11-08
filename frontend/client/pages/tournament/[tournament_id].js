import { useState } from 'react'
import { Col, Row, Tabs, Tab } from 'react-bootstrap'
import { GetServerSideProps } from 'next'
import Layout from '../../components/Layout'
import Meta from '../../components/Meta'
import Tombol from '../../components/Tombol'
import TeamSlider from '../../components/TeamSlider'
import teamData from '../../components/data/teamData'

import tournamentCss from '../../styles/tournament.module.css'
import axios from 'axios'
import { useRouter } from 'next/router'

const tournament = ({ tournamentDetailId }) => {
  const [key, setKey] = useState('detail')

  return (
    <Layout>
      <Meta />

      <Col xl={12} className={tournamentCss.firstSectiontourney}></Col>
      <Col xl={12} className={tournamentCss.secondSectiontourney}>
        <Row style={{ padding: 50 }}>
          <Col md={12} style={{ color: '#fff' }}>
            <Tabs
              id='controlled-tab-example'
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey='detail' title='Detail'>
                <Row>
                  <Col md={7}>
                    <div className={tournamentCss.contentTourney}>
                      <div className={tournamentCss.titleDetail}>
                        <h1>{tournamentDetailId.title}</h1>
                      </div>
                      <div className={tournamentCss.descDetail}>
                        <h2>Deskripsi</h2>
                        <p>{tournamentDetailId.description}</p>
                      </div>
                      <div className={tournamentCss.tagapagAyos}>
                        <h2>Penyelenggara</h2>
                        <ol>
                          <li>{tournamentDetailId.organizer}</li>
                          <li>{tournamentDetailId.contact_person}</li>
                        </ol>
                      </div>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={tournamentCss.detailTourney}>
                      <div className={tournamentCss.rules}>
                        <h2>Peraturan</h2>
                        <p>
                          Download{' '}
                          <a href={tournamentDetailId.rule_link}>PDF</a>
                        </p>
                      </div>
                      <div className={tournamentCss.Prices}>
                        <h2>Total Hadiah</h2>
                        <p>{tournamentDetailId.prizepool}</p>
                      </div>
                      <div className={tournamentCss.Streams}>
                        <h2>Live Stream</h2>
                        <ul>
                          <li>
                            Youtube: <a href=''>WxC Indonesia</a>
                          </li>
                          <li>
                            Twitch: <a href=''>Dotatv Indonesia</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <Col md={2}>
                    <Row>
                      <Col md={2} className='text-right'>
                        <div className={tournamentCss.countSlot}>
                          0/{tournamentDetailId.max_team}
                        </div>
                      </Col>
                      <Col md={10} className='text-right'>
                        <Tombol
                          variant='warning'
                          borderRadius='6px'
                          color='#14142B'
                          width='100%'
                        >
                          Join Now!
                        </Tombol>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={12}>
                    <div
                      className={`text-center ${tournamentCss.teamRegistered}`}
                    >
                      <h2>Team Registered</h2>
                      <TeamSlider sliderData={teamData} />
                    </div>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey='profile' title='Bracket'>
                Bracket Will be here
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Col>
    </Layout>
  )
}

export default tournament

export const getServerSideProps = async (ctx) => {
  const { req, res, query } = ctx

  const getCookies = JSON.parse(req.cookies.userLogin)

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookies.token}`,
    },
  }

  const detailTournamentById = await axios.get(
    `http://localhost:3002/api/v1/tournament/detail/${query.tournament_id}`,
    config
  )

  // console.log(detailTournamentById.data.data)
  return {
    props: {
      tournamentDetailId: detailTournamentById.data.data,
    },
  }
}
