import { BrowserRouter as Router, Route, Routes as RoutesOfRouter } from 'react-router-dom'
import BasicLayout from '../component/layout/header'
import Explorer from '../containers/explorer'
import Home from '../containers/home'
import NotFound from '../containers/not_found'

const Routes = () => {
  return (
        <Router>
            <BasicLayout>
                <RoutesOfRouter>
                    <Route path="/" element={<Home/>} />
                    <Route path="/explore" element={<Explorer/>} />
                    <Route path="*" element={<NotFound/>}/>
                </RoutesOfRouter>
            </BasicLayout>
        </Router>
  )
}

export default Routes
