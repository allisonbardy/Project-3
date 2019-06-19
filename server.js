const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require("mysql")
const sequelize = require("sequelize")
const env = require("dotenv").config()
const db = require("./models")


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs




app.post("/api/users", function(req,res){
  console.log(req.body)
  db.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email:req.body.email,
    password: req.body.password
  })
  .then(function(data){
    res.json(data)
  })
})

app.get("/api/users",function(req, res){
  db.User.findAll({}).then(function(data){
    res.json(data)
  })
})

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

// app.listen(PORT, function() {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });

db.sequelize.sync().then(function(){
  console.log("Nice Database looks fine!")

  app.listen(PORT,function(){
    console.log(`App listening on ${PORT}`)
  });

}).catch(function(err){
  console.log(err, "Something went wrong with the Database Update!")
});
