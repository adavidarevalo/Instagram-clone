import { BrowserRouter as Router, Route, Routes as RoutesOfRouter } from 'react-router-dom'
import BasicLayout from '../component/layout/basic'
import Explorer from '../containers/explorer'
import Home from '../containers/home'
import Login from '../containers/login'
import NotFound from '../containers/not_found'
import SignUp from '../containers/sign_up'

const Routes = () => {
  return (
        <Router>
            {/* <BasicLayout> */}
                <RoutesOfRouter>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/sign-up" element={<SignUp/>} />
                    <Route path="/" element={<Home/>} />
                    <Route path="/explore" element={<Explorer/>} />
                    <Route path="*" element={<NotFound/>}/>
                </RoutesOfRouter>
            {/* </BasicLayout> */}
        </Router>
  )
}

export default Routes
