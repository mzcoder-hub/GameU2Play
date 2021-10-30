import { Col, Row } from 'react-bootstrap'
import TagPostStyle from '../../../components/discoveryComponent/TagPostStyle'
import Layout from '../../../components/Layout'
import Meta from '../../../components/Meta'
import NewBerita from '../../../components/widget/NewBerita'
import NewestTournament from '../../../components/widget/NewestTournament'

const index = () => {
  const data = ['1', '2', '3', '4', '5']
  return (
    <Layout>
      <Meta />
      <Col
        md={12}
        style={{ background: '#0C0C0C', padding: 50, color: '#FFFFFF' }}
      >
        <Row>
          <Col md={8}>
            <Row>
              <Col md={12} className='text-center'>
                <img
                  src='/images/728x90.svg'
                  alt='ads 728x90'
                  height='90'
                  width='728'
                />
              </Col>
            </Row>
            {data.map((value) => (
              <div>
                <TagPostStyle />
              </div>
            ))}
          </Col>
          <Col md={4}>
            <div>
              <NewestTournament />
              <NewBerita />
            </div>
          </Col>
        </Row>
      </Col>
    </Layout>
  )
}

export default index
