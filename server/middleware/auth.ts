import { NextFunction, Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

declare module "express-session" {
  interface SessionData {
    access_token: string;
    expires_in: number;
  }
}

const auth = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.access_token || req.session.expires_in === 0) {
    try {
      const { data } = await axios.post(
        `https://id.twitch.tv/oauth2/token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&grant_type=client_credentials`
      );
      const { access_token, expires_in } = data;

      req.session.access_token = access_token;
      req.session.expires_in = expires_in;
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  }
  next();
};
export default auth;
