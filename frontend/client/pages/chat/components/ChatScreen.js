import { useRef, useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import firebase from 'firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import TimeAgo from 'timeago-react'

import { auth, db } from '../../../firebase'
import Message from './Message'
import getRecipientEmail from '../utils/getRecipientEmail'

const ChatScreen = ({ chat, messages }) => {
  const [user] = useAuthState(auth)
  const [input, setInput] = useState('')
  const endOfMessagesRef = useRef(null)
  const router = useRouter()
  const [messagesSnapshot] = useCollection(
    db
      .collection('chats')
      .doc(router.query.id)
      .collection('messages')
      .orderBy('timestamp', 'asc')
  )

  const [recipientSnapshot] = useCollection(
    db
      .collection('users')
      .where('email', '==', getRecipientEmail(chat.users, user))
  )

  const showMessages = () => {
    if (messagesSnapshot) {
      return messagesSnapshot.docs.map((message) => (
        <Message
          key={message.id}
          user={message.data().user}
          message={{
            ...message.data(),
            timestamp: message.data().timestamp?.toDate().getTime(),
          }}
        />
      ))
    } else {
      return JSON.parse(messages).map((message) => (
        <Message key={message.id} user={message.user} message={message} />
      ))
    }
  }

  const scrollToBottom = () => {
    endOfMessagesRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  const sendMessage = (e) => {
    e.preventDefault()

    // Update the Last Seen ...

    db.collection('users').doc(user.uid).set(
      {
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    )

    db.collection('chats').doc(router.query.id).collection('messages').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user.email,
      photoURL: user.photoURL,
    })

    setInput('')
    scrollToBottom()
  }
  const recipient = recipientSnapshot?.docs?.[0]?.data()
  const recipientEmail = getRecipientEmail(chat.users, user)
  return (
    <Container>
      <Header>
        {recipient ? (
          <Avatar src={recipient?.photoURL} />
        ) : (
          <Avatar>{recipientEmail[0]}</Avatar>
        )}
        {/* <Avatar /> */}
        <HeaderInformation>
          <h3>{recipientEmail}</h3>
          {recipientSnapshot ? (
            <p>
              Last Active :{' '}
              {recipient?.lastSeen?.toDate() ? (
                <TimeAgo datetime={recipient?.lastSeen?.toDate()} />
              ) : (
                'Unavailable'
              )}
            </p>
          ) : (
            <p>Loading Last Active ... </p>
          )}
        </HeaderInformation>
        <HeaderIcon>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </HeaderIcon>
      </Header>

      <MessageContainer>
        {showMessages()}
        <EndOfMessage ref={endOfMessagesRef} />
      </MessageContainer>
      <InputContainer>
        <InsertEmoticonIcon />
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <button hidden disabled={!input} type='submit' onClick={sendMessage}>
          Send Message
        </button>
        <MicIcon />
      </InputContainer>
    </Container>
  )
}

export default ChatScreen

const Container = styled.div``

const Input = styled.input`
  flex: 1;
  outline: 0;
  border: none;
  border-radius: 10px;
  background-color: whitesmoke;
  padding: 20px;
  margin-left: 15px;
  margin-right: 15px;
`

const InputContainer = styled.form`
  display: flex;
  align-items: center;
  padding: 10px;
  position: sticky;
  bottom: 0;
  background-color: white;
  z-index: 100;
`

const Header = styled.div`
  position: sticky;
  background-color: white;
  z-index: 100;
  top: 0;
  display: flex;
  padding: 11px;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
`

const HeaderInformation = styled.div`
  margin-left: 15px;
  flex: 1;

  > h3 {
    font-size: 16px;
    margin-bottom: 3px;
  }

  > p {
    font-size: 14px;
    color: gray;
  }
`

const HeaderIcon = styled.div``

const MessageContainer = styled.div`
  padding: 30px;
  background-color: #e5ded8;
  min-height: 90vh;
`

const EndOfMessage = styled.div`
  margin-bottom: 50px;
`
