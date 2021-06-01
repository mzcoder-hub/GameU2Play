import styled from 'styled-components'
import Head from 'next/head'
import Button from '@material-ui/core/Button'
import { auth, provider } from '../../firebase'

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert)
  }

  return (
    <Container>
      <Head>
        <title>Login To Chat</title>
      </Head>

      <LoginContainer>
        <Logo src='/webgame.png' />
        <Button variant='outlined' onClick={signIn}>
          Sign in First to Show the Chat
        </Button>
      </LoginContainer>
    </Container>
  )
}

export default Login

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`

const LoginContainer = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  box-shadow: 8px 4px 14px -3px rgba(0, 0, 0, 0.7);
`

const Logo = styled.img`
  height: 80px;
  width: 350px;
  margin-bottom: 50px;
`
