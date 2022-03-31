import Histories from '../component/histories'
import AsideBar from '../component/layout/aside/index'
import AsideSuggestions from '../component/aside_suggestions'
export default function Home () {
  return (
        <AsideBar asideComponent={<AsideSuggestions/>}>
        <div>
            <Histories/>
            <p>Home</p>
        </div>
        </AsideBar>
  )
}
