#!/usr/bin/env node
"use strict"

require('./helper')

let fs = require('fs').promise
let path = require('path')
let dir = process.argv[2]?process.argv[2]:__dirname
let rec=process.argv[3]


function* ls(dir) {
  // Use 'yield' in here

  let fileNames = yield fs.readdir(dir)
  for(let file of fileNames) {
    let filePath = path.join(dir, file)

    let stats = yield fs.stat(filePath)
    if(!stats.isDirectory()) {
      process.stdout.write(file+"\n")
    }else {
      if(rec==='-R')
      yield ls(filePath)
    }
  }
  // Your implementation here
}


function* main() {
  // Call ls() and pass dir, remember to yield
  yield ls(dir)
}

module.exports = main