const express = require('express')
const app = express()
const port = 3333;

app.use(express.static('dist'))

app.listen(port, () => console.log(`You get a 5-star rating on port ${port}`))