import express from "express";
import topGames from "../controllers/topGames";
import auth from "../middleware/auth";

const router = express.Router();

router.get("/", auth, topGames);

export default router;
