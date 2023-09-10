import express from "express";
import bodyParser from "body-parser"

const app = express();
const port = 5000;
var arr = [];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    arr = [];
    res.render("index.ejs");
});

app.post("/submit",(req,res)=>{
    let data = req.body;
    let exists = arr.some(item => item.title === data.title && item.describe === data.describe);
    if (!exists) {
        arr.push(data);
    }
    res.render("index.ejs",{arr:arr});
});


app.listen(port,()=>{
 console.log(`Listening on ${port}`);
});
