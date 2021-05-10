import Header from './Header'
import Image from 'next/image'
import homeStyles from '../styles/Home.module.css'
import { Col, Container, Row } from 'react-bootstrap'

const Layout = ({ children, urlBackground }) => {
  return (
    <>
      <Container
        fluid
        className={homeStyles.containerCustomStyle}
        style={
          urlBackground && {
            background: `url(${urlBackground}) no-repeat`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }
        }
      >
        <Header />
        {children}
        {/* <Footer /> */}
      </Container>
    </>
  )
}

export default Layout
