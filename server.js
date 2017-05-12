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

let getExt = fullFile => fullFile.slice(fullFile.lastIndexOf(".") + 1 )


let readdirComplete = (err, files) => {
  files.forEach( file => {
    //get ext
    let ext = getExt(file)
    //check if file is in dir w/ ext name is in toPath  
    //if dir exists
      //copy file into this dir
    // else 
      // create dir copy file
    // let fromPath = path.join( transferFrom, file )
    // let toPath = path.join( transferTo, file )
    // ncp(fromPath, toPath)
  })  

}
readdir(transferFrom, readdirComplete)

app.listen()