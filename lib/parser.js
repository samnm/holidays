/* Jison generated parser */
var grammar = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"Program":3,"FunctionLiteral":4,"EOF":5,"StringLiteral":6,"STRING":7,"NumberLiteral":8,"NUMBER":9,"NullLiteral":10,"NULL":11,"BooleanLiteral":12,"TRUE":13,"FALSE":14,"Literal":15,"Identifier":16,"IDENT":17,"Expr":18,"EqualityExpr":19,"PrimaryExpr":20,"CallExpr":21,"RelationalExpr":22,"==":23,"!=":24,"AdditiveExpr":25,"<":26,">":27,"<=":28,">=":29,"MultiplicativeExpr":30,"+":31,"-":32,"*":33,"/":34,"%":35,"Block":36,"{":37,"}":38,"SourceElements":39,"SourceElement":40,"IfStatement":41,"ReturnStatement":42,"Statement":43,"ExprStatement":44,"RETURN":45,"IF":46,"(":47,")":48,"ELSE":49,"FormalParameterList":50,",":51,"Arguments":52,"ArgumentList":53,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"STRING",9:"NUMBER",11:"NULL",13:"TRUE",14:"FALSE",17:"IDENT",23:"==",24:"!=",26:"<",27:">",28:"<=",29:">=",31:"+",32:"-",33:"*",34:"/",35:"%",37:"{",38:"}",45:"RETURN",46:"IF",47:"(",48:")",49:"ELSE",51:","},
productions_: [0,[3,2],[6,1],[8,1],[10,1],[12,1],[12,1],[15,1],[15,1],[15,1],[15,1],[15,1],[16,1],[18,1],[20,1],[20,1],[20,1],[19,1],[19,3],[19,3],[22,1],[22,3],[22,3],[22,3],[22,3],[25,1],[25,3],[25,3],[30,1],[30,3],[30,3],[30,3],[36,2],[36,3],[39,1],[39,2],[40,1],[40,1],[40,1],[43,1],[43,1],[44,1],[42,2],[41,5],[41,7],[4,3],[4,4],[50,1],[50,3],[21,2],[21,2],[21,2],[52,2],[52,3],[53,1],[53,3]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:return this.$ = $$[$0-1];
break;
case 2: // replace escaped characters with actual character
            this.$ = yytext.replace(/\\(\\|")/g, "$"+"1")
                     .replace(/\\n/g,'\n')
                     .replace(/\\r/g,'\r')
                     .replace(/\\t/g,'\t')
                     .replace(/\\v/g,'\v')
                     .replace(/\\f/g,'\f')
                     .replace(/\\b/g,'\b');
        
break;
case 3:this.$ = Number(yytext);
break;
case 4:this.$ = null;
break;
case 5:this.$ = true;
break;
case 6:this.$ = false;
break;
case 12:this.$ = IdentifierNode($$[$0]);
break;
case 18: this.$ = BinaryExpressionNode('==', $$[$0-2], $$[$0]); 
break;
case 19: this.$ = BinaryExpressionNode('!=', $$[$0-2], $$[$0]); 
break;
case 21: this.$ = BinaryExpressionNode('<', $$[$0-2], $$[$0]); 
break;
case 22: this.$ = BinaryExpressionNode('>', $$[$0-2], $$[$0]); 
break;
case 23: this.$ = BinaryExpressionNode('<=', $$[$0-2], $$[$0]); 
break;
case 24: this.$ = BinaryExpressionNode('>=', $$[$0-2], $$[$0]); 
break;
case 26: this.$ = BinaryExpressionNode('+', $$[$0-2], $$[$0]); 
break;
case 27: this.$ = BinaryExpressionNode('-', $$[$0-2], $$[$0]); 
break;
case 29: this.$ = BinaryExpressionNode('*', $$[$0-2], $$[$0]); 
break;
case 30: this.$ = BinaryExpressionNode('/', $$[$0-2], $$[$0]); 
break;
case 31: this.$ = BinaryExpressionNode('%', $$[$0-2], $$[$0]); 
break;
case 32:this.$ = StatementListNode([]);
break;
case 33:this.$ = $$[$0-1];
break;
case 34: this.$ = StatementListNode([$$[$0]]); 
break;
case 35: this.$ = $$[$0-1]; this.$.list.push($$[$0]); 
break;
case 42: this.$ = ReturnStatementNode($$[$0]); 
break;
case 43: this.$ = IfStatementNode($$[$0-2], $$[$0], null); 
break;
case 44: this.$ = IfStatementNode($$[$0-4], $$[$0-2], $$[$0]); 
break;
case 45: this.$ = FunctionNode([], $$[$0]); 
break;
case 46: this.$ = FunctionNode($$[$0-2], $$[$0]); 
break;
case 47: this.$ = [$$[$0]]; 
break;
case 48: this.$ = $$[$0-2]; this.$.push($$[$0]); 
break;
case 49: this.$ = CallExprNode($$[$0-1], $$[$0]); 
break;
case 50: this.$ = CallExprNode($$[$0-1], $$[$0]); 
break;
case 51: this.$ = CallExprNode($$[$0-1], $$[$0]); 
break;
case 52: this.$ = []; 
break;
case 53: this.$ = $$[$0-1]; 
break;
case 54: this.$ = [$$[$0]]; 
break;
case 55: this.$ = $$[$0-2]; this.$.push($$[$0]); 
break;
}
},
table: [{3:1,4:2,47:[1,3]},{1:[3]},{5:[1,4]},{16:7,17:[1,8],48:[1,5],50:6},{1:[2,1]},{36:9,37:[1,10]},{48:[1,11],51:[1,12]},{48:[2,47],51:[2,47]},{17:[2,12],23:[2,12],24:[2,12],26:[2,12],27:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],33:[2,12],34:[2,12],35:[2,12],38:[2,12],45:[2,12],46:[2,12],47:[2,12],48:[2,12],49:[2,12],51:[2,12]},{5:[2,45],17:[2,45],23:[2,45],24:[2,45],26:[2,45],27:[2,45],28:[2,45],29:[2,45],31:[2,45],32:[2,45],33:[2,45],34:[2,45],35:[2,45],38:[2,45],45:[2,45],46:[2,45],47:[2,45],48:[2,45],49:[2,45],51:[2,45]},{4:21,16:20,17:[1,8],21:17,38:[1,13],39:14,40:15,41:16,42:18,45:[1,22],46:[1,19],47:[1,3]},{36:23,37:[1,10]},{16:24,17:[1,8]},{5:[2,32],17:[2,32],23:[2,32],24:[2,32],26:[2,32],27:[2,32],28:[2,32],29:[2,32],31:[2,32],32:[2,32],33:[2,32],34:[2,32],35:[2,32],38:[2,32],45:[2,32],46:[2,32],47:[2,32],48:[2,32],49:[2,32],51:[2,32]},{4:21,16:20,17:[1,8],21:17,38:[1,25],40:26,41:16,42:18,45:[1,22],46:[1,19],47:[1,3]},{17:[2,34],38:[2,34],45:[2,34],46:[2,34],47:[2,34]},{17:[2,36],38:[2,36],45:[2,36],46:[2,36],47:[2,36],49:[2,36]},{17:[2,37],38:[2,37],45:[2,37],46:[2,37],47:[1,28],49:[2,37],52:27},{17:[2,38],38:[2,38],45:[2,38],46:[2,38],47:[2,38],49:[2,38]},{47:[1,29]},{47:[1,28],52:30},{47:[1,28],52:31},{4:41,6:45,7:[1,50],8:44,9:[1,49],10:42,11:[1,46],12:43,13:[1,47],14:[1,48],15:39,16:40,17:[1,8],18:32,19:33,20:37,21:38,22:34,25:35,30:36,47:[1,3]},{5:[2,46],17:[2,46],23:[2,46],24:[2,46],26:[2,46],27:[2,46],28:[2,46],29:[2,46],31:[2,46],32:[2,46],33:[2,46],34:[2,46],35:[2,46],38:[2,46],45:[2,46],46:[2,46],47:[2,46],48:[2,46],49:[2,46],51:[2,46]},{48:[2,48],51:[2,48]},{5:[2,33],17:[2,33],23:[2,33],24:[2,33],26:[2,33],27:[2,33],28:[2,33],29:[2,33],31:[2,33],32:[2,33],33:[2,33],34:[2,33],35:[2,33],38:[2,33],45:[2,33],46:[2,33],47:[2,33],48:[2,33],49:[2,33],51:[2,33]},{17:[2,35],38:[2,35],45:[2,35],46:[2,35],47:[2,35]},{17:[2,51],23:[2,51],24:[2,51],26:[2,51],27:[2,51],28:[2,51],29:[2,51],31:[2,51],32:[2,51],33:[2,51],34:[2,51],35:[2,51],38:[2,51],45:[2,51],46:[2,51],47:[2,51],48:[2,51],49:[2,51],51:[2,51]},{4:41,6:45,7:[1,50],8:44,9:[1,49],10:42,11:[1,46],12:43,13:[1,47],14:[1,48],15:39,16:40,17:[1,8],18:53,19:33,20:37,21:38,22:34,25:35,30:36,47:[1,3],48:[1,51],53:52},{4:41,6:45,7:[1,50],8:44,9:[1,49],10:42,11:[1,46],12:43,13:[1,47],14:[1,48],15:39,16:40,17:[1,8],18:54,19:33,20:37,21:38,22:34,25:35,30:36,47:[1,3]},{17:[2,49],23:[2,49],24:[2,49],26:[2,49],27:[2,49],28:[2,49],29:[2,49],31:[2,49],32:[2,49],33:[2,49],34:[2,49],35:[2,49],38:[2,49],45:[2,49],46:[2,49],47:[2,49],48:[2,49],49:[2,49],51:[2,49]},{17:[2,50],23:[2,50],24:[2,50],26:[2,50],27:[2,50],28:[2,50],29:[2,50],31:[2,50],32:[2,50],33:[2,50],34:[2,50],35:[2,50],38:[2,50],45:[2,50],46:[2,50],47:[2,50],48:[2,50],49:[2,50],51:[2,50]},{17:[2,42],38:[2,42],45:[2,42],46:[2,42],47:[2,42],49:[2,42]},{17:[2,13],23:[1,55],24:[1,56],38:[2,13],45:[2,13],46:[2,13],47:[2,13],48:[2,13],49:[2,13],51:[2,13]},{17:[2,17],23:[2,17],24:[2,17],26:[1,57],27:[1,58],28:[1,59],29:[1,60],38:[2,17],45:[2,17],46:[2,17],47:[2,17],48:[2,17],49:[2,17],51:[2,17]},{17:[2,20],23:[2,20],24:[2,20],26:[2,20],27:[2,20],28:[2,20],29:[2,20],31:[1,61],32:[1,62],38:[2,20],45:[2,20],46:[2,20],47:[2,20],48:[2,20],49:[2,20],51:[2,20]},{17:[2,25],23:[2,25],24:[2,25],26:[2,25],27:[2,25],28:[2,25],29:[2,25],31:[2,25],32:[2,25],33:[1,63],34:[1,64],35:[1,65],38:[2,25],45:[2,25],46:[2,25],47:[2,25],48:[2,25],49:[2,25],51:[2,25]},{17:[2,28],23:[2,28],24:[2,28],26:[2,28],27:[2,28],28:[2,28],29:[2,28],31:[2,28],32:[2,28],33:[2,28],34:[2,28],35:[2,28],38:[2,28],45:[2,28],46:[2,28],47:[2,28],48:[2,28],49:[2,28],51:[2,28]},{17:[2,14],23:[2,14],24:[2,14],26:[2,14],27:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],33:[2,14],34:[2,14],35:[2,14],38:[2,14],45:[2,14],46:[2,14],47:[1,28],48:[2,14],49:[2,14],51:[2,14],52:27},{17:[2,15],23:[2,15],24:[2,15],26:[2,15],27:[2,15],28:[2,15],29:[2,15],31:[2,15],32:[2,15],33:[2,15],34:[2,15],35:[2,15],38:[2,15],45:[2,15],46:[2,15],47:[2,15],48:[2,15],49:[2,15],51:[2,15]},{17:[2,16],23:[2,16],24:[2,16],26:[2,16],27:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],33:[2,16],34:[2,16],35:[2,16],38:[2,16],45:[2,16],46:[2,16],47:[1,28],48:[2,16],49:[2,16],51:[2,16],52:30},{17:[2,11],23:[2,11],24:[2,11],26:[2,11],27:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],33:[2,11],34:[2,11],35:[2,11],38:[2,11],45:[2,11],46:[2,11],47:[1,28],48:[2,11],49:[2,11],51:[2,11],52:31},{17:[2,7],23:[2,7],24:[2,7],26:[2,7],27:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],33:[2,7],34:[2,7],35:[2,7],38:[2,7],45:[2,7],46:[2,7],47:[2,7],48:[2,7],49:[2,7],51:[2,7]},{17:[2,8],23:[2,8],24:[2,8],26:[2,8],27:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],33:[2,8],34:[2,8],35:[2,8],38:[2,8],45:[2,8],46:[2,8],47:[2,8],48:[2,8],49:[2,8],51:[2,8]},{17:[2,9],23:[2,9],24:[2,9],26:[2,9],27:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],33:[2,9],34:[2,9],35:[2,9],38:[2,9],45:[2,9],46:[2,9],47:[2,9],48:[2,9],49:[2,9],51:[2,9]},{17:[2,10],23:[2,10],24:[2,10],26:[2,10],27:[2,10],28:[2,10],29:[2,10],31:[2,10],32:[2,10],33:[2,10],34:[2,10],35:[2,10],38:[2,10],45:[2,10],46:[2,10],47:[2,10],48:[2,10],49:[2,10],51:[2,10]},{17:[2,4],23:[2,4],24:[2,4],26:[2,4],27:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],33:[2,4],34:[2,4],35:[2,4],38:[2,4],45:[2,4],46:[2,4],47:[2,4],48:[2,4],49:[2,4],51:[2,4]},{17:[2,5],23:[2,5],24:[2,5],26:[2,5],27:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],33:[2,5],34:[2,5],35:[2,5],38:[2,5],45:[2,5],46:[2,5],47:[2,5],48:[2,5],49:[2,5],51:[2,5]},{17:[2,6],23:[2,6],24:[2,6],26:[2,6],27:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],33:[2,6],34:[2,6],35:[2,6],38:[2,6],45:[2,6],46:[2,6],47:[2,6],48:[2,6],49:[2,6],51:[2,6]},{17:[2,3],23:[2,3],24:[2,3],26:[2,3],27:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],33:[2,3],34:[2,3],35:[2,3],38:[2,3],45:[2,3],46:[2,3],47:[2,3],48:[2,3],49:[2,3],51:[2,3]},{17:[2,2],23:[2,2],24:[2,2],26:[2,2],27:[2,2],28:[2,2],29:[2,2],31:[2,2],32:[2,2],33:[2,2],34:[2,2],35:[2,2],38:[2,2],45:[2,2],46:[2,2],47:[2,2],48:[2,2],49:[2,2],51:[2,2]},{17:[2,52],23:[2,52],24:[2,52],26:[2,52],27:[2,52],28:[2,52],29:[2,52],31:[2,52],32:[2,52],33:[2,52],34:[2,52],35:[2,52],38:[2,52],45:[2,52],46:[2,52],47:[2,52],48:[2,52],49:[2,52],51:[2,52]},{48:[1,66],51:[1,67]},{48:[2,54],51:[2,54]},{48:[1,68]},{4:41,6:45,7:[1,50],8:44,9:[1,49],10:42,11:[1,46],12:43,13:[1,47],14:[1,48],15:39,16:40,17:[1,8],20:37,21:38,22:69,25:35,30:36,47:[1,3]},{4:41,6:45,7:[1,50],8:44,9:[1,49],10:42,11:[1,46],12:43,13:[1,47],14:[1,48],15:39,16:40,17:[1,8],20:37,21:38,22:70,25:35,30:36,47:[1,3]},{4:41,6:45,7:[1,50],8:44,9:[1,49],10:42,11:[1,46],12:43,13:[1,47],14:[1,48],15:39,16:40,17:[1,8],20:37,21:38,25:71,30:36,47:[1,3]},{4:41,6:45,7:[1,50],8:44,9:[1,49],10:42,11:[1,46],12:43,13:[1,47],14:[1,48],15:39,16:40,17:[1,8],20:37,21:38,25:72,30:36,47:[1,3]},{4:41,6:45,7:[1,50],8:44,9:[1,49],10:42,11:[1,46],12:43,13:[1,47],14:[1,48],15:39,16:40,17:[1,8],20:37,21:38,25:73,30:36,47:[1,3]},{4:41,6:45,7:[1,50],8:44,9:[1,49],10:42,11:[1,46],12:43,13:[1,47],14:[1,48],15:39,16:40,17:[1,8],20:37,21:38,25:74,30:36,47:[1,3]},{4:41,6:45,7:[1,50],8:44,9:[1,49],10:42,11:[1,46],12:43,13:[1,47],14:[1,48],15:39,16:40,17:[1,8],20:37,21:38,30:75,47:[1,3]},{4:41,6:45,7:[1,50],8:44,9:[1,49],10:42,11:[1,46],12:43,13:[1,47],14:[1,48],15:39,16:40,17:[1,8],20:37,21:38,30:76,47:[1,3]},{4:41,6:45,7:[1,50],8:44,9:[1,49],10:42,11:[1,46],12:43,13:[1,47],14:[1,48],15:39,16:40,17:[1,8],20:77,21:38,47:[1,3]},{4:41,6:45,7:[1,50],8:44,9:[1,49],10:42,11:[1,46],12:43,13:[1,47],14:[1,48],15:39,16:40,17:[1,8],20:78,21:38,47:[1,3]},{4:41,6:45,7:[1,50],8:44,9:[1,49],10:42,11:[1,46],12:43,13:[1,47],14:[1,48],15:39,16:40,17:[1,8],20:79,21:38,47:[1,3]},{17:[2,53],23:[2,53],24:[2,53],26:[2,53],27:[2,53],28:[2,53],29:[2,53],31:[2,53],32:[2,53],33:[2,53],34:[2,53],35:[2,53],38:[2,53],45:[2,53],46:[2,53],47:[2,53],48:[2,53],49:[2,53],51:[2,53]},{4:41,6:45,7:[1,50],8:44,9:[1,49],10:42,11:[1,46],12:43,13:[1,47],14:[1,48],15:39,16:40,17:[1,8],18:80,19:33,20:37,21:38,22:34,25:35,30:36,47:[1,3]},{4:21,16:20,17:[1,8],21:17,36:82,37:[1,10],40:83,41:16,42:18,43:81,45:[1,22],46:[1,19],47:[1,3]},{17:[2,18],23:[2,18],24:[2,18],26:[1,57],27:[1,58],28:[1,59],29:[1,60],38:[2,18],45:[2,18],46:[2,18],47:[2,18],48:[2,18],49:[2,18],51:[2,18]},{17:[2,19],23:[2,19],24:[2,19],26:[1,57],27:[1,58],28:[1,59],29:[1,60],38:[2,19],45:[2,19],46:[2,19],47:[2,19],48:[2,19],49:[2,19],51:[2,19]},{17:[2,21],23:[2,21],24:[2,21],26:[2,21],27:[2,21],28:[2,21],29:[2,21],31:[1,61],32:[1,62],38:[2,21],45:[2,21],46:[2,21],47:[2,21],48:[2,21],49:[2,21],51:[2,21]},{17:[2,22],23:[2,22],24:[2,22],26:[2,22],27:[2,22],28:[2,22],29:[2,22],31:[1,61],32:[1,62],38:[2,22],45:[2,22],46:[2,22],47:[2,22],48:[2,22],49:[2,22],51:[2,22]},{17:[2,23],23:[2,23],24:[2,23],26:[2,23],27:[2,23],28:[2,23],29:[2,23],31:[1,61],32:[1,62],38:[2,23],45:[2,23],46:[2,23],47:[2,23],48:[2,23],49:[2,23],51:[2,23]},{17:[2,24],23:[2,24],24:[2,24],26:[2,24],27:[2,24],28:[2,24],29:[2,24],31:[1,61],32:[1,62],38:[2,24],45:[2,24],46:[2,24],47:[2,24],48:[2,24],49:[2,24],51:[2,24]},{17:[2,26],23:[2,26],24:[2,26],26:[2,26],27:[2,26],28:[2,26],29:[2,26],31:[2,26],32:[2,26],33:[1,63],34:[1,64],35:[1,65],38:[2,26],45:[2,26],46:[2,26],47:[2,26],48:[2,26],49:[2,26],51:[2,26]},{17:[2,27],23:[2,27],24:[2,27],26:[2,27],27:[2,27],28:[2,27],29:[2,27],31:[2,27],32:[2,27],33:[1,63],34:[1,64],35:[1,65],38:[2,27],45:[2,27],46:[2,27],47:[2,27],48:[2,27],49:[2,27],51:[2,27]},{17:[2,29],23:[2,29],24:[2,29],26:[2,29],27:[2,29],28:[2,29],29:[2,29],31:[2,29],32:[2,29],33:[2,29],34:[2,29],35:[2,29],38:[2,29],45:[2,29],46:[2,29],47:[2,29],48:[2,29],49:[2,29],51:[2,29]},{17:[2,30],23:[2,30],24:[2,30],26:[2,30],27:[2,30],28:[2,30],29:[2,30],31:[2,30],32:[2,30],33:[2,30],34:[2,30],35:[2,30],38:[2,30],45:[2,30],46:[2,30],47:[2,30],48:[2,30],49:[2,30],51:[2,30]},{17:[2,31],23:[2,31],24:[2,31],26:[2,31],27:[2,31],28:[2,31],29:[2,31],31:[2,31],32:[2,31],33:[2,31],34:[2,31],35:[2,31],38:[2,31],45:[2,31],46:[2,31],47:[2,31],48:[2,31],49:[2,31],51:[2,31]},{48:[2,55],51:[2,55]},{17:[2,43],38:[2,43],45:[2,43],46:[2,43],47:[2,43],49:[1,84]},{17:[2,39],38:[2,39],45:[2,39],46:[2,39],47:[2,39],49:[2,39]},{17:[2,40],38:[2,40],45:[2,40],46:[2,40],47:[2,40],49:[2,40]},{4:21,16:20,17:[1,8],21:17,36:82,37:[1,10],40:83,41:16,42:18,43:85,45:[1,22],46:[1,19],47:[1,3]},{17:[2,44],38:[2,44],45:[2,44],46:[2,44],47:[2,44],49:[2,44]}],
defaultActions: {4:[2,1]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};


