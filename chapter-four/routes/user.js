const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login');
const signUpController = require('../controllers/signup');

router.get('/login',loginController.getLogin);
router.post('/login', loginController.postLogin);

router.get('/signup', signUpController.getSignUp);
router.post('/signup', signUpController.postSignUp);

router.get('/api',(req,res)=>{
    res.json({
        username: 'Bakare',
        password: '12345'
    });
})


module.exports = router;