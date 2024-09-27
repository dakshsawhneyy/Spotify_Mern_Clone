import express from 'express'
import cors from 'cors' //It will help to connect frontend port with backend port
import 'dotenv/config'  // Due to this we get support of environmental variables
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoute.js';

// app config
const app = express();
const port =  process.env.PORT || 5000;  //process.env.PORT is a way to access the environment variable PORT in a Node.js application. Environment variables are used to store configuration values that your application needs to function, such as database connection strings, API keys, or server ports. and then used or if env has no port
connectDB();
connectCloudinary();

//middlewares
app.use(express.json()) //using this middleware when we get any request, request will be passed by this json method
app.use(cors())     //using this middleware, we can connect frontend with out backend i.e we can connect both port

//initializing routes 
app.use('/api/song', songRouter)
app.use('/api/album', albumRouter)
app.get('/' , (req,res) => res.send("API Working"))

app.listen(port, ()=> console.log(`Server Started on ${port}`) )