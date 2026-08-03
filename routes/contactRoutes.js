import express from 'express';
const router = express.Router();
import ContactController from '../controller/contactController.js'
router.get('/' , ContactController.homeContact);
router.get('/show-contact/:id' , ContactController.showContact );
router.get('/add-contact' , ContactController.addContact );
router.post('/add-contact' , ContactController.addPostContact);
router.get('/update-contact/:id' , ContactController.updateContact);
router.post('/update-contact/:id' , ContactController.updateContactById );
router.get('/delete-contact/:id' , ContactController.deleteContact );

export default router