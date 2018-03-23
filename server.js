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


var RestSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: [3, " Restaurant name is too short! "]},
    cuisine: {type: String, required: true, minlength: [3, " Cuisine name is too short! "]},
    reviews: [{customer: {type: String, minlength: [3, "Customer name must be at least 3 characters long!"]}, stars: {type: Number}, desc: {type: String, minlength: [3, "Description must be at least 3 characters long!"]}}]
},
{timestamps: true}
)



mongoose.model("restaurants", RestSchema);
var Rest = mongoose.model("restaurants")
mongoose.Promise = global.Promise;

//for testing purposes
// var x = new Quotes;
// x.name = 'Test Author';
// x.quote.push({content:'Quote 1 yo', votes: 9});
// x.quote.push({content:'2nd quote dawg', votes: 2});
// x.quote.push({content:'its the 3rd one', votes: 14});
// x.quote.push({content:'wuba dub dub', votes: 19});
// x.save()

app.get('/restaurants', function(req, res){
    //console.log("--in server--")
     Rest.find({}, function(err, data){
         if(err){
             console.log(err);
             res.json(err);
         }
         else{
            
             res.json(data)
         }
         
     })
 })

app.post('/restaurants', function(req, res){
    let tempname = req.body.name;
    let tempcuisine = req.body.cuisine;
    // if(tempname.length < 1){
    //     res.json({message: "Error", error: "Restaurant name cannot be empty!"})
    // }
    // if(tempcuisine.length < 1){
    //     res.json({message: "Error", error: "Cuisine cannot be empty"})
    // }
   
    // else{
        var newRestaurant = new Rest();
        newRestaurant.name = req.body.name;
        newRestaurant.cuisine = req.body.cuisine;
        newRestaurant.revies = [];
        newRestaurant.save(function(err, data){
            if(err){
                console.log("error in server");
                res.json({message: "Error", error: err})
            }
            else{
                console.log("success newrest in server")
                res.json({message: "success", data: data})
            }
        })
    }
//}
)

app.delete("/restaurants/:id", function(req, res){
    console.log(req.params.id)
    Rest.remove({_id: req.params.id}, function(err){
        if(err){
            res.json(err)
        }
        else{
            res.json("successfully deleted")
        }
    })
    
})

app.post('/restaurants/:id', function(req, res){
    console.log(req.params.id)
    console.log("in server ===========")
    if (req.body.customer.length < 3 && req.body.desc.length < 3){
        res.json({message:"Error", error: "Customer name and description cannot be less than 3 characters!"})
    }
    else if(req.body.customer.length < 3){
        res.json({message: "Error", error: "customer name cannot be less than 3 characters"})
    }
    else if(req.body.desc.length < 3){
        res.json({message: "Error", error: "Description cannot be less than 3 characters"})
    }
    else{
        Rest.update({_id: req.params.id}, {$push: {reviews: req.body}}, function(err, data){
            if(err){
                res.json({message: "Error", error: err})
            }
            else{
                res.json(data)
            }
        })
    }
    
})


app.get('/getreviews/:id', function(req, res){
    Rest.find({_id: req.params.id}, function(err, data){
        if(err){
            console.log(err);
            res.json(err);
        }
        else{
           
            res.json(data)
        }
        
    })
})

app.get('/findrest/:id', function(req, res){
    Rest.findOne({_id: req.params.id}, function(err, data){
        if(err){
            res.json({message: "Error", error: err})
        }
        else{
            res.json(data)
        }
    })
})

app.put('/updaterest/:id', function(req, res){
    console.log(req.params.id)
    Rest.find({_id: req.params.id}, function(err, data){
        if(err){
            res.json({message: "Error", error: err})
        }
        else{
            if (req.body.info.name.length < 3 && req.body.info.cusine.length < 3){
                res.json({message: "Error", error: "Name and cuisine cannot be less than 3 characters"})
            }
           else if(req.body.info.name.length < 3){
                res.json({message: "Error", error: "Name cannot be less than 3 characters"})
            }
            else if(req.body.info.cuisine.length < 3){
                res.json({message: "Error", error: "Cuisine cannot be less than 3 characters"})
            }
            else{
                Rest.update({_id: req.params.id}, {$set: req.body.info}, function(error, data){
                    if(error){
                        res.json({message: "Error", error: errors})
                    }
                    else{
                        res.json(data)
                    }
                })
            }
           
        }
    })
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./examAngular/dist/index.html"))
  })

app.listen(8000, function() {
    console.log("listening on port 8000")
});