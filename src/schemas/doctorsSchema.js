import joi from "joi";

export const doctorSchema = joi.object({
  full_name: joi.string().trim().min(3).required(),
  email: joi.string().trim().email().required(),
  phone_number: joi.string().trim().min(10).max(11).pattern(/^\d+$/).required(),
  password: joi.string().min(6).required(),
  access_type: joi.string().valid("doctor").required(),
});
