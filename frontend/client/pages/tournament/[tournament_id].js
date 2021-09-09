import { useState } from 'react'
import { Col, Row, Tabs, Tab } from 'react-bootstrap'
import Layout from '../../components/Layout'
import Meta from '../../components/Meta'
import Tombol from '../../components/Tombol'
import TeamSlider from '../../components/TeamSlider'
import teamData from '../../components/data/teamData'

import tournamentCss from '../../styles/tournament.module.css'

const tournament = () => {
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
                        <h1>Dota 2 1 vs1 Online Tournament</h1>
                      </div>
                      <div className={tournamentCss.descDetail}>
                        <h2>Deskripsi</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laboruma Sed ut
                          perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt. Neque porro quisquam est, qui dolorem
                          ipsum quia dolor sit amet, consectetur, adipisci
                          velit, sed quia non numquam eius modi tempora incidunt
                          ut labore et dolore magnam aliquam quaerat voluptatem
                        </p>
                      </div>
                      <div className={tournamentCss.tagapagAyos}>
                        <h2>Penyelenggara</h2>
                        <ol>
                          <li>ACER Predator Team</li>
                          <li>
                            Contact Person 1 (Adi):{' '}
                            <a href='whastapp'>+6212345678</a>
                          </li>
                          <li>
                            Contact Person 2 (Andi):{' '}
                            <a href='whastapp'>+6212345678</a>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={tournamentCss.detailTourney}>
                      <div className={tournamentCss.rules}>
                        <h2>Peraturan</h2>
                        <p>
                          Download <a href=''>PDF</a>
                        </p>
                      </div>
                      <div className={tournamentCss.Prices}>
                        <h2>Total Hadiah</h2>
                        <p>Rp. 1.000.000.000,-</p>
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
                        <div className={tournamentCss.countSlot}>12/36</div>
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
              <Tab eventKey='profile' title='Profile'>
                O! lest the world should task you to recite What merit lived in
                me, that you should love After my death,--dear love, forget me
                quite, For you in me can nothing worthy prove; Unless you would
                devise some virtuous lie, To do more for me than mine own
                desert, And hang more praise upon deceased I Than niggard truth
                would willingly impart: O! lest your true love may seem false in
                this That you for love speak well of me untrue,
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Col>
    </Layout>
  )
}

export default tournament
