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
	if (token.type !== tokenType) {
		panic("Expected " + tokenType + ", received " + token.type);
	}
}

function evaluateProgram(token) {
	var callExpr = {
		type : "CallExpr",
		subject : token,
		arguments : [libToken(console.log)]
	};
	return evaluateCallExpr(callExpr, {});
}

function libToken(func) {
	return {
		type : "Function",
		body : {
			type : "LibCall",
			func : func,
		},
		params : [{
	        "type" : "Identifier",
	        "name" : "param",
	    }],
	};
}

function evaluateLibCall(token, environ) {
	return token.func(environ['param'])
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
			return evaluateIdentifier(token, environ);
		case "LibCall":
			return evaluateLibCall(token, environ);
		case "StatementList":
			return evaluateStatementList(token, environ);
		default:
			return token
	}
}

function evaluateStatementList(token, environ) {
	expect(token, "StatementList");
	for (var i = 0; i < token.list.length; i++) {
		var result = evaluate(token.list[i], environ);
		if (result && result.type === "Return") {
			return evaluate(result.expr, environ);
		}
	}
}

function evaluateBinaryExpr(token, environ) {
	expect(token, "BinaryExpression")

	var left = evaluate(token.left, environ)
	var right = evaluate(token.right, environ)

	switch (token.operator) {
		case '==':
			return left === right;
		case '!=':
			return left !== right;
		case '<':
			return left < right;
		case '>':
			return left > right;
		case '<=':
			return left = right;
		case '>=':
			return left = right;
		case '+':
			return left + right;
		case '-':
			return left - right;
		case '*':
			return left * right;
		case '/':
			return left / right;
		case '%':
			return left % right;
		default:
			panic("Unrecognised operator " + token.operator);
	}
}

function evaluateIfStatement(token, environ) {
	expect(token, "IfStatement")

	var condition = evaluate(token.condition, environ);
	if (condition) {
		return evaluate(token.consequent, environ)
	} else if (token.alternative) {
		return evaluate(token.alternative, environ)
	}
}

function evaluateCallExpr(token, environ) {
	expect(token, "CallExpr")
	
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
		evalEnviron[params[i].name] = evaluate(argTokens[i], environ);
	}
	
	return evaluate(functionToken.body, evalEnviron);
}

function evaluateFunction(token, environ) {
	expect(token, "Function")
	return token
}

function evaluateReturnStatement(token, environ) {
	expect(token, "Return")
	return token
}

function evaluateIdentifier(token, environ) {
	expect(token, "Identifier")
	
	if (environ.hasOwnProperty(token.name)) {
		return environ[token.name];
	}

	return token;
}

var file = fs.readFileSync(process.argv[2], 'ascii')

var parser = new Parser()
var token = parser.parse(file)

evaluateProgram(token)
