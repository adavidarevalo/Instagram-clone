import { useContext } from 'react'
import { authContext } from './../context/auth'
import Routes from './../routes/routes'
import AuthRoutes from './../routes/auth'

export default function RouteAdministrator () {
  const { auth } = useContext(authContext)

  return (
        <div>
            {
                auth ? <Routes /> : <AuthRoutes />
            }
        </div>
  )
}
