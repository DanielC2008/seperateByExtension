'use strict'

const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()
const { rename, readdir } = require('fs')
const path = require('path')
const ncp = require('ncp').ncp 

let [,,...rest] = process.argv
let transferFrom = rest[0]
let transferTo = rest[1]
let callback = () => console.log('done')

let readdirComplete = (err, files) => {
  files.forEach( file => {
    let fromPath = path.join( transferFrom, file )
    let toPath = path.join( transferTo, file )
    ncp(fromPath, toPath, callback)
  })  

}
readdir(transferFrom, readdirComplete)

app.listen()