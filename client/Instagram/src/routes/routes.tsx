import { BrowserRouter as Router, Route, Routes as RoutesOfRouter } from 'react-router-dom'
import BasicLayout from '../component/layout/header'
import EditProfileLayout from '../component/layout/edit_profile'
import EditPassword from '../containers/edit_password'
import EditProfile from '../containers/edit_profile'
import Explorer from '../containers/explorer'
import Home from '../containers/home'
import NotFound from '../containers/not_found'
import Profile from '../containers/profile'

const Routes = () => {
  return (
        <Router>
            <BasicLayout>
                <RoutesOfRouter>
                    <Route path="/" element={<Home />} />
                    <Route path="/explore" element={<Explorer />} />
                    <Route path="/:userName" element={<Profile />} />
                    <Route path="/profile/edit" element={<EditProfileLayout><EditProfile /></EditProfileLayout>} />
                    <Route path="/profile/password" element={<EditProfileLayout><EditPassword /></EditProfileLayout>} />
                    <Route path="*" element={<NotFound />} />
                </RoutesOfRouter>
            </BasicLayout>
        </Router>
  )
}

export default Routes