function IdentifierNode(name) {
    return {
        "type" : "Identifier",
        "name" : name,
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

function StatementListNode(list) {
    return {
        "type" : "StatementList",
        "list" : list,
    }
}/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 9
break;
case 2:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 7
break;
case 3:return 'NEWLINE'
break;
case 4:return 37
break;
case 5:return 38
break;
case 6:return '['
break;
case 7:return ']'
break;
case 8:return 47
break;
case 9:return 48
break;
case 10:return 51
break;
case 11:return 31
break;
case 12:return 32
break;
case 13:return 33
break;
case 14:return 34
break;
case 15:return 35
break;
case 16:return 29
break;
case 17:return 28
break;
case 18:return 27
break;
case 19:return 26
break;
case 20:return 23
break;
case 21:return 24
break;
case 22:return 46
break;
case 23:return 49
break;
case 24:return 45
break;
case 25:return 13
break;
case 26:return 14
break;
case 27:return 11
break;
case 28:return 17
break;
case 29:return 5
break;
case 30:return 'INVALID'
break;
}
};
lexer.rules = [/^(?:\s+)/,/^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/,/^(?:"(?:\\[\\"bfnrt/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/,/^(?:(\n|\r|\r\n)+[\n\r\s]?)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:,)/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:\/)/,/^(?:%)/,/^(?:>=)/,/^(?:<=)/,/^(?:>)/,/^(?:<)/,/^(?:==)/,/^(?:!=)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:return\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:null\b)/,/^(?:[a-zA-Z]+[a-zA-Z0-9]*)/,/^(?:$)/,/^(?:.)/];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],"inclusive":true}};

;
return lexer;})()
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = grammar;
exports.Parser = grammar.Parser;
exports.parse = function () { return grammar.parse.apply(grammar, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    var source, cwd;
    if (typeof process !== 'undefined') {
        source = require('fs').readFileSync(require('path').resolve(args[1]), "utf8");
    } else {
        source = require("file").path(require("file").cwd()).join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}