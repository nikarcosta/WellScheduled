import { db } from "../config/database.connection.js";

async function findDoctorsByEmailRepository(email) {
  return db.query(`SELECT * FROM patients WHERE email=$1`, [email]);
}

async function createDoctorRepository({
  full_name,
  email,
  phone_number,
  password,
}) {
  db.query(
    `INSERT INTO doctors (full_name, email, phone_number, password) VALUES ($1, $2, $3, $4)`,
    [full_name, email, phone_number, password]
  );
}

export default {
  findDoctorsByEmailRepository,
  createDoctorRepository,
};
