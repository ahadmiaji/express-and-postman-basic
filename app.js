const express = require('express');
const app = express();
const userRouter = require("./routes/users.route");

app.use("/api/user", userRouter);

app.use("/register", (req, res) => {
    // res.status(200).json({
    //     message: "I'm register page",
    //     statusCode: 200,
    // });
    // res.redirect("/login");

    res.statusCode = 200;
    res.sendFile(__dirname + "/views/register.html");
});

// https://youtu.be/MTWEDWLPP3I
//time - 16:47min(res.cookie)
//anisul islam

app.get("/login", (req, res) => {
    res.cookie("Name", "Ahad");
    res.cookie("Age","27");
    res.end();
});

app.use("/", (req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/index.html");
});

// app.get("/", (req, res) => {
//     res.send("<h1>i am a get request at home route</h1>");
// });

app.use((req, res) => {
    res.send("<h1>404!!! Not a valid url</h1>");
});


//to use get mathod !
//we can see only output throw get mathod
// app.get("/about", (req,res)=>{
//     res.send("i am a get request at about route");
// });


// app.post("/", (req,res)=>{
//     res.send("i am a post request at home route");
// });


// app.put("/", (req,res)=>{
//     res.send("i am a put request at home route");
// });


// app.delete("/", (req,res)=>{
//     res.send("i am a delete request at home route");
// });


module.exports = app;