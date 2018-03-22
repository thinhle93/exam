var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_first_db');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var path = require('path');

var validate = require('mongoose-validator');

var express = require('express');
app.use(express.static( __dirname + '/examAngular/dist' ));

// 

// var nameValidator = [
// 	validate({
// 		validator: "isLength",
// 		arguments: [3,50],
// 		message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
// 	})
// ]


// var {{QuoteSchema}} = new mongoose.Schema({
//     name: {type: String, required: true, minlength: [3, "too short"]},
//     //validate: nameValidator},
//     quote: [{content: {type: String}, votes: {type: Number, default: 0}}]
// },
// {timestamps: true}
// )



// mongoose.model({collectionname}, {{QuoteSchema}});
// var {{SchemaName}} = mongoose.model({collectionname})
// mongoose.Promise = global.Promise;

//for testing purposes
// var x = new Quotes;
// x.name = 'Test Author';
// x.quote.push({content:'Quote 1 yo', votes: 9});
// x.quote.push({content:'2nd quote dawg', votes: 2});
// x.quote.push({content:'its the 3rd one', votes: 14});
// x.quote.push({content:'wuba dub dub', votes: 19});
// x.save()




app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./examAngular/dist/index.html"))
  })

app.listen(8000, function() {
    console.log("listening on port 8000")
});