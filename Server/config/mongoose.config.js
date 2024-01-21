// import Mongoose
const Mongoose = require("mongoose");

// connect it to the database

Mongoose.connect('mongodb://127.0.0.1:27017/Jokes',{
    // to fix deprecation warnings 
    useNewUrlParser: true,
    UseUnifiedTopology : true
})
.then(()=> console.log("Established a connection to the database"))
.catch((err)=>console.log("Something went wrong when connecting to the database ", err));
