import { Col, Row } from 'react-bootstrap'
import Tombol from '../components/Tombol'
import homeStyles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Meta from '../components/Meta'
import MatchesFeed from '../components/MatchesFeed'
import matchSeed from '../components/data/matchSeed'
import Headline from '../components/Headline'

const index = () => {
  return (
    <Layout>
      <img src='/bg-top.png' className={homeStyles.backgroundImageTop} alt='' />
      <Row>
        <Meta />
        <Col xs={12}>
          <Row className={homeStyles.sectionOne} data-aos='fade-left'>
            <Col xs={4}></Col>
            <Col xs={8}>
              <div>
                <h2>Do you have what it takes to be a</h2>
                <h1>GAMER?</h1>
                <Tombol variant='warning' fontWeight='bold'>
                  JOIN US NOW
                </Tombol>
              </div>
            </Col>
          </Row>
          <Row className={homeStyles.sectionTwo} data-aos='fade-up-right'>
            <Col xs={12} style={{ textAlign: 'center', marginTop: 80 }}>
              <span
                style={{
                  fontWeight: 'bold',
                  fontSize: 30,
                }}
              >
                YOUR FUTURE GAMER PLAYFORM
              </span>
              <br />
              <span
                style={{
                  fontSize: 20,
                }}
              >
                Features That Will Elevate Your Skills and Knowledge
              </span>
            </Col>
            <Col
              xs={12}
              style={{ textAlign: 'center', marginTop: 30, marginBottom: 50 }}
            >
              <Row className='justify-content-md-center'>
                <Col md='12'>
                  <Row>
                    <Col xs lg={2.4} data-aos='flip-left'>
                      <div className={homeStyles.circles}>
                        <img
                          src='/images/global-stat.png'
                          alt='GLOBAL STATISTIC'
                          width='150'
                          height='150'
                        />
                      </div>
                      <span style={{ fontSize: 15, fontWeight: 'bold' }}>
                        GLOBAL STATISTIC
                      </span>
                    </Col>
                    <Col xs lg={2.4} data-aos='flip-left'>
                      Image
                      <br />
                      <span style={{ fontSize: 15, fontWeight: 'bold' }}>
                        GLOBAL UPDATES
                      </span>
                    </Col>
                    <Col xs lg={2.4} data-aos='flip-left'>
                      <div className={homeStyles.circles}>
                        <img
                          src='/images/tournament.png'
                          alt='OURNAMENTS'
                          width='150'
                          height='150'
                        />
                      </div>
                      <span style={{ fontSize: 15, fontWeight: 'bold' }}>
                        TOURNAMENTS
                      </span>
                    </Col>
                    <Col xs lg={2.4} data-aos='flip-left'>
                      <div className={homeStyles.circles}>
                        <img
                          src='/images/learn.png'
                          alt=' LEARN FROM THE BEST'
                          width='150'
                          height='150'
                          style={{ marginLeft: -6 }}
                        />
                      </div>
                      <span style={{ fontSize: 15, fontWeight: 'bold' }}>
                        LEARN FROM THE BEST
                      </span>
                    </Col>
                    <Col xs lg={2.4} data-aos='flip-left'>
                      <div className={homeStyles.circles}>
                        <img
                          src='/images/active-comunity.png'
                          alt=''
                          width='150'
                          height='150'
                          style={{ marginLeft: -2 }}
                        />
                      </div>
                      <span style={{ fontSize: 15, fontWeight: 'bold' }}>
                        ACTIVE COMMUNITY
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className={homeStyles.sectionThree}>
            <Col xs lg={12} style={{ textAlign: 'center' }}>
              <span style={{ fontSize: 50, fontWeight: 'bold' }}>
                JOIN AND WIN THE PRIZEPOOL NOW!!!
              </span>
            </Col>
            <Col xs lg={12}>
              <Row style={{ marginTop: 50 }} data-aos='fade-right'>
                <Col md={{ span: 5, offset: 3 }}>
                  <span style={{ fontSize: 50, fontWeight: 'bold' }}>
                    STEP 1
                  </span>
                  <br />
                  <Tombol
                    variant='warning'
                    fontWeight='bold'
                    borderRadius='2.5rem'
                  >
                    SIGN UP WITH YOUR EMAIL <br /> AND YOUR PROFILE
                  </Tombol>
                </Col>
              </Row>
              <Row style={{ marginTop: 50 }} data-aos='fade-left'>
                <Col md={{ span: 5, offset: 6 }}>
                  {' '}
                  <span style={{ fontSize: 50, fontWeight: 'bold' }}>
                    STEP 2
                  </span>
                  <br />
                  <Tombol
                    variant='warning'
                    fontWeight='bold'
                    borderRadius='2.5rem'
                  >
                    BUILD / JOIN THE TEAM
                  </Tombol>
                </Col>
              </Row>
              <Row
                className='text-center'
                style={{ marginTop: 50 }}
                data-aos='flip-up'
              >
                <Col md={6}>
                  <div style={{ fontSize: 50, fontWeight: 'bold' }}>
                    150+ Tournament
                  </div>
                  <img
                    src='/images/turnamen.svg'
                    alt='30+ Team'
                    width='300'
                    height='150'
                  />
                </Col>
                <Col md={6}>
                  <div style={{ fontSize: 50, fontWeight: 'bold' }}>
                    30+ Team
                  </div>
                  <img
                    src='/images/30-team.svg'
                    alt='30+ Team'
                    width='300'
                    height='150'
                  />
                </Col>
                <Col md={12}>
                  <div style={{ fontSize: 50, fontWeight: 'bold' }}>
                    Big PrizePool
                  </div>
                  <img
                    src='/images/prizepool.svg'
                    alt='Big Prizepool'
                    width='300'
                    height='150'
                  />
                </Col>
              </Row>
              <Row
                style={{ marginTop: 50, marginBottom: 100 }}
                data-aos='fade-right'
              >
                <Col md={{ span: 5, offset: 4 }}>
                  <div className='text-right'>
                    <div className={homeStyles.compate}>
                      <img
                        src='/images/compate.png'
                        alt='Big Prizepool'
                        width='300'
                        height='150'
                      />
                    </div>
                    <div style={{ fontSize: 50, fontWeight: 'bold' }}>
                      STEP 3
                    </div>
                    <Tombol
                      variant='warning'
                      fontWeight='bold'
                      borderRadius='2.5rem'
                    >
                      COMPATE AND WIN IT
                    </Tombol>
                  </div>
                </Col>
              </Row>
              <Row className='text-center' style={{ marginTop: 50 }}>
                <Col md={12} style={{ marginBottom: 80 }}>
                  <Tombol
                    variant='warning'
                    fontWeight='bold'
                    borderRadius='1.5rem'
                    height='90px'
                  >
                    MORE ABOUT THE TOURNAMENTS
                  </Tombol>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className={homeStyles.sectionFour}>
            <Col md={12}>
              <Row>
                <Col md={{ span: 10, offset: 1 }}>
                  <Headline
                    headlineText={['Last', 'Matches']}
                    colorPlace='2'
                    colorText='red'
                    lineType='whiteLine'
                    fontSize='33px'
                    sizeColLine1='4'
                    sizeColText1='4'
                    sizeColLine2='4'
                  />
                  {matchSeed &&
                    matchSeed.map((val) => (
                      <MatchesFeed
                        team1={val.team1}
                        team1Logo={val.logoTeam1}
                        team2={val.team2}
                        team2Logo={val.logoTeam2}
                        scoring={val.scoring}
                        date={val.date}
                        status={val.status}
                        key={val.matchId}
                        fontSizeDate='1rem'
                      />
                    ))}
                  <div className='text-center'>
                    <Tombol
                      variant='light'
                      fontWeight='bold'
                      size='lg'
                      borderRadius='0.25rem'
                    >
                      Selengkapnya
                    </Tombol>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className={homeStyles.sectionFive}>
            <Col md={12}>
              <Row>
                <Col md={12} style={{ marginTop: 50 }}>
                  <Headline
                    headlineText={['U2PLAY', 'NEWS']}
                    colorPlace='1'
                    colorText='red'
                    lineType='whiteLine'
                    fontSize='37px'
                    sizeColLine1='2'
                    sizeColText1='3'
                    sizeColLine2='7'
                  />
                  <Row style={{ margin: 10 }}>
                    <Col md={7}></Col>
                    <Col md={5} style={{ background: '#717171' }}>
                      <Headline
                        headlineText={['Upcoming', 'Matches']}
                        colorPlace='1'
                        colorText='red'
                        lineType='blackLine'
                        fontSize='20px'
                        sizeColLine1='3'
                        sizeColText1='6'
                        sizeColLine2='3'
                      />
                      {matchSeed &&
                        matchSeed.map((val) => (
                          <MatchesFeed
                            team1={val.team1}
                            team1Logo={val.logoTeam1}
                            team2={val.team2}
                            team2Logo={val.logoTeam2}
                            scoring={val.scoring}
                            date={val.date}
                            status={val.status}
                            key={val.matchId}
                            imgSize='50'
                            fontSizeDate='7px'
                            size='sm'
                            fontSizeButton='10px'
                            fontSizeTeamName='15px'
                            gameType={val.gameType}
                          />
                        ))}
                    </Col>
                  </Row>
                  <Col md={12} className='text-center'>
                    <div style={{ margin: 20 }}>
                      <Tombol
                        variant='light'
                        fontWeight='bold'
                        size='lg'
                        borderRadius='0.25rem'
                      >
                        Selengkapnya
                      </Tombol>
                    </div>
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className={homeStyles.sectionSix}>
            <Col md={12} style={{ marginTop: 50 }}>
              <Headline
                headlineText={['Hot', 'Posts']}
                colorPlace='2'
                colorText='red'
                lineType='whiteLine'
                fontSize='35px'
                sizeColLine1='2'
                sizeColText1='2'
                sizeColLine2='8'
              />
            </Col>
            <Col md={12} style={{ marginTop: 50 }}>
              <Row>
                <Col md={4}>
                  <Row className={homeStyles.hotPostsList}>
                    <Col
                      md={12}
                      style={{
                        backgroundImage: `url('/images/dota.png')`,
                        height: 300,
                        filter: `blur(3px)`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                      }}
                    ></Col>
                    <Col md={12} className={homeStyles.gameHotPostHeader}>
                      <h2 style={{ fontSize: 25 }}>DOTA 2 {'>>>'}</h2>
                    </Col>
                    <Col md={12} className={homeStyles.titleHotPostsList}>
                      <h3>UPDATE SOME PATCH HERE</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Col>
                    <Col md={12} className={homeStyles.titleHotPostsList}>
                      <h3>UPDATE SOME PATCH HERE</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Col>
                    <Col md={12} className={homeStyles.titleHotPostsList}>
                      <h3>UPDATE SOME PATCH HERE</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col md={4}>
                  <Row className={homeStyles.hotPostsList}>
                    <Col
                      md={12}
                      style={{
                        backgroundImage: `url('/images/mlbb.png')`,
                        height: 300,
                        filter: `blur(3px)`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                      }}
                    ></Col>
                    <Col md={12} className={homeStyles.gameHotPostHeader}>
                      {' '}
                      <h2 style={{ fontSize: 25 }}>MOBILE LEGEND {'>>>'}</h2>
                    </Col>
                    <Col md={12} className={homeStyles.titleHotPostsList}>
                      <h3>UPDATE SOME PATCH HERE</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Col>
                    <Col md={12} className={homeStyles.titleHotPostsList}>
                      <h3>UPDATE SOME PATCH HERE</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Col>
                    <Col md={12} className={homeStyles.titleHotPostsList}>
                      <h3>UPDATE SOME PATCH HERE</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col md={4}>
                  <Row className={homeStyles.hotPostsList}>
                    <Col
                      md={12}
                      style={{
                        backgroundImage: `url('/images/valorant.png')`,
                        height: 300,
                        filter: `blur(3px)`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                      }}
                    ></Col>
                    <Col md={12} className={homeStyles.gameHotPostHeader}>
                      {' '}
                      <h2 style={{ fontSize: 25 }}>VALORANT {'>>>'}</h2>
                    </Col>
                    <Col md={12} className={homeStyles.titleHotPostsList}>
                      <h3>UPDATE SOME PATCH HERE</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Col>
                    <Col md={12} className={homeStyles.titleHotPostsList}>
                      <h3>UPDATE SOME PATCH HERE</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Col>
                    <Col md={12} className={homeStyles.titleHotPostsList}>
                      <h3>UPDATE SOME PATCH HERE</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className={homeStyles.sectionSeven}>
            <Col md={12}>
              <Headline
                headlineText={['Game', 'Reviews']}
                colorPlace='1'
                colorText='red'
                lineType='whiteLine'
                fontSize='35px'
                sizeColLine1='2'
                sizeColText1='3'
                sizeColLine2='7'
              />
              <Col md={12}>
                <Row>
                  <Col md={12}>
                    <Row className={homeStyles.gameReviews}>
                      <Col
                        md={4}
                        style={{
                          backgroundImage: `url('/images/valorant.png')`,
                          height: 300,
                          filter: `blur(2px)`,
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                        }}
                      ></Col>
                      <div className={homeStyles.categoryGameReview}>Indie</div>
                      <Col md={6}>
                        <Row
                          style={{ margin: 20, marginTop: 50, color: '#fff' }}
                        >
                          <Col md={12}>
                            <h2 className={homeStyles.titleGameReviews}>
                              DIA MENJADIKAN SATU KAPTAIN PENUMPANGNYA
                            </h2>
                          </Col>
                          <Col md={12}>
                            <p style={{ textAlign: 'justify' }}>
                              {' '}
                              Saat itu kepalanya membentur atap aula: sebenarnya
                              dia sekarang lebih dari sembilan kaki tingginya,
                              dan dia segera mengambil kunci emas kecil dan
                              bergegas ke pintu taman ..
                            </p>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={2} className={homeStyles.categoryReadMore}>
                        <div style={{ margin: -40 }}>
                          <Tombol
                            variant='light'
                            fontWeight='bold'
                            size='lg'
                            borderRadius='0.95rem'
                            height='50px'
                          >
                            Selengkapnya
                          </Tombol>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col md={12}>
                <Row>
                  <Col md={12}>
                    <Row className={homeStyles.gameReviews}>
                      <Col
                        md={4}
                        style={{
                          backgroundImage: `url('/images/valorant.png')`,
                          height: 300,
                          filter: `blur(2px)`,
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                        }}
                      ></Col>
                      <div className={homeStyles.categoryGameReview}>Indie</div>
                      <Col md={6}>
                        <Row
                          style={{ margin: 20, marginTop: 50, color: '#fff' }}
                        >
                          <Col md={12}>
                            <h2 className={homeStyles.titleGameReviews}>
                              DIA MENJADIKAN SATU KAPTAIN PENUMPANGNYA
                            </h2>
                          </Col>
                          <Col md={12}>
                            <p style={{ textAlign: 'justify' }}>
                              {' '}
                              Saat itu kepalanya membentur atap aula: sebenarnya
                              dia sekarang lebih dari sembilan kaki tingginya,
                              dan dia segera mengambil kunci emas kecil dan
                              bergegas ke pintu taman ..
                            </p>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={2} className={homeStyles.categoryReadMore}>
                        <div style={{ margin: -40 }}>
                          <Tombol
                            variant='light'
                            fontWeight='bold'
                            size='lg'
                            borderRadius='0.95rem'
                            height='50px'
                          >
                            Selengkapnya
                          </Tombol>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col md={12}>
                <Row>
                  <Col md={12}>
                    <Row className={homeStyles.gameReviews}>
                      <Col
                        md={4}
                        style={{
                          backgroundImage: `url('/images/valorant.png')`,
                          height: 300,
                          filter: `blur(2px)`,
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                        }}
                      ></Col>
                      <div className={homeStyles.categoryGameReview}>Indie</div>
                      <Col md={6}>
                        <Row
                          style={{ margin: 20, marginTop: 50, color: '#fff' }}
                        >
                          <Col md={12}>
                            <h2 className={homeStyles.titleGameReviews}>
                              DIA MENJADIKAN SATU KAPTAIN PENUMPANGNYA
                            </h2>
                          </Col>
                          <Col md={12}>
                            <p style={{ textAlign: 'justify' }}>
                              {' '}
                              Saat itu kepalanya membentur atap aula: sebenarnya
                              dia sekarang lebih dari sembilan kaki tingginya,
                              dan dia segera mengambil kunci emas kecil dan
                              bergegas ke pintu taman ..
                            </p>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={2} className={homeStyles.categoryReadMore}>
                        <div style={{ margin: -40 }}>
                          <Tombol
                            variant='light'
                            fontWeight='bold'
                            size='lg'
                            borderRadius='0.95rem'
                            height='50px'
                          >
                            Selengkapnya
                          </Tombol>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Col>
          </Row>

          <Row className={homeStyles.sectionEight}>
            <Col md={12} className='text-center' style={{ marginTop: 50 }}>
              <h1 style={{ fontSize: 50 }}>OUR COMMUNITIES</h1>
              <Row style={{ margin: 40 }}>
                <Col md={6} className='text-right'>
                  <div
                    style={{
                      width: '100%',
                      height: '300px',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundImage: `url('/images/member.jpg')`,
                      borderRadius: '2.5rem',
                    }}
                  ></div>
                </Col>
                <Col
                  md={6}
                  className='text-left'
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <Row>
                    <Col md={12}>
                      <h2 style={{ color: 'yellow', fontSize: 50 }}>
                        600+ MEMBERS
                      </h2>
                    </Col>
                    <Col md={12}>
                      <span style={{ fontSize: 35 }}>
                        Dari banyak kota besar
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row style={{ margin: 40 }}>
                <Col
                  md={6}
                  className='text-right'
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <Row>
                    <Col md={12}>
                      <h2 style={{ color: 'yellow', fontSize: 40 }}>
                        12+ INTERNET CAFE
                      </h2>
                    </Col>
                    <Col md={12}>
                      <span style={{ fontSize: 35 }}>Sudah Bergabung</span>
                    </Col>
                  </Row>
                </Col>
                <Col md={6} className='text-right'>
                  <div
                    style={{
                      width: '100%',
                      height: '300px',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundImage: `url('/images/icafe.jpg')`,
                      borderRadius: '2.5rem',
                    }}
                  ></div>
                </Col>
              </Row>
              <Row style={{ margin: 40 }}>
                <Col md={12} className='text-center'>
                  <Row>
                    <Col md={12}>
                      <Tombol
                        variant='warning'
                        fontWeight='bold'
                        size='lg'
                        color='#000'
                        borderRadius='0.95rem'
                        height='50px'
                      >
                        JOIN US NOW
                      </Tombol>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row style={{ margin: 40 }}>
                <Col md={12} className='text-center'>
                  <h1>PARTNER</h1>
                </Col>
                <Col md={12} className='text-center'>
                  <Row style={{ margin: 10 }}>
                    <Col md={3}>
                      <img
                        src='/images/benq.png'
                        alt='sponsor kami'
                        width='100%'
                      />
                    </Col>
                    <Col md={3}>
                      <img
                        src='/images/samsung.png'
                        alt='sponsor kami'
                        width='100%'
                      />
                    </Col>
                    <Col md={3}>
                      <img
                        src='/images/shopee.png'
                        alt='sponsor kami'
                        width='100%'
                      />
                    </Col>
                    <Col md={3}>
                      <img
                        src='/images/toped.png'
                        alt='sponsor kami'
                        width='100%'
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col style={{ height: 200, background: '#393a33' }}></Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  )
}

export default index
