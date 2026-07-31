const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//Routes
app.get('/' ,(req, res)=>{

});
app.get('/show-contact' ,(req, res)=>{

});
app.get('/add-contact' ,(req, res)=>{

});
app.post('/add-contact' ,(req, res)=>{

});
app.get('/update-contact' ,(req, res)=>{

});
app.post('/update-contact' ,(req,res)=>{

});
app.get('/delete-contact' ,(req,res)=>{
    
})


const PORT = 3000;
app.listen(3000 , ()=>{
    console.log("Server will be running on this post:", `${PORT}`);
})