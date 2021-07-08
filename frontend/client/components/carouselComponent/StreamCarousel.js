import { Col, Row, Carousel } from 'react-bootstrap'
import IndexCss from '../../styles/index.module.css'

const StreamCarousel = () => {
  return (
    <Col md={12}>
      <Row style={{ padding: 50, justifyContent: 'center' }}>
        <Col md={7} className={IndexCss.secondPageStream}></Col>
        <Col md={4}>
          <Row>
            <Col sm={12}>
              <Row className={IndexCss.secondPageStreamLeftHead}>
                <Col
                  md={6}
                  className={IndexCss.secondPageStreamLeftHeadTextLeft}
                >
                  Standings
                </Col>
                <Col
                  md={6}
                  className={IndexCss.secondPageStreamLeftHeadTextRight}
                >
                  View Details
                </Col>
              </Row>
            </Col>
            <Col sm={12}>
              <Row className={IndexCss.secondPageLeftTeamBody}>
                <Col md={6} className={IndexCss.secondPageLeftTeamLogo}>
                  1.{' '}
                  <img
                    src='/images/team.svg'
                    alt='Team Logo'
                    className={IndexCss.secondPageLeftTeamLogoImages}
                  />
                </Col>
                <Col md={6} className={IndexCss.secondPageLeftTeamName}>
                  T1 Esports
                </Col>
              </Row>
            </Col>
            <Col sm={12}>
              <Row className={IndexCss.secondPageLeftTeamBody}>
                <Col md={6} className={IndexCss.secondPageLeftTeamLogo}>
                  2.{' '}
                  <img
                    src='/images/team.svg'
                    alt='Team Logo'
                    className={IndexCss.secondPageLeftTeamLogoImages}
                  />
                </Col>
                <Col md={6} className={IndexCss.secondPageLeftTeamName}>
                  TNC Predator
                </Col>
              </Row>
            </Col>
            <Col sm={12}>
              <Row className={IndexCss.secondPageLeftTeamBody}>
                <Col md={6} className={IndexCss.secondPageLeftTeamLogo}>
                  3.{' '}
                  <img
                    src='/images/team.svg'
                    alt='Team Logo'
                    className={IndexCss.secondPageLeftTeamLogoImages}
                  />
                </Col>
                <Col md={6} className={IndexCss.secondPageLeftTeamName}>
                  Execration
                </Col>
              </Row>
            </Col>
            <Col sm={12}>
              <Row className={IndexCss.secondPageLeftTeamBody}>
                <Col md={6} className={IndexCss.secondPageLeftTeamLogo}>
                  4.{' '}
                  <img
                    src='/images/team.svg'
                    alt='Team Logo'
                    className={IndexCss.secondPageLeftTeamLogoImages}
                  />
                </Col>
                <Col md={6} className={IndexCss.secondPageLeftTeamName}>
                  Fnatic
                </Col>
              </Row>
            </Col>
            <Col sm={12}>
              <Row className={IndexCss.secondPageLeftTeamBody}>
                <Col md={6} className={IndexCss.secondPageLeftTeamLogo}>
                  5.{' '}
                  <img
                    src='/images/team.svg'
                    alt='Team Logo'
                    className={IndexCss.secondPageLeftTeamLogoImages}
                  />
                </Col>
                <Col md={6} className={IndexCss.secondPageLeftTeamName}>
                  Neon Esport
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default StreamCarousel
