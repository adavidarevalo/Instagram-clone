import Joi from 'joi'

const changePassowrdSchema = Joi.object().keys({
  lastPassowrd: Joi.string().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().required().valid(Joi.ref('password'))
})

export default changePassowrdSchema
