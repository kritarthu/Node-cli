#!/usr/bin/env node

"use strict"
require('./helper')

let fs = require('fs').promise
let path = require('path')
let dir = process.argv[2]

function* mkdir(dir) {
  // Use 'yield' in here
  try {
    let stats = yield fs.stat(dir)
    process.stdout.write("mkdir: "+dir+": File exists")
  } catch(err) {
    if (err && err.errno === -2) {
      //Create the directory, call the callback.
      try {
        yield fs.mkdir(dir);
      } catch(e) {
        console.log(e.stack)

      }
    }
  }
}

function* main() {
  yield mkdir(dir)
}

module.exports = main