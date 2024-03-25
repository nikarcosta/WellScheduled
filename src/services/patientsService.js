import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";
import patientsRepository from "../repositories/patientsRepository.js";
import errors from "../errors/index.js";

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

export default {
  createService,
};
