#!/usr/bin/env node
"use strict"

require('./helper')
let fs = require('fs')
let file=process.argv[2]

function* touch() {
    // Use 'yield' in here
    // Your implementation here
    fs.open(file, "r", function(error, fd) {
        fs.futimes(fd, new Date(), new Date(), function(err) {
            if(err)
            console.log(err);
        })
    })
}

module.exports = touch