import React from 'react'
import { Link } from 'react-router-dom'
interface Iprops {
    imageSize?: number
}

export default function Profile({imageSize}: Iprops) {
    return (
        <div className="grid grid-cols-4 w-full mb-3">
            <img 
            className={`w-${imageSize} h-${imageSize} rounded-full col-span-1`}
            src="https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/articulos/perfil-resilencia.jpg" 
            alt="Person"/>
            <div className="col-span-2 flex flex-col justify-center">
                <Link to="/" className="text-xs font-bold">davidarevaloc</Link>
                <p className="text-xs text-gray-500">David Arevalo</p>
            </div>
            <p className="col-span-1 text-xs text-sky-500 font-semibold flex items-center cursor-pointer">Cambiar</p>
        </div>
    )
}
