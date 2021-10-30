import { Col, Row } from 'react-bootstrap'
import Tombol from '../components/Tombol'

const RelatedContent = () => {
  const data = ['1', '2', '3', '4']
  return (
    <Row>
      {data.map((value) => (
        <Col md={3}>
          <div className='imageHead'>
            <img
              src='/images/sample/post1.png'
              width='197'
              height='159'
              alt='titlepage'
            />
            <span>
              <Tombol
                variant='warning'
                borderRadius='0px'
                backgroundColor='#F4B740'
                fontWeight='bold'
                color='#14142B'
              >
                Dota 2
              </Tombol>
            </span>
          </div>
          <div className='titlePost'>Microboy Pindah ke EVOS!</div>
        </Col>
      ))}
    </Row>
  )
}

export default RelatedContent
