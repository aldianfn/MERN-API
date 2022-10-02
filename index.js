const express = require('express')
const app = express()

app.use(() => {
    console.log('Server running')
    console.log('Hello')
})

app.listen(5000)
