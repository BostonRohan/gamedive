import { Request, Response } from "express";
import dotenv from "dotenv";
import getIgdb from "../utils/igdb";

dotenv.config();

type Cover = {
  id: number;
  height: number;
  image_id: string;
  url: string;
  width: number;
};

interface Game {
  id: number;
  cover: Cover;
  name: string;
  total_rating: number;
  total_rating_count: number;
}

const topGames = async (req: Request, res: Response) => {
  try {
    let games = await getIgdb(
      "https://api.igdb.com/v4/games",
      "fields name, total_rating, videos, cover, total_rating_count; limit 15; where total_rating != n & total_rating_count > 50; sort total_rating desc;",
      req
    );
    const ids = games.map((game: Game) => game.cover).join(",");

    const covers = await getIgdb(
      "https://api.igdb.com/v4/covers",
      `fields height, image_id, url, width; limit 15; where id = (${ids});`,
      req
    );

    games.forEach((game: Game, i: number) => (game.cover = covers[i]));

    res.send(games);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};
export default topGames;
