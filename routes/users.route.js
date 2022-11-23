const express=require('express');
const router =express.Router();


router.get("/", (req,res)=>{
    res.send("<h1>i am a get request at home route</h1>");
});

router.get("/register", (req,res)=>{
    res.send("<h1>i am a get request at register route</h1>");
});

router.get("/login", (req,res)=>{
    res.send("<h1>i am a get request at login route</h1>");
});

module.exports= router;