import { useState } from 'react'

import HomeIcon from '@mui/icons-material/Home'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import AddBoxIcon from '@mui/icons-material/AddBox'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined'
import ExploreIcon from '@mui/icons-material/Explore'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Link } from 'react-router-dom'
import { BasicPopup } from '../../../../popup/basic'
import { AccountMenu } from './account_menu'
import BasicModal from '../../../../modal/basic'
import NewPost from './modal_content/newPost'

export default function NavBar () {
  const [active, setActive] = useState<number>(1)

  const handleClick = (e: number) => {
    setActive(e)
  }
  return (
        <nav className="flex justify-evenly items-center">
            <Link to="/" onClick={() => handleClick(1)}>
                {
                    active === 1
                      ? <HomeIcon/>
                      : <HomeOutlinedIcon/>
                }
            </Link>
            <BasicModal trigger={
                <div onClick={() => handleClick(2)}>
                    {
                        active === 2
                          ? <AddBoxIcon className="cursor-pointer"/>
                          : <AddBoxOutlinedIcon className="cursor-pointer"/>
                    }
                </div>
            } content={(handleClose) => <NewPost/>}/>
            <Link to="/explore">
            <div onClick={() => handleClick(3)}>
                    {
                        active === 3
                          ? <ExploreIcon className="cursor-pointer"/>
                          : <ExploreOutlinedIcon className="cursor-pointer"/>
                    }
                </div>
            </Link>
            <BasicPopup trigger={
                <div onClick={() => handleClick(4)}>
                    {
                        active === 4
                          ? <FavoriteIcon className="cursor-pointer"/>
                          : <FavoriteBorderIcon className="cursor-pointer"/>
                    }
                </div>
            } content={<p>PEPE</p>}/>
            <AccountMenu/>
        </nav>
  )
}
