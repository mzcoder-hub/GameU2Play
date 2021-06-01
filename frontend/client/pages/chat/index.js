import { useEffect } from 'react'
import firebase from 'firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../../firebase'

import Login from './Login'
import Loading from './components/Loading'
import Sidebar from './components/Sidebar'
import Head from 'next/head'

const index = () => {
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    if (user) {
      db.collection('users').doc(user.uid).set(
        {
          email: user.email,
          lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
          photoURL: user.photoURL,
        },
        { merge: true }
      )
    }
  }, [user])

  if (loading) return <Loading />
  if (!user) return <Login />

  return (
    <div>
      <Head>
        <title>U2Play Chat</title>
      </Head>
      <Sidebar />
    </div>
  )
}

export default index
