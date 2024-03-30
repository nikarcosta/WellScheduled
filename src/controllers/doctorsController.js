import doctorsService from "../services/doctorsService.js";

async function create(req, res, next) {
  const { full_name, email, phone_number, access_type, password } = req.body;

  try {
    await doctorsService.createService({
      full_name,
      email,
      phone_number,
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
