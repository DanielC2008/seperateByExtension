'use strict'
const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()
const { createReadStream } = require('fs')

let [,,...rest] = process.argv
console.log('path', rest)

app.listen(PORT, () => console.log(`port listening on: ${PORT}`))