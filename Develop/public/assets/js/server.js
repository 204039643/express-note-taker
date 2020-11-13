// Dependencies
// =============================================================
const express = require('express')
const path = require('path')

// Sets up the Express App
// =============================================================
const app = express()
const PORT = process.env || 3000

//Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT)
})

// VIEWS ROUTES
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
  });
  app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/tables.html"));
  });
  app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/reserve.html"));
  });

//API routes
app.get('/api/config', (req, res) => {
  res.json({
    success: true
  })
})

app.get('/api/tables', (req, res) => {
  res.json({reservations: reservations,
    waitlist: waitlist})
})

app.post('/api/tables', (req, res) => {
  reservations.push(req.body)
  res.json({reservations: reservations,
    waitlist: waitlist})
})
