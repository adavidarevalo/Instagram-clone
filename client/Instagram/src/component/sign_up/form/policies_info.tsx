import { Link } from 'react-router-dom'
import CardActions from '@mui/material/CardActions'

export default function PoliciesInfo () {
  return (
        <CardActions>
            <span className="text-xs text-center text-zinc-500">
                Al registrarte, aceptas nuestras{' '}
                <Link to="/" className="m-auto mb-4 font-semibold text-zinc-600">
                    Condiciones, la Política de datos y la Política de cookies.
                </Link>
            </span>
        </CardActions>
  )
}
