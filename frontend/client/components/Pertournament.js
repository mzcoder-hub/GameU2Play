import { Col, Row } from 'react-bootstrap'
import tournamentIndexCss from '../styles/tournamentIndex.module.css'
import { useRouter } from 'next/router'
import jsCookies from "js-cookie";

const userLogin = jsCookies.get("userLogin");
import { formatPrice } from "../helpers/currency";
import dayjs from "dayjs";
const Pertournament = ({
  tournament_id,
  featured_images,
  title,
  organizer,
  max_team,
  date,
  prizepool,
  isLogin = () => { },
}) => {
  const router = useRouter()
  return (
    <>
      <div
        style={{
          background: '#fff',
          // height: 222,
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
              onClick={(e) => {
                if (userLogin) router.push(`/tournament/${tournament_id}`);
                else isLogin(false);
              }}
            >
              <img
                className={tournamentIndexCss.singleImage}
                src={featured_images}
                alt={title}
                style={{ maxHeight: "190px" }}
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
                {formatPrice(prizepool)}
              </Col>
              <Col md={6} className='text-left' style={{ marginTop: 10 }}>
                {dayjs(date).format('DD MMMM YYYY')}
              </Col>
              <Col md={6} className='text-right'>
                Slot : {max_team}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Pertournament
