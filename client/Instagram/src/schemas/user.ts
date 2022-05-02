import Joi from 'joi'

export const userSchema = Joi.object().keys({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string().min(10).max(15).required(),
  userName: Joi.string().min(3).max(30).required(),
  name: Joi.string().min(3).max(30).required(),
  phoneNumber: Joi.string().length(10).pattern(/[6-9]{1}[0-9]{9}/),
  description: Joi.string().min(3).required(),
  gender: Joi.string().valid('men', 'women'),
  website: Joi.string().uri()
})
