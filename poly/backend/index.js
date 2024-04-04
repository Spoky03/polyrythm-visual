const express = require('express')
const cors = require('cors')
const path = require('path');
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
  const file = request.params.file;
  response.sendFile(path.resolve(__dirname, `./assets/${file}.wav`));
});
  




app.use(unknownEndpoint)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})