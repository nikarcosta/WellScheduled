import { Router } from "express";
import patientsRouter from "./patientsRoutes.js";
import doctorsRouter from "./doctorsRoutes.js";

const routes = Router();

routes.use("/patients", patientsRouter);
routes.use("/doctors", doctorsRouter);

export default routes;
