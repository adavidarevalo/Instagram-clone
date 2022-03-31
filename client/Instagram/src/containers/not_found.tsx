import { Link } from 'react-router-dom'

export default function NotFound () {
  return (
        <div className="mt-10">
            <h3 className="font-bold text-2xl text-center mb-5">Esta página no está disponible.</h3>
            <p>Es posible que el enlace que seleccionaste esté roto o que se haya eliminado la página.
                <Link to="/" className="text-sky-600 font-medium ml-2 m-3">Volver a Instagram.</Link>
            </p>
        </div>
  )
}
