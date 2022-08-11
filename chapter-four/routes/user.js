const express = require('express');
const router = express.Router();

//Controllers
const loginController = require('../controllers/login');
const signUpController = require('../controllers/signup');

//Models
const User = require('../models/user');

router.get('/login',loginController.getLogin);
router.post('/login', loginController.postLogin);

router.get('/signup', signUpController.getSignUp);
router.post('/signup', signUpController.postSignUp);

router.get('/api',(req,res)=>{
    res.json({
        users: User.fetchAll()
    });
})


module.exports = router;