import { Router } from "express";
import patientsController from "../controllers/patientsController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { patientSchema } from "../schemas/patientsSchema.js";

const patientsRouter = Router();

patientsRouter.post(
  "/sign-up",
  validateSchema(patientSchema),
  patientsController.create
);

export default patientsRouter;
