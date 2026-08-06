import express from "express";
import Contact from "../model/contactModel.js";
import mongoose from "mongoose";

const homeContact = async (req, res) => {
  try {
    // const contacts = await Contact.find();
    const {page =1 , limit = 3} = req.query ;
    const options = {
      page: parseInt(page),
      limit: parseInt(limit)
    };
    const result = await Contact.paginate({} , options)
    res.render("home", { 
     totalDocs: result.totalDocs,
     limit: result.limit,
     totalPages: result.totalPages,
     currentPage: result.page,
     counter: result.pagingCounter,
     hasPrevPage: result.hasPrevPage,
     hasNextPage: result.hasNextPage,
     prevPage: result.prevPage,
     nextPage: result.nextPage,
     contacts: result.docs,
     });
  } catch (error) {
    res.render("505", { message: error });
  }
};

const showContact = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
     return res.render("404", { message: "Invalid-Id" });
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
  try {
  const contact = await Contact.create(req.body);
  res.redirect("/");
  } catch (error) {
    res.render('505' , {message: error});
  }
};
const updateContact = async (req, res) => {
  try {
    if(!mongoose.Types.ObjectId.isValid(req.params.id))
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
 try {
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
 } catch (error) {
  res.render('505' , {message: error})
 }
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
