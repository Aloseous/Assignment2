import express from "express";
import {getUserData, postUsers} from '../controllers/userController.js';

const router = express.Router();

router.get('/userData', getUserData);
router.post('/postusers', postUsers);

export default router;