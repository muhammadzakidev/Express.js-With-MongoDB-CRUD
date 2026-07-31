const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
//Routes
app.set("view engine", "ejs");
app.set("views", "./views");
app.get('/' ,(req, res)=>{
  res.render('home')
});
app.get('/show-contact' ,(req, res)=>{
  res.render('show-contact')
});
app.get('/add-contact' ,(req, res)=>{
 res.render('add-contact')
});
app.post('/add-contact' ,(req, res)=>{

});
app.get('/update-contact' ,(req, res)=>{
 res.render('update-contact')
});
app.post('/update-contact' ,(req,res)=>{

});
app.get('/delete-contact' ,(req,res)=>{

})


const PORT = 3000;
app.listen(3000 , ()=>{
    console.log("Server will be running on this post:", `${PORT}`);
})