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
patientsRouter.post("/sign-in", patientsController.signIn);

export default patientsRouter;
