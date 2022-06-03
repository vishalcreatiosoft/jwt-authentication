const express = require('express');
const router = new express.Router();
const adminHandler = require('../services/adminServices');


// Router -1 for adminLogin
router.post('/admin-login',(req, res)=>{
    adminHandler.adminLogin(req, res);
});


// Router -2 for adminRegistration
router.post('/admin-register',async(req, res)=>{
    adminHandler.adminRegistration(req, res);
})




module.exports = router;