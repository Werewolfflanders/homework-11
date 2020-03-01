  const fs = require("fs")
// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3030;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));

app.use(express.json()); //MIDDLEWARE
app.use(express.static("public"));

require("./routes/HTMLroutes")(app)
require("./routes/APIroutes")(app)


  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log(`App listening on ${PORT}`);
  });

