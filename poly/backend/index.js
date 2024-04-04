const express = require('express')
const cors = require('cors')
const path = require('path');
const fs = require('fs');
// require('dotenv').config()
const app = express()
app.use(express.static('dist'))
app.use(express.json())
app.use(cors())



const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}



app.get('/', (request, response) => {
  response.send('<h1>Poly</h1>')
})

app.get('/api', (request, response) => {
  response.send('<h1>Poly API</h1>')
})

app.get('/api/:file', (request, response) => {
  try {
    const file = request.params.file;
    const filePath = path.resolve(__dirname, `./assets/${file}.wav`);

    // Check if the file exists before trying to send it
    if (fs.existsSync(filePath)) {
      response.sendFile(filePath);
    } else {
      response.status(404).json({ message: 'File not found' });
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: 'An error occurred while trying to send the file' });
  }
});
  

app.get('*', (req, res) => res.sendFile(path.resolve('dist', 'index.html')));


app.use(unknownEndpoint)

console.log('process.env.PORT', process.env.PORT)
const PORT = process.env.PORT || 80
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})