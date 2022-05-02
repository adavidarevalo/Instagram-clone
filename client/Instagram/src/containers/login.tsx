import HelmetHead from '../component/helmet'
import Carousel from '../component/login/carousel'
import FormLogin from '../component/login/form'

export default function Login () {
  return (
        <div className="w-full flex justify-center item-center min-h-screen">
          <HelmetHead title="Instagram"/>
          <div className="flex items-center justify-around w-screen max-w-screen-lg">
            <Carousel/>
            <FormLogin/>
          </div>
        </div>
  )
}
