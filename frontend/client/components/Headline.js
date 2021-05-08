import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Headline = ({
  headlineText,
  colorPlace,
  colorText,
  lineType,
  fontSize,
  sizeColLine1,
  sizeColText1,
  sizeColLine2,
  textAlign,
}) => {
  return (
    <Row style={{ alignItems: 'center' }}>
      <Col md={sizeColLine1}>
        <img
          src={`/images/${lineType}.png`}
          alt=''
          style={{ width: '100%', height: '2px' }}
        />
      </Col>
      <Col md={sizeColText1} className={textAlign}>
        <h1 style={{ color: '#fff', fontSize: `${fontSize}` }}>
          {colorPlace === '1' ? (
            <>
              <span style={{ color: colorText }}>{headlineText[0]}</span>{' '}
              {headlineText[1]}
            </>
          ) : (
            <>
              {headlineText[0]}{' '}
              <span style={{ color: colorText }}>{headlineText[1]}</span>
            </>
          )}
        </h1>
      </Col>
      <Col md={sizeColLine2}>
        <img
          src={`/images/${lineType}.png`}
          alt=''
          style={{ width: '100%', height: '2px' }}
        />
      </Col>
    </Row>
  )
}

Headline.defaultProps = {
  headlineText: ['s', 's'],
  colorPlace: '1',
  colorText: 'red',
  lineType: 'redLine',
  fontSize: '35',
  sizeColLine1: '',
  sizeColText1: '',
  sizeColLine2: '',
  textAlign: 'text-center',
}

export default Headline
