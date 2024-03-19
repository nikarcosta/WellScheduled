import joi from "joi";

export const patientSchema = joi.object({
  full_name: joi.string().trim().min(3).required(),
  email: joi.string().trim().email().required(),
  phone: joi.string().trim().min(10).max(11).pattern(/^\d+$/).required(),
  date_of_birth: joi.date().max("now").required(),
  access_type: joi.string().valid("patient").required(),
});
