import { Col, Row } from 'react-bootstrap'
import Tombol from '../Tombol'

import forumHomecss from '../../styles/forumHome.module.css'

const LatestThreadList = () => {
  const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  return data.map((value) => (
    <Row key={value}>
      <Col md={1} className={`text-center ${forumHomecss.avatar}`}>
        <img
          src='/images/sample/avatar.svg'
          height='60'
          width='60'
          alt='avatar'
        />
      </Col>
      <Col md={7} className={forumHomecss.content}>
        <h2>Ini nanti adalah Lastest Thread atau Thread Baru</h2>
        <span>VrN · 5 Agustus 2021</span>
      </Col>
      <Col md={4} className={forumHomecss.catnvote}>
        <Row>
          <Col>
            {' '}
            <Tombol
              variant='warning'
              borderRadius='30px'
              color='#F4B740'
              border='none'
              backgroundColor='rgba(244, 183, 64, 0.2)'
              fontWeight='500'
              size='sm'
            >
              Game Category
            </Tombol>
          </Col>
          <Col>
            <span>
              <img
                src='/icons/heart.svg'
                alt='vote here'
                height='24'
                weight='24'
              />{' '}
              221 Votes
            </span>
          </Col>
        </Row>
      </Col>
    </Row>
  ))
}

export default LatestThreadList
