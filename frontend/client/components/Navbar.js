import { useState } from 'react'
import {
  Alert,
  Col,
  Form,
  InputGroup,
  Modal,
  Nav,
  Navbar,
  Toast,
} from 'react-bootstrap'
import { createUseStyles } from 'react-jss'
import { useRouter } from 'next/router'
import validator from 'validator'
import axios from 'axios'
import Navigation from './Navigation'
import Tombol from './Tombol'
import Image from 'next/image'

import componentCss from '../styles/component.module.css'

const Header = () => {
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

  const router = useRouter()

  const [showRegister, setShowRegister] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showPassword, setShowPassword] = useState('password')
  const [showPasswordConfirm, setShowPasswordConfirm] = useState('password')
  const [toastProps, setToastProps] = useState({
    showToast: false,
    toastMessage: '',
    toastStatus: 'info',
  })
  const [formError, setFormError] = useState({
    show: false,
    errorMessage: '',
  })

  const [NamaDepan, setFormNamaDepan] = useState('')
  const [NamaBelakang, setFormNamaBelakang] = useState('')
  const [Email, setFormEmail] = useState('')
  const [FormNoTlp, setFormNoTlp] = useState('')
  const [Password, setFormPassword] = useState('')
  const [PasswordConfirm, setFormPasswordConfirm] = useState('')
  const [Checked, setChecked] = useState(false)

  const [LoginFormEmail, setLoginFormEmail] = useState('')
  const [LoginFormPassword, setLoginFormPassword] = useState('')

  const handleCloseRegister = () => setShowRegister(false)
  const handleShowRegister = () => setShowRegister(true)

  const handleCloseLogin = () => setShowLogin(false)
  const handleShowLogin = () => setShowLogin(true)

  const registerHandler = async (e) => {
    e.preventDefault()

    if (NamaDepan === '') {
      setFormError({ show: true, errorMessage: 'Nama Depan Wajib Diisi' })
    } else if (NamaBelakang === '') {
      setFormError({ show: true, errorMessage: 'Nama Belakang Wajib Diisi' })
    } else if (Email === '') {
      setFormError({ show: true, errorMessage: 'Email Wajib Diisi' })
    } else if (FormNoTlp === '') {
      setFormError({ show: true, errorMessage: 'No HP Wajib Diisi' })
    } else if (Password === '') {
      setFormError({ show: true, errorMessage: 'Pasword Wajib Diisi' })
    } else if (Password !== PasswordConfirm) {
      setFormError({ show: true, errorMessage: 'Pasword Tidak Sama' })
    } else if (Checked !== true) {
      setFormError({
        show: true,
        errorMessage: 'Setujui dulu Persyaratan dan Ketentuanya',
      })
    } else {
      if (validator.isEmail(Email)) {
        const registerUser = {
          first_name: NamaDepan,
          last_name: NamaBelakang,
          email: Email,
          phone_number: FormNoTlp,
          password: Password,
        }

        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }

        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users`,
          registerUser,
          config
        )

        if (data.status === 'success') {
          setToastProps({
            showToast: true,
            toastMessage: data.message,
            toastStatus: data.status,
          })

          setShowRegister(false)
        } else {
          setToastProps({
            showToast: true,
            toastMessage: data.message,
            toastStatus: data.status,
          })

          setShowRegister(false)
        }
      } else {
        setFormError({
          show: true,
          errorMessage:
            'Email Tidak Valid Silahkan Masukan Email Dengan Benar !!!',
        })
      }
    }
  }

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
      router.push('/auth/verifikasi/')
      localStorage.setItem('userLogin', JSON.stringify(data))
    } else {
      localStorage.setItem('userLogin', JSON.stringify(data))
    }
  }

  const classes = useStyles()

  return (
    <Col xl={12} style={{ padding: 0 }}>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'
        style={{ backgroundColor: '#1A1A1A !important' }}
      >
        <Navbar.Brand href='#' onClick={() => router.push('/')}>
          <Image src='/webgame.png' alt='logo' height='50' width='199' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Navigation />
          <Nav className='mr-auto'></Nav>
          <Nav
            style={{
              alignItems: 'center',
            }}
          >
            <Nav.Link onClick={handleShowLogin}>
              <Tombol
                variant='warning'
                borderRadius='6px'
                border='1px solid #F4B740'
                backgroundColor='#14142B'
                color='#F4B740'
              >
                Login
              </Tombol>
            </Nav.Link>
            <Nav.Link onClick={handleShowRegister}>
              <Tombol
                variant='warning'
                borderRadius='6px'
                backgroundColor='#F4B740'
              >
                Register
              </Tombol>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Toast
        className={`d-inline-block m-1 bg-${toastProps.toastStatus}`}
        show={toastProps.showToast}
        onClose={() => setToastProps({ showToast: false })}
        // delay={3000}
        // autohide
        style={{
          display: 'block',
          position: 'absolute',
          zIndex: 30,
          top: '5.5rem',
          right: '1rem',
          left: '75rem',
          fontWeight: 'bold',
          fontFamily: 'Open Sans',
          fontSize: '15px',
        }}
      >
        <Toast.Header>
          {/* <img src='/icons/showPw.svg' className='rounded me-2' alt='' /> */}
          <strong className='me-auto'>Notifikasi</strong>
        </Toast.Header>
        <Toast.Body>{toastProps.toastMessage}</Toast.Body>
      </Toast>

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

      <Modal
        show={showRegister}
        onHide={handleCloseRegister}
        className={`${componentCss.modalForm}`}
      >
        <Modal.Header
          closeButton
          className={`${classes.buttonCloseModal} text-center`}
        >
          <Modal.Title className={`${classes.modaTitleCustom}`}>
            Daftar
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={registerHandler}>
          <Modal.Body>
            <Form.Group className='mb-3'>
              <Form.Control
                type='text'
                placeholder='Nama Depan'
                onChange={(e) => setFormNamaDepan(e.target.value)}
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Control
                type='text'
                placeholder='Nama Belakang'
                onChange={(e) => setFormNamaBelakang(e.target.value)}
              />
            </Form.Group>
            {/* 
            <Form.Group className='mb-3'>
              <Form.Control
                type='text'
                placeholder='Username'
                onChange={(e) => setFormUsername(e.target.value)}
              />
            </Form.Group> */}
            <Form.Group className='mb-3'>
              <Form.Control
                type='email'
                placeholder='Email'
                onChange={(e) => setFormEmail(e.target.value)}
              />
              <Form.Text className='text-muted'>
                Kami tidak pernah membagikan email anda dengan pihak lain!!
              </Form.Text>
            </Form.Group>
            <Form.Group className={`mb-3`}>
              <Form.Control
                type='number'
                className={`${componentCss.noSpinner}`}
                placeholder='Nomor Telepon'
                onChange={(e) => setFormNoTlp(e.target.value)}
              />
              <Form.Text className='text-muted'>
                Kami tidak pernah membagikan nomor anda dengan pihak lain!!
              </Form.Text>
            </Form.Group>

            <InputGroup className='mb-3'>
              <Form.Control
                type={showPassword}
                placeholder='Kata Sandi'
                aria-describedby='basic-addon2'
                onChange={(e) => setFormPassword(e.target.value)}
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

            <InputGroup className='mb-3'>
              <Form.Control
                type={showPasswordConfirm}
                placeholder='Konfirmasi Kata Sandi'
                aria-describedby='basic-addon1'
                onChange={(e) => setFormPasswordConfirm(e.target.value)}
              />
              <InputGroup.Text
                id='basic-addon1'
                style={{ background: '#000', border: 'none' }}
                onClick={(e) => {
                  e.preventDefault()
                  {
                    showPasswordConfirm == 'password'
                      ? setShowPasswordConfirm('text')
                      : setShowPasswordConfirm('password')
                  }
                }}
              >
                <img src='/icons/showPw.svg' alt='Show Password' />
              </InputGroup.Text>
            </InputGroup>
            <Form.Group
              className={`mb-3 ${componentCss.checkBoxs}`}
              controlId='formBasicCheckbox'
              style={{ margin: 10 }}
            >
              <Form.Check
                type='checkbox'
                defaultChecked={Checked}
                onChange={(e) => {
                  Checked === false ? setChecked(true) : setChecked(false)
                }}
                label={
                  <p style={{ marginBottom: 0 }}>
                    Saya setuju dengan <a href='/'>Syarat dan Ketentuan</a> yang
                    berlaku
                  </p>
                }
              />
            </Form.Group>
            <Form.Group>
              {formError.show === true ? (
                <Alert variant='danger'>{formError.errorMessage}</Alert>
              ) : (
                <></>
              )}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className={`${classes.modalFooter}`}>
            <Tombol variant='warning' type='submit' width='100%'>
              Register
            </Tombol>
          </Modal.Footer>
        </Form>
      </Modal>
    </Col>
  )
}
export default Header
