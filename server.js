'use strict'

const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()

const { rename, readdir, existsSync } = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

let [,,...rest] = process.argv
let startDir = rest[0]
let sortedDir = rest[1]

const getExt = fullFile => fullFile.slice(fullFile.lastIndexOf(".") + 1 )

const sortFiles = (err, files) => {
  console.log('SortFiles Error:', err)
  let Counter = 1
  files.map( file => {
    //get ext
    let ext = getExt(file)
    //create new path
    let transferTo = path.join(sortedDir, ext)
    //check if dir w/ ext name exists else create it
    if (!existsSync(transferTo)) {
      mkdirp(transferTo)
    }
    console.log('Location', path.join(transferTo, file), "Counter", Counter)
    rename(path.join( startDir, file ), path.join(transferTo, file))
    Counter++
  }) 

  console.log('finished!')
}

readdir(startDir, sortFiles)



app.listen()