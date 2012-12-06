var fs = require('fs');
var Parser = require('./lib/parser.js').Parser;

if (process.argv.length != 3) {
	console.log("usage: " + process.argv[0] + process.argv[1] + " <filename>")
	process.exit()
}

file = fs.readFileSync(process.argv[2], 'ascii')
console.log(file)

var parser = new Parser()
console.log(parser.parse(file))