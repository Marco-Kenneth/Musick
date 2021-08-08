/* 
  The backend starts a server that listens at port 5000 for connections.
  The reason why port is is 5000 is because our react server is on port 3000
  which is the default for express. 
*/
const express = require('express')
const app = express()
const port = 5000

// req stands for request
// res stands for response
// Each endpoint here is an API route for the frontend to send or receive data from the backend
app.get('/api/printFromBackend', (req, res) => {
  res.send('Hello From the backend!')
})

app.post('/api/sendDataToBackend', function (req, res) {
  res.send(`I received your POST request. This is what you sent me: ${req.body.post}`)
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
