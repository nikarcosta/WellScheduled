import { Router } from "express";
import doctorsController from "../controllers/doctorsController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { doctorSchema } from "../schemas/doctorsSchema.js";

const doctorsRouter = Router();

doctorsRouter.post(
  "/sign-up",
  validateSchema(doctorSchema),
  doctorsController.create
);

export default doctorsRouter;
