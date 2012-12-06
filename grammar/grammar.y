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
      { $$ = Node('BinaryExpression', '=='); }
    | EqualityExpr '!=' RelationalExpr
      { $$ = Node('BinaryExpression', '!='); }
    ;

RelationalExpr
    : AdditiveExpr
    | RelationalExpr '<' AdditiveExpr
      { $$ = Node('BinaryExpression', '<'); }
    | RelationalExpr '>' AdditiveExpr
      { $$ = Node('BinaryExpression', '>'); }
    | RelationalExpr '<=' AdditiveExpr
      { $$ = Node('BinaryExpression', '<='); }
    | RelationalExpr '>=' AdditiveExpr
      { $$ = Node('BinaryExpression', '>='); }
    ;

AdditiveExpr
    : MultiplicativeExpr
    | AdditiveExpr '+' MultiplicativeExpr
      { $$ = Node('BinaryExpression', '+'); }
    | AdditiveExpr '-' MultiplicativeExpr
      { $$ = Node('BinaryExpression', '-'); }
    ;

MultiplicativeExpr
    : PrimaryExpr
    | MultiplicativeExpr '*' PrimaryExpr
      { $$ = Node('BinaryExpression', '*'); }
    | MultiplicativeExpr '/' PrimaryExpr
      { $$ = Node('BinaryExpression', '/'); }
    | MultiplicativeExpr '%' PrimaryExpr
      { $$ = Node('BinaryExpression', '%'); }
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
        { $$ = [Node('Return', $2)]; }
    ;

IfStatement
    : IF '(' Expr ')' Statement
    | IF '(' Expr ')' ELSE Statement
    ;

FunctionLiteral
    : '(' ')' Block
        {$$ = null;}
    | '(' FormalParameterList ')' Block
        {$$ = $2;}
    ;

FormalParameterList
    : IDENT
        { $$ = [Node('Identifier', $1)]; }
    | FormalParameterList ',' IDENT
        { $$ = $1; $$.push(Node('Identifier', $3)); }
    ;

CallExpr
    : IDENT Arguments
    | PrimaryExpr Arguments
    | CallExpr Arguments
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