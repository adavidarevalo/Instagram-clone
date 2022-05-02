import { useState } from 'react'
import Joi from 'joi'
import { showError } from '../utils/auth_pages'
import useNotifier from './use_notifier'

const useSubmit = (
  formValue: {
        [key: string]: string;
      },
  schema: Joi.ObjectSchema<any>,
  action: any,
  messageSuccess?: string
) => {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { setNotifier } = useNotifier()
  const handleSubmit = async () => {
    setError(null)
    setIsLoading(true)
    const validate = await schema.validate(formValue)

    if (validate?.error) {
      setIsLoading(false)
      showError(validate, setError)
      setTimeout(() => {
        setError(null)
      }, 4000)
      return
    }

    try {
      await action()
      messageSuccess && setNotifier(messageSuccess, 'success')
      setIsLoading(false)
    } catch (error) {
      setNotifier(error.message, 'error')
      setIsLoading(false)
    }
  }
  return { error, isLoading, handleSubmit }
}

export default useSubmit
