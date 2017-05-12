'use strict'

const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()

const { rename, readdir, existsSync } = require('fs')
const path = require('path')
const ncp = require('ncp').ncp 
const mkdirp = require('mkdirp')

let [,,...rest] = process.argv
let startDir = rest[0]
let sortedDir = rest[1]

const getExt = fullFile => fullFile.slice(fullFile.lastIndexOf(".") + 1 )

const sortFiles = (err, files) => {

  files.map( file => {
    //get ext
    let ext = getExt(file)
    //create new path
    let transferTo = path.join(sortedDir, ext)
    //check if dir w/ ext name exists else create it
    if (!existsSync(transferTo)) {
      mkdirp(transferTo)
    } 
    ncp(path.join( startDir, file ), path.join(transferTo, file))
  }) 
     
  console.log('finished!')
}

readdir(startDir, sortFiles)

app.listen()