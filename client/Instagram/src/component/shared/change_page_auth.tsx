import { Link } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

interface IProps {
    content: string;
    link: string;
    linkContent: string;
  }

export default function ChangePageAuth ({ content, link, linkContent }: IProps) {
  return (
        <Card variant="outlined" className="w-full max-w-sm m-auto shadow">
                <CardContent className="text-center">
                    <span className="text-sm">
                        {content}{' '}
                        <Link to={link} className="m-auto mb-4 font-semibold text-blue-400">
                            {linkContent}
                        </Link>
                    </span>
                </CardContent>
            </Card>
  )
}
