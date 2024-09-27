import express from 'express'
import { addAlbum, deleteAlbum, listAlbum } from '../controllers/albumController.js';
import upload from '../middleware/multer.js';

let albumRouter = express.Router();

albumRouter.post("/add", upload.single('image') ,addAlbum)  //here we have used single instead of routes because only one file needs to upload not two or three so used single 
albumRouter.get("/list", listAlbum)
albumRouter.delete("/delete", deleteAlbum)

export default albumRouter;