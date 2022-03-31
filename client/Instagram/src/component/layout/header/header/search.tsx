import {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';

export default function Search() {
    const [isActive, setIsActive] = useState<boolean>(false)
    const hadleOpen = () => {
        if(!isActive) setIsActive(true)
    } 
    const hadleClose = () => {
        if(isActive) setIsActive(false)
    } 
    return (
        <div className="bg-gray-200 rounded-md p-2 hidden sm:block" onClick={hadleOpen}>
            {!isActive && <SearchIcon style={{color: "rgb(156 163 175)"}}/>}
            <input placeholder="Search" className="bg-gray-200 outline-0 w-10/12 ml-2"/>
            {isActive && <CancelIcon onClick={hadleClose} style={{color: "rgb(156 163 175)"}}/>}
        </div>
    )
}
