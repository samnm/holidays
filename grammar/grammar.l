int  "-"?([0-9]|[1-9][0-9]+)
exp  [eE][-+]?[0-9]+
frac  "."[0-9]+
UIDS  [a-zA-Z$_]|{EIDS}|"\\"u[0-9a-f]{4}
UIDP  {UIDS}|[0-9]|{EIDP}

%%

\s+      /* skip whitespace */

{int}{frac}?{exp}?\b                                                                                       return 'NUMBER'
\"(?:'\\'[\\"bfnrt/]|'\\u'[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*\"    yytext = yytext.substr(1,yyleng-2); return 'STRING'

(\n|\r|\r\n)+[\n\r\s]? return 'NEWLINE'

"{"                     return '{'
"}"                     return '}'
"["                     return '['
"]"                     return ']'
"("                     return '('
")"                     return ')'
","                     return ','
"+"                     return '+'
"-"                     return '-'
"*"                     return '*'
"/"                     return '/'
"%"                     return '%'
">"                     return '>'
"<"                     return '<'
">="                    return '>='
"<="                    return '<='
"=="                    return '=='
"!="                    return '!='
"if"                    return 'IF'
"else"                  return 'ELSE'
"return"                return 'RETURN'
"true"                  return 'TRUE'
"false"                 return 'FALSE'
"null"                  return 'NULL'
[a-zA-Z]+[a-zA-Z0-9]*   return 'IDENT'
<<EOF>>                 return 'EOF'
.                       return 'INVALID'

%%
