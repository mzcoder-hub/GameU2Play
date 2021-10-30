import { Col, Form, Row, Table } from 'react-bootstrap'
import Layout from '../../components/Layout'
import Meta from '../../components/Meta'

import GameSlider from '../../components/GameSlider'
import sliderData from '../../components/data/sliderData'
import LeaderboardSlider from '../../components/LeaderboardSlider'

const index = () => {
  return (
    <Layout>
      <Meta />
      <Col
        md={12}
        style={{ background: '#0C0C0C', padding: 35, color: '#FFFFFF' }}
      >
        <Row style={{ background: '#1A1A1A', margin: 35, color: '#FFFFFF' }}>
          <Col xs lg={12}>
            <Row style={{ padding: 15 }}>
              <Col className='text-center'>
                <h1
                  style={{
                    fontFamily: 'Open Sans',
                    fontWeight: 'bold',
                    fontSize: 35,
                  }}
                >
                  Peringkat / Leaderboards
                </h1>
              </Col>
              <Col xs lg={12}>
                <Row style={{ margin: 10 }}>
                  <Col xs lg={5}></Col>
                  <Col md='auto'>
                    <Form.Group
                      controlId='formGridState'
                      className='text-center'
                    >
                      <Form.Control
                        as='select'
                        defaultValue='Choose...'
                        style={{ width: '150px !important' }}
                      >
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col xs lg={5}></Col>
                </Row>
              </Col>
              <Col>
                <LeaderboardSlider sliderData={sliderData} />
              </Col>
              <Col style={{ padding: 190, paddingTop: 0 }}>
                <Table
                  borderless
                  size='xl'
                  style={{
                    color: '#fff',
                    border: '1px solid #946200',
                    fontFamily: 'Poppins',
                  }}
                  className='text-center'
                >
                  <thead
                    style={{
                      background: '#F4B740',
                      color: '#1A1A1A',
                      border: '1px solid #946200',
                    }}
                  >
                    <tr>
                      <th style={{ border: '1px solid #946200' }}>Rank</th>
                      <th style={{ border: '1px solid #946200' }}>Pemain</th>
                      <th style={{ border: '1px solid #946200' }}>Poin</th>
                    </tr>
                  </thead>
                  <tbody style={{ border: '1px solid #946200' }}>
                    <tr>
                      <td style={{ border: '1px solid #946200' }}>1</td>
                      <td style={{ border: '1px solid #946200' }}>Mark</td>
                      <td style={{ border: '1px solid #946200' }}>350</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Layout>
  )
}

export default index
