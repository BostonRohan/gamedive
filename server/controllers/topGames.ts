import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const topGames = async (req: Request, res: Response) => {
  try {
    const { data } = await axios({
      url: "https://api.igdb.com/v4/games",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": process.env.CLIENT_ID as string,
        Authorization: `Bearer ${req.session.access_token}`,
      },
      data: "fields name, total_rating, videos, cover, total_rating_count; limit 15; where total_rating != n & total_rating_count > 50; sort total_rating desc;",
    });

    res.send(data);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};
export default topGames;
