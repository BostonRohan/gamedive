import dotenv from "dotenv";
import axios from "axios";
import { Request } from "express";

dotenv.config();

const getIgdb = async (url: string, postData: string, req: Request) => {
  const { data } = await axios({
    url,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": process.env.CLIENT_ID as string,
      Authorization: `Bearer ${req.session.access_token}`,
    },
    data: postData,
  });

  return data;
};

export default getIgdb;
