import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom'
import BasicPopover from '../../../../popover/basic';
import AccountMenu from './account_menu';
import BasicModal from '../../../../modal/basic';


export default function NavBar() {
    return (
        <nav className="flex justify-evenly items-center">
            <Link to="/">
                <HomeIcon/>
            </Link>
            <BasicModal trigger={<AddBoxOutlinedIcon className="cursor-pointer"/>} content={<p>Subir Imagen Papu</p>}/>
            <Link to="/explore">
                <ExploreOutlinedIcon/>
            </Link>
            <BasicPopover trigger={<FavoriteBorderIcon className="cursor-pointer"/>} content={<AccountMenu/>}/>
            <BasicPopover trigger={<AccountCircleIcon className="cursor-pointer"/>} content={<AccountMenu/>}/>
        </nav>
    )
}
