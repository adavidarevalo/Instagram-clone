import { Helmet } from 'react-helmet'

export default function HelmetHead ({ title }: { title: string }) {
  return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
  )
}
