%start HolidaysText



%%

HolidaysString
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

HolidaysNumber
    : NUMBER
        {$$ = Number(yytext);}
    ;

HolidaysNullLiteral
    : NULL
        {$$ = null;}
    ;

HolidaysBooleanLiteral
    : TRUE
        {$$ = true;}
    | FALSE
        {$$ = false;}
    ;

HolidaysText
    : HolidaysValue EOF
        {return $$ = $1;}
    ;

HolidaysValue
    : HolidaysNullLiteral
    | HolidaysBooleanLiteral
    | HolidaysString
    | HolidaysNumber
    | HolidaysObject
    ;

HolidaysObject
    : '{' '}'
        {{$$ = {};}}
    | '{' HolidaysMemberList '}'
        {$$ = $2;}
    ;

HolidaysMember
    : HolidaysString ':' HolidaysValue
        {$$ = [$1, $3];}
    ;

HolidaysMemberList
    : HolidaysMember
        {{$$ = {}; $$[$1[0]] = $1[1];}}
    | HolidaysMemberList ',' HolidaysMember
        {$$ = $1; $1[$3[0]] = $3[1];}
    ;

HolidaysElementList
    : HolidaysValue
        {$$ = [$1];}
    | HolidaysElementList ',' HolidaysValue
        {$$ = $1; $1.push($3);}
    ;
