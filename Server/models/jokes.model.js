// import mongoose from the config file
const mongoose  = require("mongoose");


// create schema

const jokeSchema = new mongoose.Schema({
    setup:{
        type : String,
        required : [true,"setup is required"],
        minLength :[10,"should be atleast 10 characters"]
    },
    punchline:{
        type : String,
        required : [true,"punchLine is required"],
        minLength :[3,"should be atleast 10 characters"]
    }
},{timeStamp: true});

// create a Document on the Database jokeSchema , with the structure given above 

const Joke = mongoose.model("Joke", jokeSchema)

module.exports = Joke;