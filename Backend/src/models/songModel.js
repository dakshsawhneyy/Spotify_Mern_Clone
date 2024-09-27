import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    name:   {   type: String, required: true    },
    desc:   {   type: String, required: true    },
    album:  {   type: String, required: true    },
    image:  {   type: String, required: true    },
    file:   {   type: String, required: true    },
    duration:{  type: String, required: true    }
})

const songModel = mongoose.models.song || mongoose.model("song", songSchema )    //It will find song in model folder in mongoose.. If song would not be there, it'll create 

export default songModel;