import { Col, Row } from 'react-bootstrap'
import Layout from '../components/Layout'
import Meta from '../components/Meta'
import Tombol from '../components/Tombol'

import IndexCss from '../styles/index.module.css'

const index = () => {
  return (
    <Layout>
      <Meta />
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
                <div className={`text-left ${IndexCss.topPageButton}`}>
                  <Tombol
                    variant='warning'
                    borderRadius='6px'
                    color='#14142B'
                    width='258px'
                  >
                    Join Now!
                  </Tombol>
                  <div className={IndexCss.topPageTextTwo}>Learn More</div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Layout>
  )
}

export default index
