import { Col, Form, Row, Table } from 'react-bootstrap'
import Layout from '../../../../components/Layout'
import Meta from '../../../../components/Meta'
import Tombol from '../../../../components/Tombol'

import forumHomecss from '../../../../styles/forumHome.module.css'

const player = () => {
  return (
    <Layout>
      <Meta />
      <Col
        md={12}
        style={{ background: '#0C0C0C', padding: 35, color: '#FFFFFF' }}
      >
        <Row>
          <Col></Col>
          <Col
            md={6}
            style={{ background: '#1A1A1A', borderRadius: 6 }}
            className={forumHomecss.defaultFontFormForum}
          >
            <Row>
              <Col md={12}>
                <h1 className={forumHomecss.defaultH1}>Team Management</h1>
              </Col>
              <Col md={12} style={{ marginTop: 10 }}>
                <Row>
                  <Col md={6}>
                    Pemain
                    <Table style={{ color: '#fff' }}>
                      <tbody>
                        <tr>
                          <td>Otto</td>
                          <td>
                            <Tombol
                              variant='warning'
                              borderRadius='6px'
                              border='1px solid #C30052'
                              backgroundColor='#1A1A1A'
                              color='#C30052'
                            >
                              Kick
                            </Tombol>
                          </td>
                        </tr>
                        <tr>
                          <td>Otto</td>
                          <td>
                            <Tombol
                              variant='warning'
                              borderRadius='6px'
                              border='1px solid #C30052'
                              backgroundColor='#1A1A1A'
                              color='#C30052'
                            >
                              Kick
                            </Tombol>
                          </td>
                        </tr>
                        <tr>
                          <td>Otto</td>
                          <td>
                            <Tombol
                              variant='warning'
                              borderRadius='6px'
                              border='1px solid #C30052'
                              backgroundColor='#1A1A1A'
                              color='#C30052'
                            >
                              Kick
                            </Tombol>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId='formGridState'>
                      <Form.Label> Pilih Kapten Tim</Form.Label>
                      <Form.Control as='select' defaultValue='Choose...'>
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <Col md={12}>
                <h1 className={forumHomecss.defaultH1}>Sponsor</h1>
                <div className='text-right' style={{ marginBottom: 10 }}>
                  <Tombol
                    variant='warning'
                    borderRadius='6px'
                    border='1px solid #F4B740'
                    backgroundColor='#F4B740'
                    color='#14142B'
                  >
                    Add Sponsor
                  </Tombol>
                </div>
                <Table style={{ color: '#fff' }}>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nama Sponsor</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>
                        <Tombol
                          variant='warning'
                          borderRadius='6px'
                          border='1px solid #F4B740'
                          backgroundColor='#1A1A1A'
                          color='#F4B740'
                        >
                          Edit
                        </Tombol>
                        {`  |  `}
                        <Tombol
                          variant='warning'
                          borderRadius='6px'
                          border='1px solid #C30052'
                          backgroundColor='#1A1A1A'
                          color='#C30052'
                        >
                          Remove
                        </Tombol>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>
                        <Tombol
                          variant='warning'
                          borderRadius='6px'
                          border='1px solid #F4B740'
                          backgroundColor='#1A1A1A'
                          color='#F4B740'
                        >
                          Edit
                        </Tombol>
                        {`  |  `}
                        <Tombol
                          variant='warning'
                          borderRadius='6px'
                          border='1px solid #C30052'
                          backgroundColor='#1A1A1A'
                          color='#C30052'
                        >
                          Remove
                        </Tombol>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col md={12}>
                <Row>
                  <Col md={6} className='text-center'>
                    <Tombol
                      variant='warning'
                      borderRadius='6px'
                      border='1px solid #F4B740'
                      backgroundColor='#1A1A1A'
                      color='#F4B740'
                      width='100%'
                      onClick={(e) => {
                        e.preventDefault()
                        router.push('/forum')
                      }}
                    >
                      Batal
                    </Tombol>
                  </Col>
                  <Col md={6} className='text-center'>
                    <Tombol
                      variant='warning'
                      borderRadius='6px'
                      border='1px solid #F4B740'
                      backgroundColor='#F4B740'
                      color='#14142B'
                      width='100%'
                    >
                      Simpan
                    </Tombol>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Col>
    </Layout>
  )
}

export default player
