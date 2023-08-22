import express from "express"
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const tasks = [];
const tasks2 = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs",{
        tasks: tasks,
        name: "Ambuj Kulshrestha"
    });

})

app.post("/add",(req,res)=>{
    tasks.push(req.body["newtask"]);
    res.redirect("/");
});

app.get("/pro",(req,res)=>{
    res.render("index2.ejs",{
        tasks2: tasks2,
        name: "Ambuj Kulshrestha"
    })
})



app.post("/add2",(req,res)=>{
    tasks2.push(req.body["newtask"]);
    res.redirect("/pro");
});


app.listen(port,()=>{
    console.log("Server is Listening :D");
})

