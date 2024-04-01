import { db } from "../config/database.connection.js";

async function findPatientsByEmailRepository(email) {
  return db.query(`SELECT * FROM patients WHERE email=$1`, [email]);
}

async function createPatientRepository({
  full_name,
  email,
  phone_number,
  date_of_birth,
  password,
}) {
  db.query(
    `INSERT INTO patients (full_name, email, phone_number, date_of_birth, password) VALUES ($1, $2, $3, $4, $5)`,
    [full_name, email, phone_number, date_of_birth, password]
  );
}

async function findPatientByIdRepository(id) {
  return db.query(`SELECT * FROM patients WHERE id=$1`, [id]);
}

export default {
  findPatientsByEmailRepository,
  createPatientRepository,
  findPatientByIdRepository,
};
