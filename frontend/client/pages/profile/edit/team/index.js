import { Col, Form, Row } from 'react-bootstrap'
import Layout from '../../../../components/Layout'
import Meta from '../../../../components/Meta'
import Tombol from '../../../../components/Tombol'

import forumHomecss from '../../../../styles/forumHome.module.css'

const index = () => {
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
                <h1 className={forumHomecss.defaultH1}>Edit Team Profile</h1>
              </Col>
              <Col md={12} style={{ marginTop: 10 }}>
                <Form>
                  <Form.Group controlId='formFile' className='mb-3'>
                    <Form.Label>Logo</Form.Label>
                    <br />
                    <img
                      src='/images/sample/avatar.svg'
                      alt='default Avatar'
                      height='150'
                      width='150'
                    />
                    <Form.Control type='file' />
                  </Form.Group>

                  <Form.Group className='mb-3' controlId='formBasicTitle'>
                    <Form.Label>Nama Team</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Masukan Nama Team disini'
                    />
                  </Form.Group>

                  <Form.Group className='mb-3' controlId='formBasicTitle'>
                    <Form.Label>Kode Tim</Form.Label>
                    <Form.Control type='text' placeholder='ex : U2P' />
                  </Form.Group>

                  <Form.Group className='mb-3' controlId='formBasicContent'>
                    <Form.Label>Deskripsi</Form.Label>
                    <Form.Control as='textarea' rows={10} />
                  </Form.Group>
                </Form>
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

export default index
