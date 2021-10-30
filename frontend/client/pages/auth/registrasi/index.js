import { Col, Form, Row } from 'react-bootstrap'
import Layout from '../../../components/Layout'
import Meta from '../../../components/Meta'
import Tombol from '../../../components/Tombol'

const register = () => {
  return (
    <Layout>
      <Meta />
      <Col
        md={12}
        style={{ background: '#0C0C0C', padding: 120, color: '#FFFFFF' }}
      >
        <Row style={{ background: '#1A1A1A' }}>
          <Col
            xs
            lg={6}
            style={{
              background: 'url("/images/bglogin1.png")',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              width: '100%',
              height: 580,
            }}
          ></Col>
          <Col xs lg={6}>
            <Row>
              <Col className='text-center' lg={12} style={{ padding: 100 }}>
                <h1>Masuk</h1>
                <Form>
                  <Form.Group className='mb-3' controlId='formBasicTitle'>
                    <Form.Control type='text' placeholder='Username' />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formBasicTitle'>
                    <Form.Control type='password' placeholder='Password' />
                  </Form.Group>
                  <span style={{ float: 'right' }}>Lupa Password?</span>
                </Form>
                <Tombol
                  variant='warning'
                  borderRadius='5px'
                  backgroundColor='#F4B740'
                  marginp='10px'
                  width='100%'
                >
                  Masuk
                </Tombol>
                <span style={{ marginTop: 15 }}>
                  Belum Punya akun? Daftar Disini
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Layout>
  )
}

export default register
