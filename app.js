var express = require("express");
var app = express();
var request = require("request");

var io= require('socket.io');

app.set("view engine", "ejs");

//======= S E A R C H  R O U T E ========= //

app.get("/", function(req, res){
    res.render("search");
});



app.get("/results", function(req, res){

    //access data from the query string
    var searchedMovie = req.query.searchValue;
    
    //create a variable for the query string
    var queryString = "http://omdbapi.com/?s=" + searchedMovie + "&apikey=9e8cf178";
    
    
    request(queryString, function(error, response, body){
    if(!error && response.statusCode == 200){
        var parseData = JSON.parse(body);
        
        res.render("results", {data: parseData});
        }
    });
});







const port = process.env.PORT || 5000;
        

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

