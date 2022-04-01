import Joi from 'joi'

const loginSchema = Joi.object().keys({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string().min(10).max(15).required()
})

export default loginSchema
