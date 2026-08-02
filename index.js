const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Contact = require('./model/contactModel');

//connect the database

mongoose.connect('mongodb://localhost:27017/Ejs').then(() =>{
  console.log('Database will be connected Successfully');
})
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
//Routes
app.set("view engine", "ejs");
app.set("views", "./views");
app.get('/' , async(req, res)=>{
  const contacts = await Contact.find();
  res.render('home' , {contact});
});
app.get('/show-contact/:id' , async (req, res)=>{
  const contact = await Contact.findById(req.params.id); 
  res.render('show-contact' ,{contact})
});
app.get('/add-contact' , async(req, res)=>{
 res.render('add-contact')
});
app.post('/add-contact' ,async (req, res)=>{
  const contact = await Contact.create(req.body);
  res.redirect("/");
  
});
app.get('/update-contact/:id' ,async (req, res)=>{
  const contact = await Contact.findById(req.params.id);
 res.render('update-contact' , {contact});
});
app.post('/update-contact/:id' , async(req,res)=>{
await Contact.findByIdAndUpdate(req,params.id , req.body);
res.redirect('/');
});
app.get('/delete-contact/:id' , async(req,res)=>{
   await Contact.findByIdAndDelete(req.params.id);
  res.redirect('/');

})


const PORT = 3000;
app.listen(3000 , ()=>{
    console.log("Server will be running on this post:", `${PORT}`);
})