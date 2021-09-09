import { Col, Row } from 'react-bootstrap'

import forumHomecss from '../../styles/forumHome.module.css'

const CategoryForum = () => {
  const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
  return (
    <Row>
      <Col>
        <ul className={forumHomecss.gasul}>
          {data.map((val) => (
            <li key={val}>This Game Category Forum</li>
          ))}
        </ul>
      </Col>
    </Row>
  )
}

export default CategoryForum
