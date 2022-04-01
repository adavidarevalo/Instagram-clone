import Joi from 'joi'

const singUpSchema = Joi.object().keys({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string().min(10).max(15).required(),
  userName: Joi.string().min(3).max(30).required(),
  name: Joi.string().min(3).max(30).required()
})

export default singUpSchema
