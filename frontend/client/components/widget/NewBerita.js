import { Col, Row } from 'react-bootstrap'

import WidgetCss from '../../styles/widget.module.css'
const NewBerita = () => {
  return (
    <Row className={WidgetCss.newWestTournament}>
      <Col md={12}>
        <h2>Berita Terbaru</h2>
        <Row className={WidgetCss.item}>
          <Col md={6} className={WidgetCss.imageNewTournament}>
            <img src='/images/posts/post-2.png' alt='newest Berita' />
          </Col>
          <Col md={6} className={WidgetCss.detailWidgetTournament}>
            <h4>
              Apex Legends Mobile Resmi Akan di Rilis Tahun 2021, Catat tanggal
              rilisnya!{' '}
            </h4>
            <span>05 Juli 2021</span>
          </Col>
        </Row>
        <Row className={WidgetCss.item}>
          <Col md={6} className={WidgetCss.imageNewTournament}>
            <img src='/images/posts/post-1.png' alt='newest Berita' />
          </Col>
          <Col md={6} className={WidgetCss.detailWidgetTournament}>
            <h4>
              Apex Legends Mobile Resmi Akan di Rilis Tahun 2021, Catat tanggal
              rilisnya!{' '}
            </h4>
            <span>05 Juli 2021</span>
          </Col>
        </Row>
        <Row className={WidgetCss.item}>
          <Col md={6} className={WidgetCss.imageNewTournament}>
            <img src='/images/posts/post-2.png' alt='newest Berita' />
          </Col>
          <Col md={6} className={WidgetCss.detailWidgetTournament}>
            <h4>
              Apex Legends Mobile Resmi Akan di Rilis Tahun 2021, Catat tanggal
              rilisnya!{' '}
            </h4>
            <span>05 Juli 2021</span>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default NewBerita
