import express from 'express'
import Contact from '../model/contactModel.js'

const homeContact = async(req, res)=>{
  const contacts = await Contact.find();
  res.render('home' , {contacts});
}

const showContact = async (req, res)=>{
  const contact = await Contact.findById(req.params.id); 
  res.render('show-contact' ,{contact})
}
const addContact = async(req, res)=>{
 res.render('add-contact');
}
const addPostContact = async (req, res)=>{
  const contact = await Contact.create(req.body);
  res.redirect("/");
  
}
const updateContact = async (req, res)=>{
  const contact = await Contact.findById(req.params.id);
 res.render('update-contact' , {contact});
}
const updateContactById = async(req,res)=>{
await Contact.findByIdAndUpdate(req,params.id , req.body);
res.redirect('/');
}

const deleteContact = async(req,res)=>{
   await Contact.findByIdAndDelete(req.params.id);
  res.redirect('/');

}
export default {homeContact , showContact , addContact, addPostContact, updateContact, updateContactById, deleteContact} ;