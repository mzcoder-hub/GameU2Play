import { Col, Row } from 'react-bootstrap'
import Tombol from '../Tombol'

const HeaderTop = () => {
  return (
    <Row>
      <Col
        md={12}
        style={{
          backgroundImage: 'url("/images/headerTopProfile.svg")',
          height: 500,
          color: '#ffff',
        }}
      >
        <Row style={{ marginTop: 150 }}>
          <Col md={12} className='text-center'>
            <Row
              className='justify-content-md-center'
              style={{ alignItems: 'center' }}
            >
              <Col xs lg={2}>
                <img
                  src={`/images/sample/avatar.svg`}
                  alt=''
                  width='150'
                  height='150'
                />
              </Col>
              <Col md='auto'>
                <h3 style={{ fontWeight: 'bold' }}>Username</h3>
                <span
                  style={{
                    color: '#F4B740',
                    fontFamily: 'Lato',
                    fontStyle: 'normal',
                    fontWeight: 500,
                  }}
                >
                  Team Name
                </span>
              </Col>
              <Col xs lg={2}>
                <img
                  src='/images/slot-kosong.svg'
                  alt='slot'
                  width='100%'
                  height='150'
                  style={{ margin: 10 }}
                />
              </Col>
            </Row>
          </Col>
          <Col md={12} className='text-center' style={{ marginTop: 50 }}>
            <Row className='justify-content-md-center'>
              <Col xs lg={1}>
                <img
                  src={`/icons/twitch-grey-logo.svg`}
                  alt='social link to twitch'
                />
              </Col>
              <Col xs lg={1}>
                <img
                  src={`/icons/facebook-grey-logo.svg`}
                  alt='social link to facebook'
                />
              </Col>
              <Col xs lg={1}>
                <img
                  src={`/icons/youtube-grey-logo.svg`}
                  alt='social link to youtube'
                />
              </Col>
              <Col xs lg={1}>
                <img
                  src={`/icons/instagram-grey-logo.svg`}
                  alt='social link to instagram'
                />
              </Col>
              <Col xs lg={1}>
                <img
                  src={`/icons/twitter-grey-logo.svg`}
                  alt='social link to twitter'
                />
              </Col>
              <Col md='auto' className='text-right'></Col>
            </Row>
            <Row style={{ marginTop: 35 }}>
              <Col md={12} className='text-center'>
                <Tombol variant='warning' width='150px' marginRight='60px'>
                  Follow
                </Tombol>
                <Tombol
                  variant='warning'
                  borderRadius='6px'
                  border='1px solid #F4B740'
                  backgroundColor='#1A1A1A'
                  color='#F4B740'
                >
                  Kirim Pesan
                </Tombol>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default HeaderTop
