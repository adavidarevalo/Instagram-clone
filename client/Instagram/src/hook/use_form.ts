import React, { useEffect, useState } from 'react'

const useForm = (formValues: string[]) => {
  const [formValue, setFormValue] = useState<{[key: string]: string}>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  const asingValues = () => {
    formValues.forEach((item: string) => {
      setFormValue(prevState => ({
        ...prevState,
        [item]: ''
      }))
    })
  }

  useEffect(() => {
    if (!formValue.length && formValues) return () => asingValues()
  }, [])

  return { formValue, handleChange }
}

export default useForm
