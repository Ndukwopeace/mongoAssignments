const JokeController = require("../controllers/jokes.controller")

module.exports = (app)=>{
    app.get("/api/jokes",JokeController.findAlljokes)
    app.get("/api/jokes/:id",JokeController.findOneJoke)
    app.patch("/api/jokes/:id",JokeController.updateExistingJoke)
    app.post("/api/jokes",JokeController.createJoke)
    app.delete("/api/jokes/:id",JokeController.deleteExistingJoke)
}