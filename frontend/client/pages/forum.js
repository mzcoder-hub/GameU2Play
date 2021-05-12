import { Col, Row } from 'react-bootstrap'
import Meta from '../components/Meta'
import Layout from '../components/Layout'
import forumStyle from '../styles/Forum.module.css'
import SearchForm from '../components/SearchForm'

const forum = () => {
  return (
    <Layout urlBackground='/images/component/bg2.jpg'>
      <Meta />
      <Row>
        <Col xs md={3} className={forumStyle.rowLeft}>
          <Row>
            <Col md={12} className={`${forumStyle.HeaderRow} text-center`}>
              <img
                src='/images/gameLogo/dota.png'
                alt='Game Logo'
                width='150'
              />
              <h1>Game Name</h1>
            </Col>
          </Row>
          <Row>
            <Col md={12} className={forumStyle.HeadRowSecond}>
              <h1>Game Name</h1>
              <hr style={{ borderTop: '5px solid #ffffff' }} />
            </Col>
            <Col md={12} className={forumStyle.HeadRowSecond}>
              Content
            </Col>
            <Col md={12} className={forumStyle.HeadRowSecond}>
              <hr style={{ borderTop: '5px solid #ffffff' }} />
            </Col>
          </Row>
        </Col>
        <Col xs md={9} className={forumStyle.rowRight}>
          <Meta />
          <Row className={forumStyle.heading}>
            <Col md={6}>
              <h1>Discussions</h1>
            </Col>
            <Col md={6}>
              <SearchForm size='90% !important' sizeBut='10% !important' />
            </Col>
          </Row>
          <hr style={{ borderTop: '5px solid #ffffff' }} />
          <Row>
            <Col xs md={12} className={forumStyle.Postingan}>
              <h2>[Notice] Update 7.29b</h2>
            </Col>
            <Col xs md={12} className={forumStyle.Postingan}>
              <h2>Who is Dawnbreaker??</h2>
              <p className={forumStyle.excerpt}>
                Dawnbreaker, a new hero in DotA 2, along with the update of new
                maps and other new items..
              </p>
              <Row className={forumStyle.profileDetail}>
                <Col xs md={1}>
                  <img
                    src='/images/component/profileDefault.png'
                    alt='profile Username'
                    width='50'
                  />
                </Col>
                <Col
                  xs
                  md={11}
                  className={`${forumStyle.profileUsername} text-left`}
                >
                  USERNAME - Date Posted
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  )
}

export default forum
