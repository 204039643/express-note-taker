// Dependencies
// =============================================================
const express = require('express')
const path = require('path')

// Sets up the Express App
// =============================================================
const app = express()
const PORT = process.env.PORT || 3000

//Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT)
})

// VIEWS ROUTES
//GET `/notes` - Should return the `notes.html` file.
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
})

//GET `*` - Should return the `index.html` file
app.get("*", (req, res) => {
res.sendFile(path.join(__dirname, "/public/index.html"));
});

//API routes
app.get('/api/config', (req, res) => {
  res.json({
    success: true
  })
})

// app.get('/api/tables', (req, res) => {
//   res.json({reservations: reservations,
//     waitlist: waitlist})
// })

// app.post('/api/tables', (req, res) => {
//   reservations.push(req.body)
//   res.json({reservations: reservations,
//     waitlist: waitlist})
// })
