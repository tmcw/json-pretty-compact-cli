#!/usr/bin/env node

var stringify = require('json-stringify-pretty-compact');
var getStdin = require('get-stdin');

getStdin().then(function(str) {
  process.stdout.write(stringify(JSON.parse(str)));
});
