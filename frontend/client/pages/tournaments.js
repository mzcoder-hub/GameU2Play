import { Col, Row, InputGroup } from 'react-bootstrap'
import Layout from '../components/Layout'
import Meta from '../components/Meta'
import Tombol from '../components/Tombol'
import discoverStyles from '../styles/Discovers.module.css'

const tournaments = () => {
  return (
    <Layout>
      <Meta
        title='Tournaments - GameU2Play'
        keywords='Discover New Tournaments Gaming, Discover Tournaments Gaming News, Discover Tournaments Gaming Update'
        description='Discover New Tournaments Gaming, Discover Tournaments Gaming News, Discover Tournaments Gaming Update'
      />
      <Row>
        <Col xs={12}>
          <Row
            style={{
              backgroundColor: '#585858af',
              color: '#fff',
              background: `url('/images/component/bg2.jpg') no-repeat center`,
            }}
          >
            <Col md={12} className='text-center' style={{ padding: 50 }}>
              <h1>TOURNAMENT GAMES</h1>
            </Col>
          </Row>
          <Row
            style={{
              background: `url('/images/component/bg1.jpg') no-repeat`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <Col md={12}>
              <Row>
                <Col md={9} style={{ padding: 60 }}>
                  <InputGroup className={`${discoverStyles.inputGroup} mb-3`}>
                    <input
                      type='text'
                      className={discoverStyles.formControl}
                      style={{ width: '96% !important' }}
                      placeholder='Search...'
                    />
                    <button
                      className={`${discoverStyles.buttonSearch} text-right`}
                      style={{ width: '4% !important' }}
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
                  </InputGroup>
                </Col>
                <Col
                  md={3}
                  style={{ padding: '60px 0px 0px 0px', marginLeft: -45 }}
                >
                  <Tombol
                    // variant='warning'
                    fontWeight='bold'
                    size='sm'
                    borderRadius='0.95rem'
                    width='250px'
                    backgroundColor='#f3fb87'
                    borderColor='#f3fb87'
                  >
                    Search
                  </Tombol>
                </Col>
              </Row>
            </Col>
            <Col md={12} style={{ backgroundColor: '#040414b8' }}>
              <Row style={{ padding: 40 }}>
                <Col md={6}>
                  <hr style={{ borderTop: '5px solid #6d6d6e' }} />
                  <Row style={{ color: '#fff' }}>
                    <Col md={3}>
                      <img
                        src='/images/gameLogo/valorant.png'
                        width='100%'
                        height='100%'
                      />
                    </Col>
                    <Col md={5}>
                      <h2>JAKA TOURNEY</h2>
                      <p>GameType</p>
                      <p style={{ color: '#02a617' }}>15 Team Participating</p>
                    </Col>
                    <Col md={4}>
                      <h5>Start Date : </h5>
                      <p>2021-01-01</p>
                      <Tombol // variant='warning'
                        fontWeight='bold'
                        size='sm'
                        borderRadius='0.95rem'
                        width='100%'
                        backgroundColor='#5a5a5a'
                        borderColor='#5a5a5a'
                        disabled={true}
                      >
                        Joined
                      </Tombol>
                    </Col>
                  </Row>
                </Col>
                <Col md={6}>
                  <hr style={{ borderTop: '5px solid #6d6d6e' }} />
                  <Row style={{ color: '#fff' }}>
                    <Col md={3}>
                      <img
                        src='/images/gameLogo/valorant.png'
                        width='100%'
                        height='100%'
                      />
                    </Col>
                    <Col md={5}>
                      <h2>JAKA TOURNEY</h2>
                      <p>GameType</p>
                      <p style={{ color: '#02a617' }}>15 Team Participating</p>
                    </Col>
                    <Col md={4}>
                      <h5>Start Date : </h5>
                      <p>2021-01-01</p>
                      <Tombol // variant='warning'
                        fontWeight='bold'
                        size='sm'
                        borderRadius='0.95rem'
                        width='100%'
                        backgroundColor='#ceff00'
                        borderColor='#ceff00'
                      >
                        Join Now
                      </Tombol>
                    </Col>
                  </Row>
                </Col>
                <Col md={6}>
                  <hr style={{ borderTop: '5px solid #6d6d6e' }} />
                  <Row style={{ color: '#fff' }}>
                    <Col md={3}>
                      <img
                        src='/images/gameLogo/valorant.png'
                        width='100%'
                        height='100%'
                      />
                    </Col>
                    <Col md={5}>
                      <h2>JAKA TOURNEY</h2>
                      <p>GameType</p>
                      <p style={{ color: '#02a617' }}>15 Team Participating</p>
                    </Col>
                    <Col md={4}>
                      <h5>Start Date : </h5>
                      <p>2021-01-01</p>
                      <Tombol // variant='warning'
                        fontWeight='bold'
                        size='sm'
                        borderRadius='0.95rem'
                        width='100%'
                        backgroundColor='#5a5a5a'
                        borderColor='#5a5a5a'
                        disabled={true}
                      >
                        Joined
                      </Tombol>
                    </Col>
                  </Row>
                </Col>
                <Col md={6}>
                  <hr style={{ borderTop: '5px solid #6d6d6e' }} />
                  <Row style={{ color: '#fff' }}>
                    <Col md={3}>
                      <img
                        src='/images/gameLogo/valorant.png'
                        width='100%'
                        height='100%'
                      />
                    </Col>
                    <Col md={5}>
                      <h2>JAKA TOURNEY</h2>
                      <p>GameType</p>
                      <p style={{ color: '#02a617' }}>15 Team Participating</p>
                    </Col>
                    <Col md={4}>
                      <h5>Start Date : </h5>
                      <p>2021-01-01</p>
                      <Tombol // variant='warning'
                        fontWeight='bold'
                        size='sm'
                        borderRadius='0.95rem'
                        width='100%'
                        backgroundColor='#ceff00'
                        borderColor='#ceff00'
                      >
                        Join Now
                      </Tombol>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  )
}

export default tournaments
