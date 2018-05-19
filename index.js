'use strict'
const fs = require('fs');

exports.handler = (event, context, callback) => {
    fs.readFile('./build/index.html','utf-8',function(err,data) {
        callback(null,data);
    });
}
