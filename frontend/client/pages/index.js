import { Col, Row } from 'react-bootstrap'
import Layout from '../components/Layout'
import Meta from '../components/Meta'
import Tombol from '../components/Tombol'
import HomePageCarousel from '../components/HomePageCarousel'
import GameSlider from '../components/GameSlider'

import IndexCss from '../styles/index.module.css'
import sliderData from '../components/data/sliderData'

const index = () => {
  return (
    <Layout>
      <Meta />
      {/* Top Page Section */}
      <Col xl={12} className={IndexCss.topPage}>
        <Row style={{ marginBottom: 146 }}>
          <Col xl={12}>
            <Row>
              <Col md={6}>
                <p className={`text-left ${IndexCss.topPageText}`}>
                  Take your Game to <br /> the next level, <br />
                  And compete with <br />
                  the PRO’s
                </p>
              </Col>
              <Col md={12}>
                <Row className={IndexCss.topPageBottomBody}>
                  <Col md={3} sm={6} className={IndexCss.topPageButton}>
                    <Tombol
                      variant='warning'
                      borderRadius='6px'
                      color='#14142B'
                      width='258px'
                    >
                      Join Now!
                    </Tombol>
                  </Col>
                  <Col md={9} sm={6} className={IndexCss.topPageTextTwo}>
                    <h5>Learn More</h5>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      {/* HighLight Section */}
      <Col xl={12} className={IndexCss.secondPage}>
        <Row className={IndexCss.secondPageBody}>
          <Col md={12}>
            <h2 className={IndexCss.secondPageTextHeader}>Highlight</h2>
          </Col>
          <HomePageCarousel sliderData={sliderData} />
        </Row>
      </Col>
      {/* Steps Section */}
      <Col xs={12} className={IndexCss.StepsSection}>
        <Row className={IndexCss.StepsInstruction}>
          <Col md={12} className='text-center'>
            <h4>Get Yourself Ready!</h4>
          </Col>
          <Col md={12} className='text-center'>
            <Row>
              <Col md={4}>
                <Tombol
                  variant='warning'
                  borderRadius='21px'
                  backgroundColor='rgba(244, 183, 64, 0.35)'
                  width='138px'
                  height='145px'
                >
                  <span className={IndexCss.StepsNumber}>1</span>
                </Tombol>
                <div className={IndexCss.StepsText}>
                  <span className={IndexCss.StepsTextHeader}>Sign Up</span>{' '}
                  <br />
                  <p className={IndexCss.StepsTextBottom}>
                    Create Account and Get Started
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <Tombol
                  variant='warning'
                  borderRadius='21px'
                  backgroundColor='rgba(244, 183, 64, 0.35)'
                  width='138px'
                  height='145px'
                >
                  <span className={IndexCss.StepsNumber}>2</span>
                </Tombol>
                <div className={IndexCss.StepsText}>
                  <span className={IndexCss.StepsTextHeader}>
                    Build or Join a Team
                  </span>{' '}
                  <br />
                  <p className={IndexCss.StepsTextBottom}>
                    Get yout squad ready!
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <Tombol
                  variant='warning'
                  borderRadius='21px'
                  backgroundColor='rgba(244, 183, 64, 0.35)'
                  width='138px'
                  height='145px'
                >
                  <span className={IndexCss.StepsNumber}>3</span>
                </Tombol>
                <div className={IndexCss.StepsText}>
                  <span className={IndexCss.StepsTextHeader}>
                    Compete and Win
                  </span>{' '}
                  <br />
                  <p className={IndexCss.StepsTextBottom}>
                    Compete at the Tournaments
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      {/* Tournament Section */}
      <Col xl={12}>
        <Row className={IndexCss.thirdPageSection}>
          <Col md={12} className={IndexCss.thirdPageSectionLine}></Col>
          <Col md={12} className={IndexCss.thirdPageSectionContent}>
            <Row>
              <Col md={3}>
                <h3 className={IndexCss.thirdPageSectionContentTitle}>
                  Tournament
                </h3>
              </Col>
              <Col md={9}>
                <GameSlider sliderData={sliderData} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      {/* Lastest News Section */}
      <Col xl={12}>
        <Row>
          <Col md={12} className={IndexCss.fourthPageSection}>
            <Row style={{ margin: 25 }}>
              <Col md={12}>
                <h3 className={IndexCss.fourthPageSectionHeadText}>
                  Lastest News
                </h3>
              </Col>
              <Col md={12} className={IndexCss.fourthPageSectionPost}>
                <Row>
                  <Col md={4} style={{ padding: 0 }}>
                    <div
                      style={{
                        background: `url('/images/sample/post1.png') no-repeat`,
                        height: 500,
                      }}
                    >
                      <div className={IndexCss.fourthPageSectionPostDesc}>
                        <h2>WePlay Animajor PSG.LGD Keluar Sebagai Juara</h2>
                        <p>
                          Gelaran WePlay Animajor telah selesai diselenggarakan.
                          Tim Dota 2 asal China yang bekerja sama dengan tim
                          sepak bola Paris Saint Germain ini berhasil keluarh
                          sebagai juara setelah mengalahkan tim asal Amerika ...
                        </p>
                        <span>Read More ....</span>
                      </div>
                    </div>
                  </Col>
                  <Col md={4} style={{ padding: 0 }}>
                    <Row>
                      <Col md={12}>
                        <div
                          style={{
                            background: `url('/images/sample/post2.png') no-repeat`,
                            height: 250,
                          }}
                        >
                          <div className={IndexCss.fourthPageSectionPostDesc}>
                            <h2>Microboy Pindah ke EVOS!</h2>
                            <span>Read More ....</span>
                          </div>
                        </div>
                      </Col>
                      <Col md={12}>
                        <div
                          style={{
                            background: `url('/images/sample/post3.png') no-repeat`,
                            height: 250,
                          }}
                        >
                          <div className={IndexCss.fourthPageSectionPostDesc}>
                            <h2>
                              Valorant Master Stage 3 Pilih Berlin Sebagai
                              Lokasi
                            </h2>
                            <span>Read More ....</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4} style={{ padding: 0 }}>
                    <div
                      style={{
                        background: `url('/images/sample/post4.png') no-repeat`,
                        height: 500,
                      }}
                    >
                      <div className={IndexCss.fourthPageSectionPostDesc}>
                        <h2>
                          Whitemon dan Xepher Jadi Pemain Indonesia Pertama di
                          The International{' '}
                        </h2>
                        <p>
                          Kenny “Xepher” Deo dan Matthew “Whitemon” Filemon
                          menjadi pemain Indonesia pertama yang akan berlaga di
                          event terbesar Valve yaitu Dota2 The International 10.
                          Kedua pemain ini merupakan pemain dari T1 ...
                        </p>
                        <span>Read More ....</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      {/* Join Us and Community Count */}
      <Col xl={12}>
        <Row className={IndexCss.fifthPageSection}>
          <Col md={12} className={IndexCss.fifthPageSectionContent}>
            <div className={IndexCss.fifthPageSectionContentHead}>
              <h4>Join Us Now!</h4>
              <span>
                Join our beloved Gamers Community{' '}
                <a href=''>{'Click Here ->'}</a>
              </span>
            </div>
            <Col md={12} className={IndexCss.fifthPageSectionContentCount}>
              <Row>
                <Col
                  md={4}
                  className={IndexCss.fifthPageSectionContentCountTour}
                >
                  <h2>30</h2>
                  <span>Tournament</span>
                </Col>
                <Col
                  md={4}
                  className={IndexCss.fifthPageSectionContentCountPros}
                >
                  <h2>50</h2>
                  <span>Pro Team</span>
                </Col>
                <Col
                  md={4}
                  className={IndexCss.fifthPageSectionContentCountPlayer}
                >
                  <h2>300</h2>
                  <span>Player</span>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
      </Col>
    </Layout>
  )
}

export default index
