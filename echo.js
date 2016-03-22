#!/usr/bin/env node
"use strict"
require('./helper')

function* echo() {
    // Use 'yield' in here
    // Your implementation here
    let str = '';
    for(let i=2;i<process.argv.length;i++) {
        str+=process.argv[i]+" "
    }
    str+="\n"
    process.stdout.write(str)
}

module.exports = echo