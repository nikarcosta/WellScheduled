import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import patientsRepository from "../repositories/patientsRepository.js";
import errors from "../errors/index.js";
dotenv.config();

async function createService({
  full_name,
  email,
  phone_number,
  date_of_birth,
  password,
}) {
  const { rowCount } = await patientsRepository.findPatientsByEmailRepository(
    email
  );

  if (rowCount) throw errors.duplicatedEmailError(email);

  const hashPassword = await bcrypt.hash(password, 10);
  await patientsRepository.createPatientRepository({
    full_name,
    email,
    phone_number,
    date_of_birth,
    password: hashPassword,
  });
}

async function signInService(email, password) {
  const {
    rowCount,
    rows: [patient],
  } = await patientsRepository.findPatientsByEmailRepository(email);

  if (!rowCount) throw errors.invalidCredentialsError();

  console.log(patient.password);

  const validPassword = await bcrypt.compare(password, patient.password);
  if (!validPassword) throw errors.invalidCredentialsError();

  const payload = {
    userId: patient.id,
    exp: Math.floor(Date.now() / 1000 + 7 * 24 * 60 * 60),
  };

  const token = jwt.sign(payload, process.env.SECRET_JWT);

  return token;
}

export default {
  createService,
  signInService,
};
