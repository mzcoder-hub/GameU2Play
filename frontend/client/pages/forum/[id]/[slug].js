import { useRouter } from 'next/router'
import { Col, Row } from 'react-bootstrap'
import CommentFormForum from '../../../components/forumComponent/CommentFormForum'
import CommentThreadItem from '../../../components/forumComponent/CommentThreadItem'
import ThreadDetailComponent from '../../../components/forumComponent/ThreadDetailComponent'
import WidgetForum from '../../../components/forumComponent/WidgetForum'
import Layout from '../../../components/Layout'
import Meta from '../../../components/Meta'

const slug = () => {
  const router = useRouter()
  const { slug, id } = router.query
  const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

  return (
    <Layout>
      <Meta />
      <Col
        md={12}
        style={{ background: '#0C0C0C', padding: 50, color: '#FFFFFF' }}
      >
        <Row>
          <Col md={8}>
            <ThreadDetailComponent threadId='' />
            {data.map((value) => (
              <CommentThreadItem
                comment={{
                  id: '2',
                  comment: 'this is comment',
                  uid: '0000001',
                }}
                threadId='1'
              />
            ))}
            <CommentFormForum />
          </Col>
          <Col md={4}>
            <div style={{ background: '#1A1A1A' }}>
              <WidgetForum />
            </div>
          </Col>
        </Row>
      </Col>
    </Layout>
  )
}

export default slug
