import Sidebar from './components/Sidebar'

const index = () => {
  const [user] = useAuthState(auth)

  if (!user) return <Login />

  return (
    <div>
      <Sidebar />
    </div>
  )
}

export default index
