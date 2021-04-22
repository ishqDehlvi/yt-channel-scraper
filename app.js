const express = require('express')
const app = express()
const scrapeYt = require("scrape-yt");




app.set("view engine","ejs")
app.get("/",(req,res) => {
  res.render("index")
})

//(async () => {
//  let options = {
//    type: "channel",
//    limit: 50,
//  };
//  let videos = await scrapeYt.search("Rick astley", options);
//  videos.forEach((element, index) => {
//    console.log(element.url,'/about');
//  });
//})();
app.listen(5000,() => {
  console.log("App is listening on Port 5000")
})