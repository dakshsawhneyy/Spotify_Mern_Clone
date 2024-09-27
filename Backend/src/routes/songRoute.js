import { addSong, listSong, removeSong } from "../controllers/songController.js";
import express from "express";
import upload from "../middleware/multer.js";

const songRouter = express.Router();

songRouter.post("/add", upload.fields([ {name: "image", maxCount: 1} , {name: "audio", maxCount: 1} ]) ,addSong)   //We'll send image and audio using this field name //{ name: "image", maxCount: 1 }: This means your helper should expect one image file named "image".
songRouter.get("/list", listSong)
songRouter.delete("/delete", removeSong)

export default songRouter;