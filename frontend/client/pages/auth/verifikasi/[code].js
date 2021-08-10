import { useRouter } from 'next/router'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Form, InputGroup, Modal } from 'react-bootstrap'
import componentCss from '../../../styles/component.module.css'
import { createUseStyles } from 'react-jss'
import Tombol from '../../../components/Tombol'

const code = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState('password')
  const [showLogin, setShowLogin] = useState(false)
  const [LoginFormEmail, setLoginFormEmail] = useState('')
  const [LoginFormPassword, setLoginFormPassword] = useState('')

  const handleCloseLogin = () => setShowLogin(false)
  const handleShowLogin = () => setShowLogin(true)

  const { code } = router.query

  const proccedVerification = async (email, code, token) => {
    // console.log(email)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/verification/${code}`,
      { email: email },
      config
    )
  }

  useEffect(() => {
    const getUserLogin = JSON.parse(localStorage.getItem('userLogin'))
    if (!getUserLogin) {
      handleShowLogin()
    } else {
      handleCloseLogin()
      if (getUserLogin.email && code !== undefined) {
        proccedVerification(
          getUserLogin.email,
          router.query.code,
          getUserLogin.token
        )
      }
    }
  }, [router])

  const loginHandler = async (e) => {
    e.preventDefault()

    const login = {
      email: LoginFormEmail,
      password: LoginFormPassword,
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/login`,
      login,
      config
    )

    if (data.status === 'non') {
      router.push(`/auth/verifikasi/${code}`)
      localStorage.setItem('userLogin', JSON.stringify(data))
    } else {
      router.push(`/`)
      localStorage.setItem('userLogin', JSON.stringify(data))
    }
  }

  const useStyles = createUseStyles({
    buttonCloseModal: {
      justifyContent: 'center',
      borderBottom: 'none',
      '& .close': {
        color: '#ffff',
        position: 'absolute',
        right: 20,
      },
    },
    modaTitleCustom: {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '18px',
      lineHeight: '25px',
      letterSpacing: '-0.015em',
      color: '#F4B740',
    },
    modalFooter: {
      borderTop: 'none',
    },
  })

  const classes = useStyles()

  return (
    <Modal
      show={showLogin}
      onHide={handleCloseLogin}
      className={`${componentCss.modalForm}`}
    >
      <Modal.Header
        closeButton
        className={`${classes.buttonCloseModal} text-center`}
      >
        <Modal.Title className={`${classes.modaTitleCustom}`}>
          Masuk
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Control
              type='email'
              placeholder='Email'
              onChange={(e) => setLoginFormEmail(e.target.value)}
            />
          </Form.Group>

          <InputGroup className='mb-3'>
            <Form.Control
              type={showPassword}
              placeholder='Kata Sandi'
              aria-describedby='basic-addon2'
              onChange={(e) => setLoginFormPassword(e.target.value)}
            />
            <InputGroup.Text
              id='basic-addon2'
              style={{ background: '#000', border: 'none' }}
              onClick={(e) => {
                e.preventDefault()
                {
                  showPassword == 'password'
                    ? setShowPassword('text')
                    : setShowPassword('password')
                }
              }}
            >
              <img src='/icons/showPw.svg' alt='Show Password' />
            </InputGroup.Text>
          </InputGroup>
          <Form.Text className='text-center'>
            Lupa Password ? | Belum Punya Akun ? Daftar Disini
          </Form.Text>
        </Form>
      </Modal.Body>
      <Modal.Footer className={`${classes.modalFooter}`}>
        <Tombol
          variant='warning'
          type='submit'
          width='100%'
          onClick={loginHandler}
        >
          Login
        </Tombol>
      </Modal.Footer>
    </Modal>
  )
}

export default code
