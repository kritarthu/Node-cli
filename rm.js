#!/usr/bin/env node

"use strict"
require('./helper')

let fs = require('fs').promise
let path = require('path')
let dir = process.argv[2]


function* rm(dir) {
  let stats = yield fs.stat(dir)
  if(stats.isDirectory()) {
    let fileNames = yield fs.readdir(dir)
    for(let file of fileNames) {
      let filePath = path.join(dir, file)
      yield rm(filePath)
    }
    yield fs.rmdir(dir)
  } else {
    yield fs.unlink(dir)
  }
}


function* main() {
  // Call ls() and pass dir, remember to yield
  yield rm(dir)
}

module.exports = main