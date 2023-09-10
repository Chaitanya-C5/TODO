import express from "express";
import bodyParser from "body-parser"

const app = express();
const port = 5000;
var arr = [];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs",{arr:arr});
});

app.post("/submit",(req,res)=>{
    let data = req.body;
    arr.push(data);
    console.log(arr);
    res.redirect("/");

});

app.listen(port,()=>{
 console.log(`Listening on ${port}`);
});