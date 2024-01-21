const Joke = require('../models/jokes.model')

// method to find all jokes 

module.exports.findAlljokes = (req,res) =>{
    
    Joke.find()
    .then((allJokes) =>{
        res.json({jokes: allJokes})
    })
    .catch((err) =>{
        res.json({message:"something went wrong", error:err})
    })   
}

// method to find one joke

module.exports.findOneJoke = (req,res) =>{
    Joke.findOne({_id : req.params.id})
    .then(jokeFound =>{
        res.json({joke:jokeFound})
    })
    .catch((err) =>{
        res.json({message:"something went wrong", error:err})
    })
}

// create newJoke

module.exports.createJoke = (req,res) => {
    Joke.create(req.body)
    .then(newJoke =>{
        res.json({joke:newJoke})
    })
    .catch((err) =>{
        res.json({message:"something went wrong", error:err})
    })
}

// update joke 

module.exports.updateExistingJoke = (req,res) =>{
    Joke.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true , runValidators:true}
    )
    .then(updatedJoke =>{
        res.json({joke:updatedJoke})
    })
    .catch((err) =>{
        res.json({message:"something went wrong", error:err})
    })
}

// delete Joke

module.exports.deleteExistingJoke =(req,res) =>{
    Joke.deleteOne({_id:req.params.id})
    .then(result =>{
        res.json({result:result})
    })
    .catch((err) =>{
        res.json({message:"something went wrong", error:err})
    })
}