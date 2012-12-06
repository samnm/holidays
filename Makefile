all: build test site

build:
	jison grammar/grammar.y grammar/grammar.l
	mv grammar.js lib/parser.js