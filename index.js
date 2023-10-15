import bodyParser from "body-parser";

import express from "express";

const app = express();
const port = 3000;
const jokes = [
    {
        id: 1,
        content: "Why did the scarecrow win an award? Because he was outstanding in his field!",
        title: "The Outstanding Scarecrow",
        author: "Bard"
    },
    {
        id: 2,
        content: "What do you call a fish with no eyes? Fsh!",
        title: "The Fishless Fish",
        author: "Bard"
    },
    {
        id: 3,
        content: "Why did the bicycle fall over? Because it was two tired!",
        title: "The Tired Bicycle",
        author: "Bard"
    },
    {
        id: 4,
        content: "What do you call a cow with no legs? Ground beef!",
        title: "The Ground Beef Cow",
        author: "Bard"
    },
    {
        id: 5,
        content: "Why did the teacher wear sunglasses? Because her students were so bright!",
        title: "The Bright Students",
        author: "Bard"
    },
    {
        id: 6,
        content: "What do you call a deer with no eyes? No idear!",
        title: "The No-Eyed Deer",
        author: "Bard"
    },
    {
        id: 7,
        content: "Why did the scarecrow win an award? Because he was outstanding in his field!",
        title: "The Outstanding Scarecrow",
        author: "Bard"
    },
    {
        id: 8,
        content: "What do you call a fish with no eyes? Fsh!",
        title: "The Fishless Fish",
        author: "Bard"
    },
    {
        id: 9,
        content: "Why did the bicycle fall over? Because it was two tired!",
        title: "The Tired Bicycle",
        author: "Bard"
    },
    {
        id: 10,
        content: "What do you call a cow with no legs? Ground beef!",
        title: "The Ground Beef Cow",
        author: "Bard"
    }
];
 let lastId=10;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.get("/joke", (req, res) => {
    console.log(jokes);
    res.json(jokes)
})





app.get("/joke/:id", (req, res) => {
    const joke = jokes.find((j) => j.id === parseInt(req.params.id));
    if (!joke) {
        return res.status(404).json({ massage: "joke is noe found " })

    }
    res.json(joke)
})




app.post("/jokes",(req,res)=>{
    let  newId=lastId +=1
    const newjokes={
        id:newId,
        tittle:req.body.tittle,
        content:req.body.content,
        author:req.body.author,
       
    }
    newId=lastId
    jokes.push(newjokes)
    res.status(201).json(jokes)
})



app.patch('/joke/id:',(req,res)=>{
    const joky = jokes.find((j) => j.id === parseInt(req.params.id));

    if (!post) return res.status(404).json({ message: "Post not found" });

    if (req.body.title) joky.title = req.body.title;
    if (req.body.content) joky.content = req.body.content;
    if (req.body.author) joky.author = req.body.author;

    res.json(joky)
})

app.delete("/joke/:id", (req, res) => {
    const index = jokes.findIndex((j) => j.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: "Post not found" });
  
    jokes.splice(index, 1);
    res.json({ message: "Post deleted" });
  });



app.listen(port, () => {
    console.log(`the server port is runing on the  port ${port}`);
})