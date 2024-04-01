import jwt from "jsonwebtoken";
import errors from "../errors/index.js";
import dotenv from "dotenv";
import patientsRepository from "../repositories/patientsRepository.js";
dotenv.config();

async function authValidation(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) throw errors.unauthorizedError();

  const parts = authorization.split(" ");
  if (parts.length !== 2) throw errors.unauthorizedError();

  const [schema, token] = parts;
  if (schema !== "Bearer") throw errors.unauthorizedError();

  jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
    try {
      if (error) throw errors.unauthorizedError();

      if (decoded.exp < Date.now() / 1000) throw errors.unauthorizedError();

      const {
        rows: [user],
      } = await patientsRepository.findPatientByIdRepository(decoded.userId);

      if (!user) throw errors.unauthorizedError();

      res.locals.user = user;
    } catch (err) {
      next(err);
    }
  });
}

export default { authValidation };
