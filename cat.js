#!/usr/bin/env node
"use strict"

require('./helper')
let fs = require('fs')
let file=process.argv[2]

function* cat() {
    // Use 'yield' in here
    // Your implementation here
     fs.readFile(file, 'utf8', function(err, data) {
        if (err) {
            process.stdout.write("cat: "+file+": No such file or directory\n")
        } else {
            process.stdout.write(data)
        }
    })
}

module.exports = cat