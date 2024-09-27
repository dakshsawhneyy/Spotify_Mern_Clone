import { v2 as cloudinary} from 'cloudinary'
import albumModel from '../models/albumModel.js';

const addAlbum = async(req,res) => {
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const bgColour = req.body.bgColour;
        const imageFile = req.file;     //We have only one file so .file instead of files
        //Now we have to upload this image in cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"})

        const albumData = {
            name,
            desc,
            bgColour,
            image: imageUpload.secure_url
        }

        const album = albumModel(albumData)
        await album.save();
        res.send({success: true, message: "Album Added"})

    } catch (error) {
        res.send({success: false})
        console.log(error)
    }
}

const listAlbum = async(req,res) => {
    try {
        const allAlbums = await albumModel.find({})
        res.send({success: true, songs: allAlbums})
    } catch (error) {
        res.send({success: false})
        console.log(error)
    }
}

const deleteAlbum = async(req,res) => {
    try {
        await albumModel.findByIdAndDelete(req.body.id)
        res.send({success: true, message: "Album Deleted"})
    } catch (error) {
        res.send({success: false})
        console.log(error)
    }
}

export { addAlbum, listAlbum, deleteAlbum }