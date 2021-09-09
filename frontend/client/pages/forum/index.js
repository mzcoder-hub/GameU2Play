import { Col, Row } from 'react-bootstrap'

import CategoryForum from '../../components/forumComponent/CategoryForum'
import LatestThreadList from '../../components/forumComponent/LastestThreadList'
import ThreadListTrending from '../../components/forumComponent/ThreadListTrending'
import Layout from '../../components/Layout'
import Meta from '../../components/Meta'
import Tombol from '../../components/Tombol'
import forumHomecss from '../../styles/forumHome.module.css'
import { useRouter } from 'next/router'

const index = () => {
  const router = useRouter()
  return (
    <Layout>
      <Meta />
      <Col
        md={12}
        style={{ background: '#0C0C0C', padding: 35, color: '#FFFFFF' }}
      >
        <Row>
          <Col md={3}>
            <div className={`defaultFont ${forumHomecss.default}`}>
              <h2>Kategori Forum</h2>
              <CategoryForum />
            </div>
          </Col>
          <Col md={9}>
            <div className={`defaultFont ${forumHomecss.default}`}>
              <Row>
                <Col>
                  <h2>Trending</h2>
                </Col>
                <Col className='text-right'>
                  <Tombol
                    variant='warning'
                    borderRadius='6px'
                    color='#14142B'
                    onClick={(e) => {
                      e.preventDefault()
                      router.push('/forum/createThread')
                    }}
                  >
                    Buat Post
                  </Tombol>
                </Col>
                <Col md={12} style={{ margin: 10, marginTop: 15 }}>
                  <ThreadListTrending />
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2>Diskusi Terbaru</h2>
                </Col>
                <Col md={12} style={{ margin: 10, marginTop: 15 }}>
                  <LatestThreadList />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Col>
    </Layout>
  )
}

export default index
