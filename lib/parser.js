/* Jison generated parser */
var grammar = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"Program":3,"Expr":4,"EOF":5,"StringLiteral":6,"STRING":7,"NumberLiteral":8,"NUMBER":9,"NullLiteral":10,"NULL":11,"BooleanLiteral":12,"TRUE":13,"FALSE":14,"Literal":15,"FunctionLiteral":16,"EqualityExpr":17,"PrimaryExpr":18,"CallExpr":19,"IDENT":20,"RelationalExpr":21,"==":22,"!=":23,"AdditiveExpr":24,"<":25,">":26,"<=":27,">=":28,"MultiplicativeExpr":29,"+":30,"-":31,"*":32,"/":33,"%":34,"Block":35,"{":36,"}":37,"SourceElements":38,"SourceElement":39,"IfStatement":40,"ReturnStatement":41,"Statement":42,"ExprStatement":43,"RETURN":44,"IF":45,"(":46,")":47,"ELSE":48,"FormalParameterList":49,",":50,"Arguments":51,"ArgumentList":52,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"STRING",9:"NUMBER",11:"NULL",13:"TRUE",14:"FALSE",20:"IDENT",22:"==",23:"!=",25:"<",26:">",27:"<=",28:">=",30:"+",31:"-",32:"*",33:"/",34:"%",36:"{",37:"}",44:"RETURN",45:"IF",46:"(",47:")",48:"ELSE",50:","},
productions_: [0,[3,2],[6,1],[8,1],[10,1],[12,1],[12,1],[15,1],[15,1],[15,1],[15,1],[15,1],[4,1],[18,1],[18,1],[18,1],[17,1],[17,3],[17,3],[21,1],[21,3],[21,3],[21,3],[21,3],[24,1],[24,3],[24,3],[29,1],[29,3],[29,3],[29,3],[35,2],[35,3],[38,1],[38,2],[39,1],[39,1],[39,1],[42,1],[42,1],[43,1],[41,2],[40,5],[40,7],[16,3],[16,4],[49,1],[49,3],[19,2],[19,2],[19,2],[51,2],[51,3],[52,1],[52,3]],
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
case 17: this.$ = BinaryExpressionNode('==', $$[$0-2], $$[$0]); 
break;
case 18: this.$ = BinaryExpressionNode('!=', $$[$0-2], $$[$0]); 
break;
case 20: this.$ = BinaryExpressionNode('<', $$[$0-2], $$[$0]); 
break;
case 21: this.$ = BinaryExpressionNode('>', $$[$0-2], $$[$0]); 
break;
case 22: this.$ = BinaryExpressionNode('<=', $$[$0-2], $$[$0]); 
break;
case 23: this.$ = BinaryExpressionNode('>=', $$[$0-2], $$[$0]); 
break;
case 25: this.$ = BinaryExpressionNode('+', $$[$0-2], $$[$0]); 
break;
case 26: this.$ = BinaryExpressionNode('-', $$[$0-2], $$[$0]); 
break;
case 28: this.$ = BinaryExpressionNode('*', $$[$0-2], $$[$0]); 
break;
case 29: this.$ = BinaryExpressionNode('/', $$[$0-2], $$[$0]); 
break;
case 30: this.$ = BinaryExpressionNode('%', $$[$0-2], $$[$0]); 
break;
case 31:this.$ = {};
break;
case 32:this.$ = $$[$0-1];
break;
case 33: this.$ = [$$[$0]]; 
break;
case 34: this.$ = $$[$0-1]; this.$.push($$[$0]); 
break;
case 41: this.$ = ReturnStatementNode($$[$0]); 
break;
case 42: this.$ = IfStatementNode($$[$0-2], $$[$0], null); 
break;
case 43: this.$ = IfStatementNode($$[$0-4], $$[$0-2], $$[$0]); 
break;
case 44: this.$ = FunctionNode([], $$[$0]); 
break;
case 45: this.$ = FunctionNode($$[$0-2], $$[$0]); 
break;
case 46: this.$ = [Node('Identifier', $$[$0])]; 
break;
case 47: this.$ = $$[$0-2]; this.$.push(Node('Identifier', $$[$0])); 
break;
case 48: this.$ = CallExprNode($$[$0-1], $$[$0]); 
break;
case 49: this.$ = CallExprNode($$[$0-1], $$[$0]); 
break;
case 50: this.$ = CallExprNode($$[$0-1], $$[$0]); 
break;
case 51: this.$ = []; 
break;
case 52: this.$ = $$[$0-1]; 
break;
case 53: this.$ = [$$[$0]]; 
break;
case 54: this.$ = $$[$0-2]; this.$.push($$[$0]); 
break;
}
},
table: [{3:1,4:2,6:14,7:[1,20],8:13,9:[1,19],10:11,11:[1,16],12:12,13:[1,17],14:[1,18],15:9,16:15,17:3,18:7,19:8,20:[1,10],21:4,24:5,29:6,46:[1,21]},{1:[3]},{5:[1,22]},{5:[2,12],7:[2,12],9:[2,12],11:[2,12],13:[2,12],14:[2,12],20:[2,12],22:[1,23],23:[1,24],37:[2,12],44:[2,12],45:[2,12],46:[2,12],47:[2,12],48:[2,12],50:[2,12]},{5:[2,16],7:[2,16],9:[2,16],11:[2,16],13:[2,16],14:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[1,25],26:[1,26],27:[1,27],28:[1,28],37:[2,16],44:[2,16],45:[2,16],46:[2,16],47:[2,16],48:[2,16],50:[2,16]},{5:[2,19],7:[2,19],9:[2,19],11:[2,19],13:[2,19],14:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19],26:[2,19],27:[2,19],28:[2,19],30:[1,29],31:[1,30],37:[2,19],44:[2,19],45:[2,19],46:[2,19],47:[2,19],48:[2,19],50:[2,19]},{5:[2,24],7:[2,24],9:[2,24],11:[2,24],13:[2,24],14:[2,24],20:[2,24],22:[2,24],23:[2,24],25:[2,24],26:[2,24],27:[2,24],28:[2,24],30:[2,24],31:[2,24],32:[1,31],33:[1,32],34:[1,33],37:[2,24],44:[2,24],45:[2,24],46:[2,24],47:[2,24],48:[2,24],50:[2,24]},{5:[2,27],7:[2,27],9:[2,27],11:[2,27],13:[2,27],14:[2,27],20:[2,27],22:[2,27],23:[2,27],25:[2,27],26:[2,27],27:[2,27],28:[2,27],30:[2,27],31:[2,27],32:[2,27],33:[2,27],34:[2,27],37:[2,27],44:[2,27],45:[2,27],46:[1,35],47:[2,27],48:[2,27],50:[2,27],51:34},{5:[2,13],7:[2,13],9:[2,13],11:[2,13],13:[2,13],14:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13],26:[2,13],27:[2,13],28:[2,13],30:[2,13],31:[2,13],32:[2,13],33:[2,13],34:[2,13],37:[2,13],44:[2,13],45:[2,13],46:[1,35],47:[2,13],48:[2,13],50:[2,13],51:36},{5:[2,14],7:[2,14],9:[2,14],11:[2,14],13:[2,14],14:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14],26:[2,14],27:[2,14],28:[2,14],30:[2,14],31:[2,14],32:[2,14],33:[2,14],34:[2,14],37:[2,14],44:[2,14],45:[2,14],46:[2,14],47:[2,14],48:[2,14],50:[2,14]},{5:[2,15],7:[2,15],9:[2,15],11:[2,15],13:[2,15],14:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15],26:[2,15],27:[2,15],28:[2,15],30:[2,15],31:[2,15],32:[2,15],33:[2,15],34:[2,15],37:[2,15],44:[2,15],45:[2,15],46:[1,35],47:[2,15],48:[2,15],50:[2,15],51:37},{5:[2,7],7:[2,7],9:[2,7],11:[2,7],13:[2,7],14:[2,7],20:[2,7],22:[2,7],23:[2,7],25:[2,7],26:[2,7],27:[2,7],28:[2,7],30:[2,7],31:[2,7],32:[2,7],33:[2,7],34:[2,7],37:[2,7],44:[2,7],45:[2,7],46:[2,7],47:[2,7],48:[2,7],50:[2,7]},{5:[2,8],7:[2,8],9:[2,8],11:[2,8],13:[2,8],14:[2,8],20:[2,8],22:[2,8],23:[2,8],25:[2,8],26:[2,8],27:[2,8],28:[2,8],30:[2,8],31:[2,8],32:[2,8],33:[2,8],34:[2,8],37:[2,8],44:[2,8],45:[2,8],46:[2,8],47:[2,8],48:[2,8],50:[2,8]},{5:[2,9],7:[2,9],9:[2,9],11:[2,9],13:[2,9],14:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9],26:[2,9],27:[2,9],28:[2,9],30:[2,9],31:[2,9],32:[2,9],33:[2,9],34:[2,9],37:[2,9],44:[2,9],45:[2,9],46:[2,9],47:[2,9],48:[2,9],50:[2,9]},{5:[2,10],7:[2,10],9:[2,10],11:[2,10],13:[2,10],14:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10],26:[2,10],27:[2,10],28:[2,10],30:[2,10],31:[2,10],32:[2,10],33:[2,10],34:[2,10],37:[2,10],44:[2,10],45:[2,10],46:[2,10],47:[2,10],48:[2,10],50:[2,10]},{5:[2,11],7:[2,11],9:[2,11],11:[2,11],13:[2,11],14:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11],26:[2,11],27:[2,11],28:[2,11],30:[2,11],31:[2,11],32:[2,11],33:[2,11],34:[2,11],37:[2,11],44:[2,11],45:[2,11],46:[2,11],47:[2,11],48:[2,11],50:[2,11]},{5:[2,4],7:[2,4],9:[2,4],11:[2,4],13:[2,4],14:[2,4],20:[2,4],22:[2,4],23:[2,4],25:[2,4],26:[2,4],27:[2,4],28:[2,4],30:[2,4],31:[2,4],32:[2,4],33:[2,4],34:[2,4],37:[2,4],44:[2,4],45:[2,4],46:[2,4],47:[2,4],48:[2,4],50:[2,4]},{5:[2,5],7:[2,5],9:[2,5],11:[2,5],13:[2,5],14:[2,5],20:[2,5],22:[2,5],23:[2,5],25:[2,5],26:[2,5],27:[2,5],28:[2,5],30:[2,5],31:[2,5],32:[2,5],33:[2,5],34:[2,5],37:[2,5],44:[2,5],45:[2,5],46:[2,5],47:[2,5],48:[2,5],50:[2,5]},{5:[2,6],7:[2,6],9:[2,6],11:[2,6],13:[2,6],14:[2,6],20:[2,6],22:[2,6],23:[2,6],25:[2,6],26:[2,6],27:[2,6],28:[2,6],30:[2,6],31:[2,6],32:[2,6],33:[2,6],34:[2,6],37:[2,6],44:[2,6],45:[2,6],46:[2,6],47:[2,6],48:[2,6],50:[2,6]},{5:[2,3],7:[2,3],9:[2,3],11:[2,3],13:[2,3],14:[2,3],20:[2,3],22:[2,3],23:[2,3],25:[2,3],26:[2,3],27:[2,3],28:[2,3],30:[2,3],31:[2,3],32:[2,3],33:[2,3],34:[2,3],37:[2,3],44:[2,3],45:[2,3],46:[2,3],47:[2,3],48:[2,3],50:[2,3]},{5:[2,2],7:[2,2],9:[2,2],11:[2,2],13:[2,2],14:[2,2],20:[2,2],22:[2,2],23:[2,2],25:[2,2],26:[2,2],27:[2,2],28:[2,2],30:[2,2],31:[2,2],32:[2,2],33:[2,2],34:[2,2],37:[2,2],44:[2,2],45:[2,2],46:[2,2],47:[2,2],48:[2,2],50:[2,2]},{20:[1,40],47:[1,38],49:39},{1:[2,1]},{6:14,7:[1,20],8:13,9:[1,19],10:11,11:[1,16],12:12,13:[1,17],14:[1,18],15:9,16:15,18:7,19:8,20:[1,10],21:41,24:5,29:6,46:[1,21]},{6:14,7:[1,20],8:13,9:[1,19],10:11,11:[1,16],12:12,13:[1,17],14:[1,18],15:9,16:15,18:7,19:8,20:[1,10],21:42,24:5,29:6,46:[1,21]},{6:14,7:[1,20],8:13,9:[1,19],10:11,11:[1,16],12:12,13:[1,17],14:[1,18],15:9,16:15,18:7,19:8,20:[1,10],24:43,29:6,46:[1,21]},{6:14,7:[1,20],8:13,9:[1,19],10:11,11:[1,16],12:12,13:[1,17],14:[1,18],15:9,16:15,18:7,19:8,20:[1,10],24:44,29:6,46:[1,21]},{6:14,7:[1,20],8:13,9:[1,19],10:11,11:[1,16],12:12,13:[1,17],14:[1,18],15:9,16:15,18:7,19:8,20:[1,10],24:45,29:6,46:[1,21]},{6:14,7:[1,20],8:13,9:[1,19],10:11,11:[1,16],12:12,13:[1,17],14:[1,18],15:9,16:15,18:7,19:8,20:[1,10],24:46,29:6,46:[1,21]},{6:14,7:[1,20],8:13,9:[1,19],10:11,11:[1,16],12:12,13:[1,17],14:[1,18],15:9,16:15,18:7,19:8,20:[1,10],29:47,46:[1,21]},{6:14,7:[1,20],8:13,9:[1,19],10:11,11:[1,16],12:12,13:[1,17],14:[1,18],15:9,16:15,18:7,19:8,20:[1,10],29:48,46:[1,21]},{6:14,7:[1,20],8:13,9:[1,19],10:11,11:[1,16],12:12,13:[1,17],14:[1,18],15:9,16:15,18:49,19:8,20:[1,10],46:[1,21]},{6:14,7:[1,20],8:13,9:[1,19],10:11,11:[1,16],12:12,13:[1,17],14:[1,18],15:9,16:15,18:50,19:8,20:[1,10],46:[1,21]},{6:14,7:[1,20],8:13,9:[1,19],10:11,11:[1,16],12:12,13:[1,17],14:[1,18],15:9,16:15,18:51,19:8,20:[1,10],46:[1,21]},{5:[2,49],7:[2,49],9:[2,49],11:[2,49],13:[2,49],14:[2,49],20:[2,49],22:[2,49],23:[2,49],25:[2,49],26:[2,49],27:[2,49],28:[2,49],30:[2,49],31:[2,49],32:[2,49],33:[2,49],34:[2,49],37:[2,49],44:[2,49],45:[2,49],46:[2,49],47:[2,49],48:[2,49],50:[2,49]},{4:54,6:14,7:[1,20],8:13,9:[1,19],10:11,11:[1,16],12:12,13:[1,17],14:[1,18],15:9,16:15,17:3,18:7,19:8,20:[1,10],21:4,24:5,29:6,46:[1,21],47:[1,52],52:53},{5:[2,50],7:[2,50],9:[2,50],11:[2,50],13:[2,50],14:[2,50],20:[2,50],22:[2,50],23:[2,50],25:[2,50],26:[2,50],27:[2,50],28:[2,50],30:[2,50],31:[2,50],32:[2,50],33:[2,50],34:[2,50],37:[2,50],44:[2,50],45:[2,50],46:[2,50],47:[2,50],48:[2,50],50:[2,50]},{5:[2,48],7:[2,48],9:[2,48],11:[2,48],13:[2,48],14:[2,48],20:[2,48],22:[2,48],23:[2,48],25:[2,48],26:[2,48],27:[2,48],28:[2,48],30:[2,48],31:[2,48],32:[2,48],33:[2,48],34:[2,48],37:[2,48],44:[2,48],45:[2,48],46:[2,48],47:[2,48],48:[2,48],50:[2,48]},{35:55,36:[1,56]},{47:[1,57],50:[1,58]},{47:[2,46],50:[2,46]},{5:[2,17],7:[2,17],9:[2,17],11:[2,17],13:[2,17],14:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[1,25],26:[1,26],27:[1,27],28:[1,28],37:[2,17],44:[2,17],45:[2,17],46:[2,17],47:[2,17],48:[2,17],50:[2,17]},{5:[2,18],7:[2,18],9:[2,18],11:[2,18],13:[2,18],14:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[1,25],26:[1,26],27:[1,27],28:[1,28],37:[2,18],44:[2,18],45:[2,18],46:[2,18],47:[2,18],48:[2,18],50:[2,18]},{5:[2,20],7:[2,20],9:[2,20],11:[2,20],13:[2,20],14:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20],26:[2,20],27:[2,20],28:[2,20],30:[1,29],31:[1,30],37:[2,20],44:[2,20],45:[2,20],46:[2,20],47:[2,20],48:[2,20],50:[2,20]},{5:[2,21],7:[2,21],9:[2,21],11:[2,21],13:[2,21],14:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21],26:[2,21],27:[2,21],28:[2,21],30:[1,29],31:[1,30],37:[2,21],44:[2,21],45:[2,21],46:[2,21],47:[2,21],48:[2,21],50:[2,21]},{5:[2,22],7:[2,22],9:[2,22],11:[2,22],13:[2,22],14:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22],26:[2,22],27:[2,22],28:[2,22],30:[1,29],31:[1,30],37:[2,22],44:[2,22],45:[2,22],46:[2,22],47:[2,22],48:[2,22],50:[2,22]},{5:[2,23],7:[2,23],9:[2,23],11:[2,23],13:[2,23],14:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23],26:[2,23],27:[2,23],28:[2,23],30:[1,29],31:[1,30],37:[2,23],44:[2,23],45:[2,23],46:[2,23],47:[2,23],48:[2,23],50:[2,23]},{5:[2,25],7:[2,25],9:[2,25],11:[2,25],13:[2,25],14:[2,25],20:[2,25],22:[2,25],23:[2,25],25:[2,25],26:[2,25],27:[2,25],28:[2,25],30:[2,25],31:[2,25],32:[1,31],33:[1,32],34:[1,33],37:[2,25],44:[2,25],45:[2,25],46:[2,25],47:[2,25],48:[2,25],50:[2,25]},{5:[2,26],7:[2,26],9:[2,26],11:[2,26],13:[2,26],14:[2,26],20:[2,26],22:[2,26],23:[2,26],25:[2,26],26:[2,26],27:[2,26],28:[2,26],30:[2,26],31:[2,26],32:[1,31],33:[1,32],34:[1,33],37:[2,26],44:[2,26],45:[2,26],46:[2,26],47:[2,26],48:[2,26],50:[2,26]},{5:[2,28],7:[2,28],9:[2,28],11:[2,28],13:[2,28],14:[2,28],20:[2,28],22:[2,28],23:[2,28],25:[2,28],26:[2,28],27:[2,28],28:[2,28],30:[2,28],31:[2,28],32:[2,28],33:[2,28],34:[2,28],37:[2,28],44:[2,28],45:[2,28],46:[1,35],47:[2,28],48:[2,28],50:[2,28],51:34},{5:[2,29],7:[2,29],9:[2,29],11:[2,29],13:[2,29],14:[2,29],20:[2,29],22:[2,29],23:[2,29],25:[2,29],26:[2,29],27:[2,29],28:[2,29],30:[2,29],31:[2,29],32:[2,29],33:[2,29],34:[2,29],37:[2,29],44:[2,29],45:[2,29],46:[1,35],47:[2,29],48:[2,29],50:[2,29],51:34},{5:[2,30],7:[2,30],9:[2,30],11:[2,30],13:[2,30],14:[2,30],20:[2,30],22:[2,30],23:[2,30],25:[2,30],26:[2,30],27:[2,30],28:[2,30],30:[2,30],31:[2,30],32:[2,30],33:[2,30],34:[2,30],37:[2,30],44:[2,30],45:[2,30],46:[1,35],47:[2,30],48:[2,30],50:[2,30],51:34},{5:[2,51],7:[2,51],9:[2,51],11:[2,51],13:[2,51],14:[2,51],20:[2,51],22:[2,51],23:[2,51],25:[2,51],26:[2,51],27:[2,51],28:[2,51],30:[2,51],31:[2,51],32:[2,51],33:[2,51],34:[2,51],37:[2,51],44:[2,51],45:[2,51],46:[2,51],47:[2,51],48:[2,51],50:[2,51]},{47:[1,59],50:[1,60]},{47:[2,53],50:[2,53]},{5:[2,44],7:[2,44],9:[2,44],11:[2,44],13:[2,44],14:[2,44],20:[2,44],22:[2,44],23:[2,44],25:[2,44],26:[2,44],27:[2,44],28:[2,44],30:[2,44],31:[2,44],32:[2,44],33:[2,44],34:[2,44],37:[2,44],44:[2,44],45:[2,44],46:[2,44],47:[2,44],48:[2,44],50:[2,44]},{6:14,7:[1,20],8:13,9:[1,19],10:11,11:[1,16],12:12,13:[1,17],14:[1,18],15:9,16:15,18:68,19:65,20:[1,10],37:[1,61],38:62,39:63,40:64,41:66,44:[1,69],45:[1,67],46:[1,21]},{35:70,36:[1,56]},{20:[1,71]},{5:[2,52],7:[2,52],9:[2,52],11:[2,52],13:[2,52],14:[2,52],20:[2,52],22:[2,52],23:[2,52],25:[2,52],26:[2,52],27:[2,52],28:[2,52],30:[2,52],31:[2,52],32:[2,52],33:[2,52],34:[2,52],37:[2,52],44:[2,52],45:[2,52],46:[2,52],47:[2,52],48:[2,52],50:[2,52]},{4:72,6:14,7:[1,20],8:13,9:[1,19],10:11,11:[1,16],12:12,13:[1,17],14:[1,18],15:9,16:15,17:3,18:7,19:8,20:[1,10],21:4,24:5,29:6,46:[1,21]},{5:[2,31],7:[2,31],9:[2,31],11:[2,31],13:[2,31],14:[2,31],20:[2,31],22:[2,31],23:[2,31],25:[2,31],26:[2,31],27:[2,31],28:[2,31],30:[2,31],31:[2,31],32:[2,31],33:[2,31],34:[2,31],37:[2,31],44:[2,31],45:[2,31],46:[2,31],47:[2,31],48:[2,31],50:[2,31]},{6:14,7:[1,20],8:13,9:[1,19],10:11,11:[1,16],12:12,13:[1,17],14:[1,18],15:9,16:15,18:68,19:65,20:[1,10],37:[1,73],39:74,40:64,41:66,44:[1,69],45:[1,67],46:[1,21]},{7:[2,33],9:[2,33],11:[2,33],13:[2,33],14:[2,33],20:[2,33],37:[2,33],44:[2,33],45:[2,33],46:[2,33]},{7:[2,35],9:[2,35],11:[2,35],13:[2,35],14:[2,35],20:[2,35],37:[2,35],44:[2,35],45:[2,35],46:[2,35],48:[2,35]},{7:[2,36],9:[2,36],11:[2,36],13:[2,36],14:[2,36],20:[2,36],37:[2,36],44:[2,36],45:[2,36],46:[1,35],48:[2,36],51:36},{7:[2,37],9:[2,37],11:[2,37],13:[2,37],14:[2,37],20:[2,37],37:[2,37],44:[2,37],45:[2,37],46:[2,37],48:[2,37]},{46:[1,75]},{46:[1,35],51:34},{4:76,6:14,7:[1,20],8:13,9:[1,19],10:11,11:[1,16],12:12,13:[1,17],14:[1,18],15:9,16:15,17:3,18:7,19:8,20:[1,10],21:4,24:5,29:6,46:[1,21]},{5:[2,45],7:[2,45],9:[2,45],11:[2,45],13:[2,45],14:[2,45],20:[2,45],22:[2,45],23:[2,45],25:[2,45],26:[2,45],27:[2,45],28:[2,45],30:[2,45],31:[2,45],32:[2,45],33:[2,45],34:[2,45],37:[2,45],44:[2,45],45:[2,45],46:[2,45],47:[2,45],48:[2,45],50:[2,45]},{47:[2,47],50:[2,47]},{47:[2,54],50:[2,54]},{5:[2,32],7:[2,32],9:[2,32],11:[2,32],13:[2,32],14:[2,32],20:[2,32],22:[2,32],23:[2,32],25:[2,32],26:[2,32],27:[2,32],28:[2,32],30:[2,32],31:[2,32],32:[2,32],33:[2,32],34:[2,32],37:[2,32],44:[2,32],45:[2,32],46:[2,32],47:[2,32],48:[2,32],50:[2,32]},{7:[2,34],9:[2,34],11:[2,34],13:[2,34],14:[2,34],20:[2,34],37:[2,34],44:[2,34],45:[2,34],46:[2,34]},{4:77,6:14,7:[1,20],8:13,9:[1,19],10:11,11:[1,16],12:12,13:[1,17],14:[1,18],15:9,16:15,17:3,18:7,19:8,20:[1,10],21:4,24:5,29:6,46:[1,21]},{7:[2,41],9:[2,41],11:[2,41],13:[2,41],14:[2,41],20:[2,41],37:[2,41],44:[2,41],45:[2,41],46:[2,41],48:[2,41]},{47:[1,78]},{6:14,7:[1,20],8:13,9:[1,19],10:11,11:[1,16],12:12,13:[1,17],14:[1,18],15:9,16:15,18:68,19:65,20:[1,10],35:80,36:[1,56],39:81,40:64,41:66,42:79,44:[1,69],45:[1,67],46:[1,21]},{7:[2,42],9:[2,42],11:[2,42],13:[2,42],14:[2,42],20:[2,42],37:[2,42],44:[2,42],45:[2,42],46:[2,42],48:[1,82]},{7:[2,38],9:[2,38],11:[2,38],13:[2,38],14:[2,38],20:[2,38],37:[2,38],44:[2,38],45:[2,38],46:[2,38],48:[2,38]},{7:[2,39],9:[2,39],11:[2,39],13:[2,39],14:[2,39],20:[2,39],37:[2,39],44:[2,39],45:[2,39],46:[2,39],48:[2,39]},{6:14,7:[1,20],8:13,9:[1,19],10:11,11:[1,16],12:12,13:[1,17],14:[1,18],15:9,16:15,18:68,19:65,20:[1,10],35:80,36:[1,56],39:81,40:64,41:66,42:83,44:[1,69],45:[1,67],46:[1,21]},{7:[2,43],9:[2,43],11:[2,43],13:[2,43],14:[2,43],20:[2,43],37:[2,43],44:[2,43],45:[2,43],46:[2,43],48:[2,43]}],
defaultActions: {22:[2,1]},
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
case 4:return 36
break;
case 5:return 37
break;
case 6:return '['
break;
case 7:return ']'
break;
case 8:return 46
break;
case 9:return 47
break;
case 10:return 50
break;
case 11:return 30
break;
case 12:return 31
break;
case 13:return 26
break;
case 14:return 25
break;
case 15:return 28
break;
case 16:return 27
break;
case 17:return 22
break;
case 18:return 23
break;
case 19:return 45
break;
case 20:return 48
break;
case 21:return 44
break;
case 22:return 13
break;
case 23:return 14
break;
case 24:return 11
break;
case 25:return 20
break;
case 26:return 5
break;
case 27:return 'INVALID'
break;
}
};
lexer.rules = [/^(?:\s+)/,/^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/,/^(?:"(?:\\[\\"bfnrt/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/,/^(?:(\n|\r|\r\n)+[\n\r\s]?)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:,)/,/^(?:\+)/,/^(?:-)/,/^(?:>)/,/^(?:<)/,/^(?:>=)/,/^(?:<=)/,/^(?:==)/,/^(?:!=)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:return\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:null\b)/,/^(?:[a-zA-Z]+[a-zA-Z0-9]*)/,/^(?:$)/,/^(?:.)/];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],"inclusive":true}};

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