import { useEffect, useState } from 'react'

import { GetServerSideProps } from 'next'
import Cookies from 'js-cookie'

import Layout from '../../components/Layout'
import { Col, Row, Select } from 'react-bootstrap'
import Meta from '../../components/Meta'

import tournamentIndexCss from '../../styles/tournamentIndex.module.css'
import Tombol from '../../components/Tombol'
import Pertournament from '../../components/Pertournament'
import axios from 'axios'

const index = ({ tournament }) => {
  const [key, setKey] = useState('detail')
  const [query, setQuery] = useState('datang')

  // console.log(tournament)
  const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
  return (
    <Layout>
      <Meta />
      <Col md={12} style={{ background: '#0C0C0C' }}>
        <Row style={{ padding: 20 }}>
          <Col md={12} style={{ background: '#1A1A1A', padding: 30 }}>
            <Row>
              <Col md={12}>
                <h1 className={tournamentIndexCss.headingTop}>Tournament</h1>
              </Col>
              <Col md={12}>
                <div className={tournamentIndexCss.bannerTournament}>
                  <img
                    src='/images/sample/bannerTournament.svg'
                    alt='this is banner Tournament'
                    width='100%'
                  />
                </div>
              </Col>
              <Col md={12} style={{ marginTop: 30 }}>
                <Row className={tournamentIndexCss.tabsTop}>
                  <Col
                    md={2}
                    className='text-center'
                    style={{ marginRight: -25 }}
                  >
                    <Tombol
                      color='#fff'
                      onClick={(e) => {
                        setQuery('datang')
                      }}
                      width='100%'
                      className={query === 'datang' ? 'active' : 'non'}
                      backgroundColor='#1A1A1A'
                      border='0px'
                    >
                      Mendatang
                    </Tombol>
                  </Col>
                  <Col
                    md={2}
                    className='text-center'
                    style={{ marginRight: -25 }}
                  >
                    <Tombol
                      color='#fff'
                      onClick={(e) => {
                        setQuery('mulai')
                      }}
                      width='100%'
                      className={query === 'mulai' ? 'active' : 'non'}
                      backgroundColor='#1A1A1A'
                      border='0px'
                    >
                      Dimulai
                    </Tombol>
                  </Col>
                  <Col
                    md={2}
                    className='text-center'
                    style={{ marginRight: -25 }}
                  >
                    <Tombol
                      color='#fff'
                      onClick={(e) => {
                        setQuery('selesai')
                      }}
                      width='100%'
                      className={query === 'selesai' ? 'active' : 'non'}
                      backgroundColor='#1A1A1A'
                      border='0px'
                    >
                      Selesai
                    </Tombol>
                  </Col>

                  <Col
                    md={2}
                    className='text-center'
                    style={{ marginLeft: -25 }}
                  ></Col>
                  <Col
                    md={2}
                    className='text-center'
                    style={{ marginLeft: -25 }}
                  ></Col>
                  <Col
                    md={2}
                    className='text-center'
                    style={{ marginLeft: -25 }}
                  ></Col>
                </Row>
              </Col>
              <Col md={12}>
                <Row>
                  {tournament.map((val) => (
                    <Col md={4} key={val.tournament_id}>
                      <Pertournament
                        featured_images={val.featured_image}
                        title={val.title}
                        organizer={val.organizer}
                        max_team={val.max_team}
                        date={val.start}
                        prizepool={val.prizepool}
                      />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Layout>
  )
}

export default index

export const getServerSideProps = async (ctx) => {
  const { req, res } = ctx

  const getCookies = JSON.parse(req.cookies.userLogin)
  // console.log(getCookies.token)

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookies.token}`,
    },
  }

  const getAllTournament = await axios.get(
    'http://localhost:3002/api/v1/tournament/details',
    config
  )

  // console.log(getAllTournament.data)
  return {
    props: {
      tournament: getAllTournament.data,
    },
  }
}
