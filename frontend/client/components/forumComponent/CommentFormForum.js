import { Col, Form, Row } from 'react-bootstrap'
import Tombol from '../Tombol'

const CommentFormForum = () => {
  return (
    <Row style={{ padding: 15 }}>
      <Col md={1} className='text-center'>
        <img
          src='/images/sample/avatar.svg'
          alt='username'
          width='50'
          height='50'
        />{' '}
      </Col>
      <Col md={11}>
        <Form.Group className='mb-3' controlId='formBasicContent'>
          <Form.Control
            as='textarea'
            rows={5}
            placeholder='Write Yourt Comments'
          />
        </Form.Group>
      </Col>
      <Col md={12} className='text-right'>
        <Tombol
          variant='warning'
          borderRadius='15px'
          color='#14142B'
          border='none'
          backgroundColor='#F4B740'
          fontWeight='500'
          size='md'
        >
          Post
        </Tombol>
      </Col>
    </Row>
  )
}

export default CommentFormForum
