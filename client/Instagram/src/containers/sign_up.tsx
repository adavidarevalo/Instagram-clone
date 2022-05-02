import HelmetHead from '../component/helmet'
import SingUpForm from '../component/sign_up/form'

export default function SignUp () {
  return (
    <div className="h-screen flex justify-center items-center">
      <HelmetHead title="Registrate · Instagram"/>
      <SingUpForm/>
    </div>
  )
}
