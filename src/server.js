import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import { handleApplicationErrors } from "./middlewares/errorMiddleware.js";
dotenv.config();

const server = express();
server.use(cors());
server.use(json());
server.use(routes);
server.use(handleApplicationErrors);

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server running at PORT = ${PORT}`);
});
