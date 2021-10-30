import { Col, Form, Row } from 'react-bootstrap'
import Layout from '../../../components/Layout'
import Meta from '../../../components/Meta'
import Tombol from '../../../components/Tombol'

import forumHomecss from '../../../styles/forumHome.module.css'

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
                <h1 className={forumHomecss.defaultH1}>Edit Profile</h1>
              </Col>
              <Col md={12} style={{ marginTop: 10 }}>
                <Form>
                  <Form.Group controlId='formFile' className='mb-3'>
                    <Form.Label>Avatar</Form.Label>
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
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Masukan Username disini'
                    />
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group className='mb-3' controlId='formBasicTitle'>
                        <Form.Label>Nama Depan</Form.Label>
                        <Form.Control type='text' placeholder='Nama Depan' />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className='mb-3' controlId='formBasicTitle'>
                        <Form.Label>Nama Belakang</Form.Label>
                        <Form.Control type='text' placeholder='Nama Belakang' />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className='mb-3' controlId='formBasicTitle'>
                    <Form.Label>No Telepon</Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='ex : 082xxxxxxxxx'
                    />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formBasicTitle'>
                    <Form.Label>Alamat Lengkap</Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='Jalan Mawar no 3, Bandung, Jawa Barat'
                    />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formBasicTitle'>
                    <Form.Label>Kata Sandi</Form.Label>
                    <Form.Control
                      type='password'
                      placeholder='Diisi Bila Merubah Password'
                    />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formBasicTitle'>
                    <Form.Label>Konfirmasi Kata Sandi</Form.Label>
                    <Form.Control
                      type='password'
                      placeholder='Diisi Bila Merubah Password'
                    />
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
