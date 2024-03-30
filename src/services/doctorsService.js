import bcrypt from "bcrypt";
import doctorsRepository from "../repositories/doctorsRepository.js";
import errors from "../errors/index.js";

async function createService({ full_name, email, phone_number, password }) {
  const { rowCount } = await doctorsRepository.findDoctorsByEmailRepository(
    email
  );

  if (rowCount) throw errors.duplicatedEmailError(email);

  const hashPassword = await bcrypt.hash(password, 10);
  await doctorsRepository.createDoctorRepository({
    full_name,
    email,
    phone_number,
    password: hashPassword,
  });
}

export default {
  createService,
};
