// Dependencies
// =============================================================
const express = require('express')
const path = require('path')
const fs = require('fs')

// Sets up the Express App
// =============================================================
const app = express()
const PORT = process.env.PORT || 3000

//Dynamic Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Static Middleware
app.use(express.static("public"));

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log(`Server is running on http://localhost:${PORT}`);
})

// VIEWS ROUTES
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
})

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
  });


//API routes
//test route
app.get('/api/config', (req, res) => {
  res.json({
    success: true
  })
})

// GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

app.get("/api/notes", (req, res) => {
  return res.json(JSON.parse(fs.readFileSync(path.join(__dirname, "/db/db.json"))));
});

// post
app.post("/api/notes", (req, res) => {
  // create a variable to hold the parameters
  let createNewNote = req.body;
  // returning a random id number
  createNewNote.id = uuidv4();
  // reading the file
  const notes = JSON.parse(fs.readFileSync(path.join(__dirname, './db/db.json')));
  // pushing the new note 
  notes.push(createNewNote);
  // notes.push(createNewNote);
  // writing the new db.json file
  fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify(notes));
  // console.log("new note!");
  // responding to the newly written file
  return res.json(notes);
});


//POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.


//DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.


