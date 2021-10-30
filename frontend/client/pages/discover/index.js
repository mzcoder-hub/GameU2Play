import { Col, Row } from 'react-bootstrap'
import ThePostStyle from '../../components/discoveryComponent/ThePostStyle'
import Layout from '../../components/Layout'
import Meta from '../../components/Meta'

const index = () => {
  return (
    <Layout>
      <Meta />
      <Col
        md={12}
        style={{
          background: '#0C0C0C',
          padding: 35,
          color: '#FFFFFF',
        }}
      >
        <ThePostStyle headerTagLine='Berita Terbaru' />
      </Col>
      <Col
        md={12}
        style={{
          background: '#0C0C0C',
          padding: 35,
          color: '#FFFFFF',
          marginTop: -40,
        }}
      >
        <ThePostStyle headerTagLine='Mobile Game' />
      </Col>
      <Col
        md={12}
        style={{
          background: '#0C0C0C',
          padding: 35,
          color: '#FFFFFF',
          marginTop: -40,
        }}
      >
        <ThePostStyle headerTagLine='PC Game' />
      </Col>
      <Col
        md={12}
        style={{
          background: '#0C0C0C',
          padding: 35,
          color: '#FFFFFF',
          marginTop: -40,
        }}
      >
        <ThePostStyle headerTagLine='Console Game' />
      </Col>
    </Layout>
  )
}

export default index
