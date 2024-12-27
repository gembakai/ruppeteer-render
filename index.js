const express = require("express")
const app = express();
const PORT = process.env.PORT || 4000;
const {scrapeLogic} = require("./scrapeLogic");

app.get("/scrape",(req,res)=>{
    scrapeLogic(res);
})
app.get("/",(req,res)=>{
    res.send("Render Puppeteer, server is up and runnning")
})

app.listen(PORT,()=>{
    console.log(`Listenig on port ${PORT}`)
})