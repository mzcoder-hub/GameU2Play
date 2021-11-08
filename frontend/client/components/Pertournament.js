import { Col, Row, Select } from 'react-bootstrap'
import tournamentIndexCss from '../styles/tournamentIndex.module.css'
import { useRouter } from 'next/router'

const Pertournament = ({
  tournament_id,
  featured_images,
  title,
  organizer,
  max_team,
  date,
  prizepool,
}) => {
  const router = useRouter()
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
            <a
              style={{
                textDecoration: 'none',
                color: 'white',
              }}
              onClick={(e) => router.push(`/tournament/${tournament_id}`)}
            >
              <img
                className={tournamentIndexCss.singleImage}
                src={featured_images}
                alt='tournament pertama'
                width='100%'
              />
            </a>
          </Col>
          <Col md={12}>
            <Row className={tournamentIndexCss.singleContent}>
              <Col md={6} className='text-left'>
                <a
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                  }}
                  onClick={(e) => router.push(`/tournament/${tournament_id}`)}
                >
                  {' '}
                  {title}{' '}
                </a>
              </Col>

              <Col md={6} className='text-right'>
                Prizepool
              </Col>
              <Col md={6} className='text-left'>
                {organizer}
              </Col>
              <Col md={6} className='text-right'>
                {prizepool}
              </Col>
              <Col md={6} className='text-left'>
                {date}
              </Col>
              <Col md={6} className='text-right'>
                {max_team}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Pertournament
