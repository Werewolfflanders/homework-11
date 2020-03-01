const path = require("path")
const fs = require("fs")
module.exports = function(app){
  app.get("/api/notes", function(req, res) {
    console.log(res)
    // notes = res
  });
    // Create New Notes - takes in JSON input
  app.post("/api/notes", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var notes = []
        const newNote = req.body;
        notes.push(newNote);
        console.log("outsideWriteFile")
        fs.writeFile("./db/db.json", JSON.stringify(notes), function(err){
            if (err){
                console.log(err)
            }
            else {
                console.log("OK")
            }
        })
        console.log(newNote);
        res.json(notes);
      });
      //DELETE
    app.delete("/api/notes/:id", function(req, res){
        var noteId = req.params.id
    })
}