import { Col, InputGroup, Row } from 'react-bootstrap'
import Tombol from '../components/Tombol'
import Layout from '../components/Layout'
import homeStyles from '../styles/Home.module.css'
import Headline from '../components/Headline'
import Meta from '../components/Meta'
import discoverStyles from '../styles/Discovers.module.css'
import GameSlider from '../components/GameSlider'
import sliderData from '../components/data/sliderData'

const discovers = () => {
  return (
    <Layout urlBackground='/images/component/bg2.jpg'>
      <Row>
        <Col md={12}>
          <Row className={discoverStyles.sectionOneP2}>
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
          <Row>
            <Col xs md={12} style={{ padding: 60 }}>
              <GameSlider sliderData={sliderData} />
            </Col>
          </Row>
          <Row className={discoverStyles.sectionTwoP2}>
            <Col xs md={12}>
              <Headline
                headlineText={['PC', 'NEWS']}
                colorPlace='1'
                colorText='red'
                lineType='redLine'
                fontSize='33px'
                sizeColLine1='8'
                sizeColText1='2'
                sizeColLine2='2'
              />
              <Row style={{ margin: 30 }}>
                <Col
                  md={3}
                  style={{ background: '#585c5d', borderRadius: '2.5rem' }}
                >
                  <Row
                    style={{
                      padding: 20,
                    }}
                  >
                    <Col
                      md={12}
                      style={{ background: '#414344', borderRadius: '2.5rem' }}
                    >
                      <Row style={{ margin: 10, color: '#fff' }}>
                        <Col md={12}>
                          <h3>Games</h3>
                          <InputGroup
                            className={`${discoverStyles.inputGroup} mb-3`}
                          >
                            <input
                              type='text'
                              className={discoverStyles.formControl}
                              placeholder='Search...'
                            />
                            <button
                              className={`${discoverStyles.buttonSearch} text-right`}
                            >
                              <svg
                                viewBox='0 0 16 16'
                                fillRule='currentColor'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fillRule='evenodd'
                                  d='M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z'
                                />
                                <path
                                  fillRule='evenodd'
                                  d='M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z'
                                />
                              </svg>
                            </button>
                            {/* <InputGroup.Append
                          style={{
                            position: 'absolute',
                            marginLeft: '85%',
                          }}
                        >
                          <img
                            src='/images/component/search.png'
                            width='30'
                            style={{ margin: 3 }}
                          />
                        </InputGroup.Append> */}
                          </InputGroup>
                        </Col>
                        <Col md={12}>
                          <hr style={{ borderTop: '5px solid #707070' }} />
                          <Row>
                            <Col md={12}>
                              <h5 style={{ fontSize: 15 }}>
                                Recomended For You
                              </h5>
                              {/* Component Game Recomendation */}
                              <Row>
                                <Col md={3}>
                                  <img
                                    src='/images/gameLogo/dota.png'
                                    width='40'
                                  />
                                </Col>
                                <Col md={3}>
                                  <img
                                    src='/images/gameLogo/fornite.jpg'
                                    width='40'
                                  />
                                </Col>
                                <Col md={3}>
                                  <img
                                    src='/images/gameLogo/valorant.png'
                                    width='40'
                                  />
                                </Col>
                                <Col md={3}>
                                  <img
                                    src='/images/gameLogo/lol.png'
                                    width='40'
                                  />
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                          <hr style={{ borderTop: '5px solid #707070' }} />
                          <Row>
                            <Col md={12}>
                              <Row>
                                <Col md={6} className='text-left'>
                                  <h5 style={{ fontSize: 10 }}>All Games</h5>
                                </Col>
                                <Col md={6} className='text-right'>
                                  <h5
                                    style={{ fontSize: 10, color: '#73797c' }}
                                  >
                                    Filter{' '}
                                  </h5>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col md={9}>
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
                        <div className={homeStyles.categoryGameReview}>
                          Indie
                        </div>
                        <Col md={6}>
                          <Row
                            style={{ margin: 20, marginTop: 50, color: '#fff' }}
                          >
                            <Col md={12}>
                              <h2 style={{ fontSize: 20, color: '#780000' }}>
                                DIA MENJADIKAN SATU KAPTAIN PENUMPANGNYA
                              </h2>
                            </Col>
                            <Col md={12}>
                              <p style={{ textAlign: 'justify', fontSize: 15 }}>
                                {' '}
                                Saat itu kepalanya membentur atap aula:
                                sebenarnya dia sekarang lebih dari sembilan kaki
                                tingginya, dan dia segera mengambil kunci emas
                                kecil dan bergegas ke pintu taman ..
                              </p>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={2} className={homeStyles.categoryReadMore}>
                          <div style={{ margin: -40 }}>
                            <Tombol
                              variant='light'
                              fontWeight='bold'
                              size='sm'
                              borderRadius='0.95rem'
                              height='50px'
                            >
                              Selengkapnya
                            </Tombol>
                          </div>
                        </Col>
                      </Row>
                    </Col>
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
                        <div className={homeStyles.categoryGameReview}>
                          Indie
                        </div>
                        <Col md={6}>
                          <Row
                            style={{ margin: 20, marginTop: 50, color: '#fff' }}
                          >
                            <Col md={12}>
                              <h2 style={{ fontSize: 20, color: '#780000' }}>
                                DIA MENJADIKAN SATU KAPTAIN PENUMPANGNYA
                              </h2>
                            </Col>
                            <Col md={12}>
                              <p style={{ textAlign: 'justify', fontSize: 15 }}>
                                {' '}
                                Saat itu kepalanya membentur atap aula:
                                sebenarnya dia sekarang lebih dari sembilan kaki
                                tingginya, dan dia segera mengambil kunci emas
                                kecil dan bergegas ke pintu taman ..
                              </p>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={2} className={homeStyles.categoryReadMore}>
                          <div style={{ margin: -40 }}>
                            <Tombol
                              variant='light'
                              fontWeight='bold'
                              size='sm'
                              borderRadius='0.95rem'
                              height='50px'
                            >
                              Selengkapnya
                            </Tombol>
                          </div>
                        </Col>
                      </Row>
                    </Col>
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
                        <div className={homeStyles.categoryGameReview}>
                          Indie
                        </div>
                        <Col md={6}>
                          <Row
                            style={{ margin: 20, marginTop: 50, color: '#fff' }}
                          >
                            <Col md={12}>
                              <h2 style={{ fontSize: 20, color: '#780000' }}>
                                DIA MENJADIKAN SATU KAPTAIN PENUMPANGNYA
                              </h2>
                            </Col>
                            <Col md={12}>
                              <p style={{ textAlign: 'justify', fontSize: 15 }}>
                                {' '}
                                Saat itu kepalanya membentur atap aula:
                                sebenarnya dia sekarang lebih dari sembilan kaki
                                tingginya, dan dia segera mengambil kunci emas
                                kecil dan bergegas ke pintu taman ..
                              </p>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={2} className={homeStyles.categoryReadMore}>
                          <div style={{ margin: -40 }}>
                            <Tombol
                              variant='light'
                              fontWeight='bold'
                              size='sm'
                              borderRadius='0.95rem'
                              height='50px'
                            >
                              Selengkapnya
                            </Tombol>
                          </div>
                        </Col>
                      </Row>
                    </Col>
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
                        <div className={homeStyles.categoryGameReview}>
                          Indie
                        </div>
                        <Col md={6}>
                          <Row
                            style={{ margin: 20, marginTop: 50, color: '#fff' }}
                          >
                            <Col md={12}>
                              <h2 style={{ fontSize: 20, color: '#780000' }}>
                                DIA MENJADIKAN SATU KAPTAIN PENUMPANGNYA
                              </h2>
                            </Col>
                            <Col md={12}>
                              <p style={{ textAlign: 'justify', fontSize: 15 }}>
                                {' '}
                                Saat itu kepalanya membentur atap aula:
                                sebenarnya dia sekarang lebih dari sembilan kaki
                                tingginya, dan dia segera mengambil kunci emas
                                kecil dan bergegas ke pintu taman ..
                              </p>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={2} className={homeStyles.categoryReadMore}>
                          <div style={{ margin: -40 }}>
                            <Tombol
                              variant='light'
                              fontWeight='bold'
                              size='sm'
                              borderRadius='0.95rem'
                              height='50px'
                            >
                              Selengkapnya
                            </Tombol>
                          </div>
                        </Col>
                      </Row>
                    </Col>
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
                        <div className={homeStyles.categoryGameReview}>
                          Indie
                        </div>
                        <Col md={6}>
                          <Row
                            style={{ margin: 20, marginTop: 50, color: '#fff' }}
                          >
                            <Col md={12}>
                              <h2 style={{ fontSize: 20, color: '#780000' }}>
                                DIA MENJADIKAN SATU KAPTAIN PENUMPANGNYA
                              </h2>
                            </Col>
                            <Col md={12}>
                              <p style={{ textAlign: 'justify', fontSize: 15 }}>
                                {' '}
                                Saat itu kepalanya membentur atap aula:
                                sebenarnya dia sekarang lebih dari sembilan kaki
                                tingginya, dan dia segera mengambil kunci emas
                                kecil dan bergegas ke pintu taman ..
                              </p>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={2} className={homeStyles.categoryReadMore}>
                          <div style={{ margin: -40 }}>
                            <Tombol
                              variant='light'
                              fontWeight='bold'
                              size='sm'
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
              </Row>
            </Col>
          </Row>
          <Row className={discoverStyles.sectionThreeP2}>
            <Col md={12} style={{ padding: 50 }}>
              <h1 style={{ color: '#fff' }}>Contact Us</h1>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  )
}

export default discovers
