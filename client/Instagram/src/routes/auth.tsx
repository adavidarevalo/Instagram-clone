import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../containers/login'
import NotFound from '../containers/not_found'
import SignUp from '../containers/sign_up'

const AuthRoutes = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
  )
}

export default AuthRoutes
