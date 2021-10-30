import { Col, Row } from 'react-bootstrap'
import discoveryCss from '../../styles/discovery.module.css'

const TagPostStyle = ({ posts = undefined }) => {
  return (
    <Row>
      <Col md={6}>
        <img
          src='/images/sample/post2.png'
          alt='posttitle'
          width='443px'
          height='200px'
        />
      </Col>
      <Col md={6}>
        <Row>
          <Col md={12} className={discoveryCss.postInfo}>
            <h1>
              Apex Legends Mobile Resmi Akan di Rilis Tahun 2021, Catat tanggal
              rilisnya!{' '}
            </h1>
            <span>
              <a href='/'>Julian</a>. 24 Juni, 2021
            </span>
            {/* 220 character */}
            <p>
              EA dan Respawn semakin gencar mengetes game shooter terbaru mereka
              untuk smartphone, Apex Legends Mobile. Setelah dites di dua negara
              Asia, mereka akhirnya membuka akses Apex Legends Mobile di
              Indonesia! Lewat sebuah ...
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

TagPostStyle.defaultProps = {
  posts: '',
}

export default TagPostStyle
