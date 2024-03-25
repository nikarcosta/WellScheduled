import { Router } from "express";
import patientsRouter from "./patientsRoutes.js";

const routes = Router();

routes.use("/patients", patientsRouter);

export default routes;
