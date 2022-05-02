import instagramLogo from '../../../../assets/images/instagram_logo.svg'
import NavBar from './nav_bar'
import Search from './search'
import { Link } from 'react-router-dom'

export default function Header () {
  return (
        <header className="w-full py-3 flex justify-center bg-white shadow mb-6 fixed z-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-20 w-screen max-w-4xl">
            <Link to="/">
                <img
                className="w-full"
                style={{ maxWidth: '7rem' }}
                src={instagramLogo}
                alt="Instagram Logo" />
            </Link>
            <Search />
            <NavBar />
        </div>
        </header>
  )
}
