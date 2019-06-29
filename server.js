const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require("mysql")
const sequelize = require("sequelize")
const env = require("dotenv").config()
const db = require("./models")
const passport   = require('passport')
const session    = require('express-session')
const bodyParser = require('body-parser')
const authController = require('./controllers/authcontroller.js');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({ secret: 'ragtime cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session());

//For React/JSX Templating

app.set('views', './views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

// require('./config/passport.js')(passport, models.user);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

var models = require("./models");
//

require('./routes/auth.js')(app);

// app.use(authRoute)

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



app.post("/api/owned", function(req, res){
  db.Owned.create({
    symbol:req.body.symbol,
    UserId: req.user.id
  })
})

app.post('/api/watched', function(req, res){
  db.Watched.create({
    symbol: req.body.symbol,
    UserId: req.user.id
  })
})


app.get("/api/users",function(req, res){
  db.User.findAll({}).then(function(data){
    res.json(data)
  })
})

app.get('/api/users/owned', function(req, res){
  db.Owned.findAll({
    where:{
      UserId: req.user.id
    }
  }).then(function(data){
    res.json(data)
  })
})

app.get("/api/users/watched", function(req, res){
  db.Watched.findAll({
    where:{
      UserId: req.user.id
    }
  }).then(function(data){
    res.json(data)
  })
})

app.get("/api/currentUser", function(req, res){
  db.User.findOne({
    where:{
      id: req.user.id
    }
  }).then(function(data){
    res.json(data)
  })
})



// app.get("*", function(req, res) {
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
})

