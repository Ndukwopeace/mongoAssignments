const express = require("express");
const port = 3000
const app = express()

require("./config/mongoose.config")

app.use(express.json(),express.urlencoded({extended:true}))

const AllJokesRoutes = require("./routes/jokes.route")

AllJokesRoutes(app)

app.listen(port, () => console.log("The server is all fired up on port : " + port))