import { Col, Container, Row } from 'react-bootstrap'
import TagPostStyle from '../components/discoveryComponent/TagPostStyle'
import Layout from '../components/Layout'
import Meta from '../components/Meta'
import NewBerita from '../components/widget/NewBerita'
import Tombol from '../components/Tombol'

import NewestTournament from '../components/widget/NewestTournament'

import discoveryCss from '../styles/discovery.module.css'
import ShareButton from '../components/ShareButton'
import RelatedContent from '../components/RelatedContent'
import CommentFormForum from '../components/forumComponent/CommentFormForum'

const slugpost = () => {
  const data = ['1', '2', '3', '4', '5']
  return (
    <Layout>
      <Meta />
      <Col md={12} style={{ height: 540, backgroundColor: '#000000' }}>
        <div className={discoveryCss.entryHeader}>
          <Container>
            <h1 className={discoveryCss.postTitle}>
              Whitemon dan Xepher Jadi Pemain Indonesia Pertama di The
              International{' '}
            </h1>
            <span>
              <img src='/images/sample/avatar.svg' alt='autor' /> by{' '}
              <span style={{ fontWeight: 'bold' }}>Julian</span> - June 24, 2021{' '}
              <Tombol
                variant='warning'
                borderRadius='0px'
                backgroundColor='#F4B740'
                fontWeight='bold'
                color='#14142B'
                onClick={(e) => {
                  e.preventDefault()
                  router.push('/forum')
                }}
              >
                Dota 2
              </Tombol>
            </span>
          </Container>
        </div>
      </Col>
      <Col
        md={12}
        style={{ background: '#0C0C0C', padding: 50, color: '#FFFFFF' }}
      >
        <Row>
          <Col md={8}>
            <Row>
              <Col md={12} className='text-center'>
                <img
                  src='/images/728x90.svg'
                  alt='ads 728x90'
                  height='90'
                  width='728'
                />
              </Col>
            </Row>
            <Container>
              <div className={discoveryCss.entryContent}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laboruma Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est, qui dolorem ipsum quia dolor sit amet,
                  consectetur, adipisci velit, sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laboruma Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laboruma Sed ut perspiciatis unde omnis iste natus error
                  sit voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                  quia dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem quia non numquam eius modi tempora
                  incidunt ut labore et dolore magnam aliquam quaerat voluptatem
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laboruma Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est, qui dolorem ipsum quia dolor sit amet,
                  consectetur, adipisci velit, sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laboruma Sed ut perspiciatis unde omnis iste natus error
                  sit voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                  quia dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem
                </p>
                <div className={discoveryCss.kategoryList}>
                  Kategori: <a href=''>Dota 2</a>,{' '}
                  <a href=''>The International</a>, <a href=''>T1 Esports</a>
                </div>
                <div className={discoveryCss.shareButton}>
                  Bagikan : <ShareButton />
                </div>
              </div>
              <div
                className={discoveryCss.RelatedContent}
                style={{ margin: 10, padding: 10 }}
              >
                <RelatedContent />
              </div>
              <div
                className={discoveryCss.commentSection}
                style={{ borderTop: '1px solid #d9dbe9' }}
              >
                <CommentFormForum />
              </div>
            </Container>
          </Col>
          <Col md={4}>
            <div>
              <NewestTournament />
              <NewBerita />
            </div>
          </Col>
        </Row>
      </Col>
    </Layout>
  )
}

export default slugpost
