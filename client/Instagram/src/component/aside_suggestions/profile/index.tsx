import { Link } from 'react-router-dom'
import userUndefined from './../../../assets/images/user undefined.webp'

export default function Profile ({ imageSize, user }: {imageSize?: number, user: any}) {
  const { avatar, userName, name } = user
  return (
        <div className="grid grid-cols-4 w-full mb-3">
          <img
          className={'w-full h-full rounded-full col-span-1'}
          style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
          src={avatar || userUndefined}
          loading="lazy"
          alt={name}/>
            <div className="col-span-2 flex flex-col justify-center ml-3">
                <Link to={`/${userName}`} className="text-xs font-bold">{userName}</Link>
                <p className="text-xs text-gray-500">{name}</p>
            </div>
            <p className="col-span-1 text-xs text-sky-500 font-semibold flex items-center cursor-pointer">Cambiar</p>
        </div>
  )
}
