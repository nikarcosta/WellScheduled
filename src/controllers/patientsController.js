import patientsService from "../services/patientsService.js";

async function create(req, res, next) {
  const {
    full_name,
    email,
    phone_number,
    date_of_birth,
    access_type,
    password,
  } = req.body;

  try {
    await patientsService.createService({
      full_name,
      email,
      phone_number,
      date_of_birth,
      password,
    });
    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

export default {
  create,
};
