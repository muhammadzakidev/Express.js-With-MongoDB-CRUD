import express from "express";
import Contact from "../model/contactModel.js";
import mongoose from "mongoose";

const homeContact = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.render("home", { contacts });
  } catch (error) {
    res.render("505", { message: error });
  }
};

const showContact = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.render("404", { message: "Invalid-Id" });
    }
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.render("405", { message: "could not show content" });
    }
    res.render('show-contact' , {contact});
  } catch (error) {
         res.render('505' ,{message: error});
  }
};
const addContact = async (req, res) => {
  res.render("add-contact");
};
const addPostContact = async (req, res) => {
  const contact = await Contact.create(req.body);
  res.redirect("/");
};
const updateContact = async (req, res) => {
  try {
    if(!mongoose.Types.ObjectId.isValid(req.params.id));
    {
      res.render('404' , {message: "Invalid-id"});      
    }

  const contact = await Contact.findById(req.params.id);
  if(!contact)
  {
     return res.render('404' , {message: "Not update yet"});
  }
  res.render("update-contact", { contact });
    
  } catch (error) {
    res.render('505' , {message: error});
  }
};
const updateContactById = async (req, res) => {
    try {
      if(!mongoose.Types.ObjectId.isValid(req.params.id))
      {
        return res.render('404' , {message: "could not update yet or Invalid Id"});
      }
      const contact = await Contact.findByIdAndUpdate(req.params.id , req.body);
      if(!contact)
      {
        return res.render('404' , {message: 'Invalid-Id'})
      }
      res.redirect('/'); 
    } catch (error) {
        res.render('505' , {message: error})
    }
};

const deleteContact = async (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id))
  {
     return res.render('404' , {message: "invalid-id"});
  }
  const contact = await Contact.findByIdAndDelete(req.params.id)
  if(!contact)
  {
     return res.render('404' , {message: 'could not delete '});
  }
  res.redirect('/');
};
export default {
  homeContact,
  showContact,
  addContact,
  addPostContact,
  updateContact,
  updateContactById,
  deleteContact,
};
