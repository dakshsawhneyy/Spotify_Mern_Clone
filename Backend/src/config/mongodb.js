import mongoose from "mongoose";

const connectDB = async() => {

    mongoose.connection.on('connected', () => {
        console.log('connected to Mongo successfully')
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/spotify`)        //Mongo Uri in .env file
}

export default connectDB;