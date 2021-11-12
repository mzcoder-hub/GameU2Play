import axios from 'axios'
import { Col, Row } from 'react-bootstrap'
import ThePostStyle from '../../components/discoveryComponent/ThePostStyle'
import Layout from '../../components/Layout'
import Meta from '../../components/Meta'
import { PostUrl } from '../../helpers/api';
const index = (props) => {
  const { post } = props;
  // console.log("post", post);
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
        <ThePostStyle headerTagLine='No Category' dataPost={post} />
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

export const getServerSideProps = async (ctx) => {
  const { req, res } = ctx
  // const getCookies = JSON.parse(req.cookies.userLogin)
  // // console.log(getCookies.token)

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const getAllPost = await axios.get(PostUrl)

  console.log(getAllPost.data)

  // console.log(getAllTournament.data)
  return {
    props: {
      post: getAllPost.data,
    },
  }
}
