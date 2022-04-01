import Stories from '../component/stories'
import AsideBar from '../component/layout/aside/index'
import AsideSuggestions from '../component/aside_suggestions'
export default function Home () {
  return (
        <AsideBar asideComponent={<AsideSuggestions/>}>
        <div>
            <Stories/>
            <p>Home</p>
        </div>
        </AsideBar>
  )
}
