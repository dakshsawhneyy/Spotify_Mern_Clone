import multer from "multer";

const storage = multer.diskStorage({    //multer.diskStorage: It tells us where to put the (files) and how to name them.
    filename: function(req,file,callback) {  //filename function: This function is like the label-maker for your toys. It decides what name to give to each toy when it goes into the toy box. callback: This is like giving the toy a name sticker and putting it in the right spot. It tells the toy box (your computer) what name to use.
        callback(null, file.originalname)
    }
})

const upload = multer({storage})  //this is like having a helper who takes each new toy, gives it a name, and puts it in the right spot in the toy box.

export default upload;