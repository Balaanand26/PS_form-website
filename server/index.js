const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let users =[];

app.post("/signup",(req, res) =>{
    const {username, email, password} = req.body;

    

    users.push({username, email, password});
    res.json({ message: "Signup Successful!"})
})

app.post("/login",(req,res)=>{
    const {username, password} = req.body;

    const user = users.find(
        (u)=> u.username === username && u.password === password
    );
    if(user){
        res.json({ success: true, message: "Login successful!"});
    }else{
        res.json({ success: false, message: "Invalid username or Password"});
    }
});

app.post("/fail", (req,res)=>{
    const {username, password} = req.body;

    const user = users.find(
        (u)=> u.username === username && u.password === password
    )
    if(user){
        res.json({success: true, message: "Login Successful!"})
    }else{
        res.json({success: false, message: "Invalid username or Password"})
    }
})

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`); 
});