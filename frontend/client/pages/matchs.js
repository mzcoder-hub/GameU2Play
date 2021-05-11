import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Headline from '../components/Headline'
import Layout from '../components/Layout'
import Meta from '../components/Meta'
import Tombol from '../components/Tombol'

const matchs = () => {
  return (
    <Layout urlBackground='/images/component/matches.jpg'>
      <Meta
        title='Tournaments - GameU2Play'
        keywords='Discover New Tournaments Gaming, Discover Tournaments Gaming News, Discover Tournaments Gaming Update'
        description='Discover New Tournaments Gaming, Discover Tournaments Gaming News, Discover Tournaments Gaming Update'
      />
      <Row style={{ background: '#48423a63' }}>
        <Col md={12}>
          <Headline
            headlineText={['', 'MATCHES']}
            colorPlace='1'
            colorText='red'
            lineType='redLine'
            fontSize='75px'
            lineHeight='6px'
            sizeColLine1='4'
            sizeColText1='4'
            sizeColLine2='4'
          />
        </Col>
        <Col md={12}>
          <Row style={{ padding: 70 }}>
            <Col md={12}>
              <span style={{ marginRight: 10 }}>
                <Tombol // variant='warning'
                  fontWeight='bold'
                  size='sm'
                  borderRadius='0.0rem'
                  width='auto'
                  backgroundColor='#c2b503'
                  color='#fff'
                  borderColor='#c2b503'
                >
                  All
                </Tombol>
              </span>
              <span style={{ marginRight: 10 }}>
                <Tombol // variant='warning'
                  fontWeight='bold'
                  size='sm'
                  borderRadius='0.0rem'
                  width='auto'
                  color='#fff'
                  backgroundColor='#000000'
                  borderColor='#000000'
                >
                  CS:GO
                </Tombol>
              </span>
              <span style={{ marginRight: 10 }}>
                <Tombol // variant='warning'
                  fontWeight='bold'
                  size='sm'
                  borderRadius='0.0rem'
                  width='auto'
                  color='#fff'
                  backgroundColor='#000000'
                  borderColor='#000000'
                >
                  DotA 2
                </Tombol>
              </span>
              <span style={{ marginRight: 10 }}>
                <Tombol // variant='warning'
                  fontWeight='bold'
                  size='sm'
                  borderRadius='0.0rem'
                  width='auto'
                  color='#fff'
                  backgroundColor='#000000'
                  borderColor='#000000'
                >
                  CSGO
                </Tombol>
              </span>
              <span style={{ marginRight: 10 }}>
                <Tombol // variant='warning'
                  fontWeight='bold'
                  size='sm'
                  borderRadius='0.0rem'
                  width='auto'
                  color='#fff'
                  backgroundColor='#000000'
                  borderColor='#000000'
                >
                  R6S
                </Tombol>
              </span>
              <span style={{ marginRight: 10 }}>
                <Tombol // variant='warning'
                  fontWeight='bold'
                  size='sm'
                  borderRadius='0.0rem'
                  width='auto'
                  color='#fff'
                  backgroundColor='#000000'
                  borderColor='#000000'
                >
                  LOL
                </Tombol>
              </span>
            </Col>
            <Col md={12}>
              <Row style={{ color: '#fff' }}>
                <Col md={12}>
                  <Row style={{ background: '#293141c2' }}>
                    <Col md={4}>
                      <Row>
                        <Col md={4}>Logo</Col>
                        <Col md={4}>Name</Col>
                        <Col md={4}>Score</Col>
                      </Row>
                    </Col>
                    <Col md={4} className='text-center'>
                      <Row>
                        <Col md={12}>TOURNAMENT NAME</Col>
                        <Col md={12}>STATUS</Col>
                        <Col md={12}>DATE</Col>
                      </Row>
                    </Col>
                    <Col md={4}>
                      <Row>
                        <Col md={4}>Score</Col>
                        <Col md={4}>Name</Col>
                        <Col md={4}>Logo</Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row style={{ background: '#000000c2' }}>
                    <Col md={4}>
                      <Row>
                        <Col md={4}>Logo</Col>
                        <Col md={4}>Name</Col>
                        <Col md={4}>Score</Col>
                      </Row>
                    </Col>
                    <Col md={4} className='text-center'>
                      <Row>
                        <Col md={12}>TOURNAMENT NAME</Col>
                        <Col md={12}>STATUS</Col>
                        <Col md={12}>DATE</Col>
                      </Row>
                    </Col>
                    <Col md={4}>
                      <Row>
                        <Col md={4}>Score</Col>
                        <Col md={4}>Name</Col>
                        <Col md={4}>Logo</Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  )
}

export default matchs
