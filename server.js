const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

//Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//serve up static assets
app.use(express.static("client/build"));

//send every request to the React app
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

//connect to the mongo DB
app.listen(PORT, function(){
    console.log(`🌎 ==> API server now on port ${PORT}!`)
});