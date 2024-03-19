import joi from "joi";

export const doctorSchema = joi.object({
  full_name: joi.string().trim().min(3).required(),
  email: joi.string().trim().email().required(),
  phone: joi.string().trim().min(10).max(11).pattern(/^\d+$/).required(),
});
