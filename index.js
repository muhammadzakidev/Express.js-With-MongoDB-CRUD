import express from 'express'
const app = express();
import mongoose from 'mongoose'
import Contact from './model/contactModel.js'
import connectDB from './config/db.js'
import contactRoute from './routes/contactRoutes.js'
//connect the database
const PORT = process.env.PORT
connectDB();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
//Routes
app.set("view engine", "ejs");
app.set("views", "./views");

app.use('/' , contactRoute);

app.listen(PORT , ()=>{
    console.log("Server will be running on this post:", `${PORT}`);
})