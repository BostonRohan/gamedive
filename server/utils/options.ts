import dotenv from "dotenv";
import { SessionOptions } from "express-session";

dotenv.config();

const options: SessionOptions = {
  secret: process.env.SECRET as string,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
  },
};
export default options;
