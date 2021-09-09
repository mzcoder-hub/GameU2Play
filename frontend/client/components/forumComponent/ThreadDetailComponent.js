import { Col, Row } from 'react-bootstrap'
import forumSinglecss from '../../styles/forumSingle.module.css'

const ThreadDetailComponent = ({ threadId }) => {
  return (
    <div style={{ background: '#1A1A1A', borderRadius: 10 }}>
      <Row>
        <Col md={12}>
          <div className={forumSinglecss.threadDetail}>
            <div className={forumSinglecss.Header}>
              <h1>Game FPS PC Terbaik menurut gw </h1>
              <img
                src='/images/sample/avatar.svg'
                alt='username'
                width='30'
                height='30'
              />{' '}
              <span style={{ fontWeight: '500' }}>UserName</span>
            </div>
            <article className={forumSinglecss.articleBody}>
              <p>
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laboruma Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque
              </p>
              <img src='/images/bghead.jpg' alt='Comunity Images' />
              <p>
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laboruma Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque
              </p>
            </article>
          </div>
        </Col>
      </Row>
    </div>
  )
}

ThreadDetailComponent.defaultProps = {
  threadId: '',
}

export default ThreadDetailComponent
