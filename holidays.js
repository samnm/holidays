var fs = require('fs');
var Parser = require('./lib/parser.js').Parser;

if (process.argv.length != 3) {
	console.log("usage: " + process.argv[0] + process.argv[1] + " <filename>")
	process.exit()
}

function panic(error) {
	console.log(error)
	process.exit()
}

function expect(token, tokenType) {
	console.log("Expecting " + tokenType)
	if (token.type !== tokenType) {
		panic("Expected " + tokenType);
	}
}

function evaluate(token, environ) {
	switch (token.type) {
		case "BinaryExpression":
			return evaluateBinaryExpr(token, environ);
		case "IfStatement":
			return evaluateIfStatement(token, environ);
		case "CallExpr":
			return evaluateCallExpr(token, environ);
		case "Function":
			return evaluateFunction(token, environ);
		case "Return":
			return evaluateReturnStatement(token, environ);
		case "Identifier":
			return evaluateIdentifier(token);
		default:
			return token
	}
}

function evaluateBinaryExpr(token, environ) {
	expect(token, "BinaryExpression")
}

function evaluateIfStatement(token, environ) {
	expect(token, "IfStatement")
}

function evaluateCallExpr(token, environ) {
	expect(token, "CallExpr")

	console.log(token.subject)
	var functionToken = evaluate(token.subject, environ);
	var evalEnviron = {};
	for (var key in environ) {
		if (environ.hasOwnProperty(key)) {
			evalEnviron[key] = environ[key]
		}
	}

	var argTokens = token.arguments;
	var params = functionToken.params;
	for (var i = 0; i < argTokens.length; i++) {
		evalEnviron[params[i].name] = argTokens[i];
	}
	
	console.log(functionToken)
	for (var i = 0; i < functionToken.body.length; i++) {
		console.log(functionToken.body[i].expr)
	}
}

function evaluateFunction(token, environ) {
	expect(token, "Function")
	return token
}

function evaluateReturnStatement(token, environ) {
	expect(token, "Return")
}

function evaluateIdentifier(token, environ) {
	expect(token, "Identifier")

	if (!environ.hasOwnProperty(token.name)) {
		environ[token.name] = {};
	}

	return environ[token.name];
}

var file = fs.readFileSync(process.argv[2], 'ascii')

var parser = new Parser()
var token = parser.parse(file)

evaluate(token, {})
console.log(token)
