import { Col, Row } from 'react-bootstrap'

import discoveryCss from '../../styles/discovery.module.css'

import { useRouter } from 'next/router'

const ThePostStyle = ({
  headerTagLine = undefined,
  icon = undefined,
  color = undefined,
}) => {
  const router = useRouter()
  return (
    <Col xl={12}>
      <Row>
        <Col md={12} className={discoveryCss.firstPageDiscoverySection}>
          <Row style={{ margin: 25 }}>
            <Col md={12}>
              <h3 className={discoveryCss.firstPageDiscoverySectionHeadText}>
                {headerTagLine}
              </h3>
            </Col>
            <Col md={12} className={discoveryCss.firstPageDiscoverySectionPost}>
              <Row>
                <Col md={4} style={{ padding: 0 }}>
                  <div
                    style={{
                      background: `url('/images/sample/post1.png') no-repeat`,
                      backgroundSize: '100%',
                      height: 500,
                    }}
                  >
                    <div
                      className={discoveryCss.firstPageDiscoverySectionPostDesc}
                    >
                      <a onClick={() => router.push('/asdasd')}>
                        <h2>WePlay Animajor PSG.LGD Keluar Sebagai Juara</h2>
                      </a>
                      <p>
                        Gelaran WePlay Animajor telah selesai diselenggarakan.
                        Tim Dota 2 asal China yang bekerja sama dengan tim sepak
                        bola Paris Saint Germain ini berhasil keluarh sebagai
                        juara setelah mengalahkan tim asal Amerika ...
                      </p>
                      <span>Read More ....</span>
                    </div>
                  </div>
                </Col>
                <Col md={4} style={{ padding: 0 }}>
                  <Row>
                    <Col md={12}>
                      <div
                        style={{
                          background: `url('/images/sample/post2.png') no-repeat`,
                          backgroundSize: '100%',
                          height: 250,
                        }}
                      >
                        <div
                          className={
                            discoveryCss.firstPageDiscoverySectionPostDesc
                          }
                        >
                          <a onClick={() => router.push('/asdasd')}>
                            <h2>Microboy Pindah ke EVOS!</h2>
                          </a>
                          <span>Read More ....</span>
                        </div>
                      </div>
                    </Col>
                    <Col md={12}>
                      <div
                        style={{
                          background: `url('/images/sample/post3.png') no-repeat`,
                          backgroundSize: '100%',
                          height: 250,
                        }}
                      >
                        <div
                          className={
                            discoveryCss.firstPageDiscoverySectionPostDesc
                          }
                        >
                          <a onClick={() => router.push('/asdasd')}>
                            <h2>
                              Valorant Master Stage 3 Pilih Berlin Sebagai
                              Lokasi
                            </h2>
                          </a>
                          <span>Read More ....</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={4} style={{ padding: 0 }}>
                  <div
                    style={{
                      background: `url('/images/sample/post4.png') no-repeat`,
                      backgroundSize: '100%',
                      height: 500,
                    }}
                  >
                    <div
                      className={discoveryCss.firstPageDiscoverySectionPostDesc}
                    >
                      <a onClick={() => router.push('/asdasd')}>
                        <h2>
                          Whitemon dan Xepher Jadi Pemain Indonesia Pertama di
                          The International{' '}
                        </h2>
                      </a>
                      <p>
                        Kenny “Xepher” Deo dan Matthew “Whitemon” Filemon
                        menjadi pemain Indonesia pertama yang akan berlaga di
                        event terbesar Valve yaitu Dota2 The International 10.
                        Kedua pemain ini merupakan pemain dari T1 ...
                      </p>
                      <span>Read More ....</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

ThePostStyle.defaultProps = {
  headerTagLine: '',
  icon: '',
  color: '',
}
export default ThePostStyle
