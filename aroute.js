const express = require("express");

const router=express.Router()

router.get('/',(req,res)=>{
    res.sendFile(__dirname+'/view/homepage.html')
})
router.get('/homepage.html',(req,res)=>{
    res.sendFile(__dirname+'/view/homepage.html')
})
router.get('/ourservice.html',(req,res)=>{
    res.sendFile(__dirname+'/view/ourservice.html')
})
router.get('/contactus.html',(req,res)=>{
    res.sendFile(__dirname+'/view/contactus.html')
})

module.exports=router