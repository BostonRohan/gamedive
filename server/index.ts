import express, { Express } from "express";
import dotenv from "dotenv";
import router from "./routes/router";
import session from "express-session";
import options from "./utils/options";

dotenv.config();

const app: Express = express();

app.set("trust proxy", 1);

app.use(session(options));
app.use(router);

app.listen(4000, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:4000`);
});
