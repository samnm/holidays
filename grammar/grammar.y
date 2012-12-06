%start Program

%%

Program
    : Expr EOF
        {return $$ = $1;}
    ;

StringLiteral
    : STRING
        { // replace escaped characters with actual character
          $$ = yytext.replace(/\\(\\|")/g, "$"+"1")
                     .replace(/\\n/g,'\n')
                     .replace(/\\r/g,'\r')
                     .replace(/\\t/g,'\t')
                     .replace(/\\v/g,'\v')
                     .replace(/\\f/g,'\f')
                     .replace(/\\b/g,'\b');
        }
    ;

NumberLiteral
    : NUMBER
        {$$ = Number(yytext);}
    ;

NullLiteral
    : NULL
        {$$ = null;}
    ;

BooleanLiteral
    : TRUE
        {$$ = true;}
    | FALSE
        {$$ = false;}
    ;

Literal
    : NullLiteral
    | BooleanLiteral
    | NumberLiteral
    | StringLiteral
    | FunctionLiteral
    ;

Expr
    : EqualityExpr
    ;

PrimaryExpr
    : CallExpr
    | Literal
    | IDENT
    ;

EqualityExpr
    : RelationalExpr
    | EqualityExpr '==' RelationalExpr
      { $$ = BinaryExpressionNode('==', $1, $3); }
    | EqualityExpr '!=' RelationalExpr
      { $$ = BinaryExpressionNode('!=', $1, $3); }
    ;

RelationalExpr
    : AdditiveExpr
    | RelationalExpr '<' AdditiveExpr
      { $$ = BinaryExpressionNode('<', $1, $3); }
    | RelationalExpr '>' AdditiveExpr
      { $$ = BinaryExpressionNode('>', $1, $3); }
    | RelationalExpr '<=' AdditiveExpr
      { $$ = BinaryExpressionNode('<=', $1, $3); }
    | RelationalExpr '>=' AdditiveExpr
      { $$ = BinaryExpressionNode('>=', $1, $3); }
    ;

AdditiveExpr
    : MultiplicativeExpr
    | AdditiveExpr '+' MultiplicativeExpr
      { $$ = BinaryExpressionNode('+', $1, $3); }
    | AdditiveExpr '-' MultiplicativeExpr
      { $$ = BinaryExpressionNode('-', $1, $3); }
    ;

MultiplicativeExpr
    : PrimaryExpr
    | MultiplicativeExpr '*' PrimaryExpr
      { $$ = BinaryExpressionNode('*', $1, $3); }
    | MultiplicativeExpr '/' PrimaryExpr
      { $$ = BinaryExpressionNode('/', $1, $3); }
    | MultiplicativeExpr '%' PrimaryExpr
      { $$ = BinaryExpressionNode('%', $1, $3); }
    ;

Block
    : '{' '}'
        {$$ = {};}
    | '{' SourceElements '}'
        {$$ = $2;}
    ;

SourceElements
    : SourceElement
        { $$ = [$1]; }
    | SourceElements SourceElement
        { $$ = $1; $$.push($2); }
    ;

SourceElement
    : IfStatement
    | CallExpr
    | ReturnStatement
    ;

Statement
    : Block
    | SourceElement
    ;

ExprStatement
    : CallExpr
    ;

ReturnStatement
    : RETURN Expr
        { $$ = ReturnStatementNode($2); }
    ;

IfStatement
    : IF '(' Expr ')' Statement
        { $$ = IfStatementNode($3, $5, null); }
    | IF '(' Expr ')' Statement ELSE Statement
        { $$ = IfStatementNode($3, $5, $7); }
    ;

FunctionLiteral
    : '(' ')' Block
        { $$ = FunctionNode([], $3); }
    | '(' FormalParameterList ')' Block
        { $$ = FunctionNode($2, $4); }
    ;

FormalParameterList
    : IDENT
        { $$ = [Node('Identifier', $1)]; }
    | FormalParameterList ',' IDENT
        { $$ = $1; $$.push(Node('Identifier', $3)); }
    ;

CallExpr
    : IDENT Arguments
        { $$ = CallExprNode($1, $2); }
    | PrimaryExpr Arguments
        { $$ = CallExprNode($1, $2); }
    | CallExpr Arguments
        { $$ = CallExprNode($1, $2); }
    ;

Arguments
    : '(' ')'
      { $$ = []; }
    | '(' ArgumentList ')'
      { $$ = $2; }
    ;

ArgumentList
    : Expr
        { $$ = [$1]; }
    | ArgumentList ',' Expr
        { $$ = $1; $$.push($3); }
    ;

%%

function Node(type, value) {
    return {
        "type" : type,
        "value" : value,
    }
}

function BinaryExpressionNode(operator, left, right) {
    return {
        "type" : "BinaryExpression",
        "operator" : operator,
        "left" : left,
        "right" : right,
    }
}

function IfStatementNode(condition, consequent, alternative) {
    return {
        "type" : "IfStatement",
        "condition" : condition,
        "consequent" : consequent,
        "alternative" : alternative,
    }
}

function CallExprNode(subject, arguments) {
    return {
        "type" : "CallExpr",
        "subject" : subject,
        "arguments" : arguments,
    }
}

function FunctionNode(params, body) {
    return {
        "type" : "Function",
        "params" : params,
        "body" : body,
    }
}

function ReturnStatementNode(expr) {
    return {
        "type" : "Return",
        "expr" : expr,
    }
}