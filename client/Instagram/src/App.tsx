import AuthContext from './context/auth'
import UserDataContext from './context/userData'
import RouteAdministrator from './routes'

function App () {
  return (
    <AuthContext>
      <UserDataContext>
        <RouteAdministrator />
      </UserDataContext>
    </AuthContext>
  )
}

export default App
