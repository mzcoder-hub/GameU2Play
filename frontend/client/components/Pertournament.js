import { Col, Row, Select } from 'react-bootstrap'
import tournamentIndexCss from '../styles/tournamentIndex.module.css'

const Pertournament = ({
  featured_images,
  title,
  organizer,
  max_team,
  date,
  prizepool,
}) => {
  return (
    <>
      <div
        style={{
          background: '#fff',
          height: 222,
          marginTop: 50,
          borderRadius: 15,
        }}
        className={tournamentIndexCss.single}
      >
        <Row>
          <Col md={12}>
            <img
              className={tournamentIndexCss.singleImage}
              src='/images/sample/tourneysingle.svg'
              alt='tournament pertama'
              width='100%'
            />
          </Col>
          <Col md={12}>
            <Row className={tournamentIndexCss.singleContent}>
              <Col md={6} className='text-left'>
                Title
              </Col>
              <Col md={6} className='text-right'>
                Prizepool
              </Col>
              <Col md={6} className='text-left'>
                Organizer
              </Col>
              <Col md={6} className='text-right'>
                Rp. 15.000.000
              </Col>
              <Col md={6} className='text-left'>
                date
              </Col>
              <Col md={6} className='text-right'>
                max_team
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  )
}

Pertournament.defaultProps = {
  featured_images: '',
  title: '',
  organizer: '',
  max_team: '',
  date: '',
  prizepool: '',
}

export default Pertournament
