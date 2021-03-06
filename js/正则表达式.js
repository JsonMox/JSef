/*
 * @Author: kirin.xulong 
 * @Date: 2020-05-12 13:27:28 
 * @Last Modified by: kirin.xulong
 * @Last Modified time: 2020-05-12 16:07:25
 */
//--------------------正则表达式-----------

/*
//--------------------元字符-----------
\	 将下一个字符标记为一个特殊字符、或一个原义字符、或一个 向后引用、或一个八进制转义符。例如，'n' 匹配字符 "n"。'\n' 匹配一个换行符。序列 '\\' 匹配 "\" 而 "\(" 则匹配 "("。

^	匹配输入字符串的开始位置。

$	匹配输入字符串的结束位置。如果设置了RegExp 对象的 Multiline 属性，$ 也匹配 '\n' 或 '\r' 之前的位置。

*	匹配前面的子表达式零次或多次。例如，zo* 能匹配 "z" 以及 "zoo"。* 等价于{0,}。

+	匹配前面的子表达式一次或多次。例如，'zo+' 能匹配 "zo" 以及 "zoo"，但不能匹配 "z"。+ 等价于 {1,}。

?	匹配前面的子表达式零次或一次。例如，"do(es)?" 可以匹配 "do" 或 "does" 。? 等价于 {0,1}。

x|y	匹配 x 或 y。例如，'z|food' 能匹配 "z" 或 "food"。'(z|f)ood' 则匹配 "zood" 或 "food"。

[xyz]   字符集合。匹配所包含的任意一个字符。例如， '[abc]' 可以匹配 "plain" 中的 'a'。

[^xyz]	负值字符集合。匹配未包含的任意字符。例如， '[^abc]' 可以匹配 "plain" 中的'p'、'l'、'i'、'n'。

[a-z]	字符范围。匹配指定范围内的任意字符。例如，'[a-z]' 可以匹配 'a' 到 'z' 范围内的任意小写字母字符。

[^a-z]  负值字符范围。匹配任何不在指定范围内的任意字符。例如，'[^a-z]' 可以匹配任何不在 'a' 到 'z' 范围内的任意字符。

\b	匹配一个单词边界，也就是指单词和空格间的位置。例如， 'er\b' 可以匹配"never" 中的 'er'，但不能匹配 "verb" 中的 'er'。

\B	匹配非单词边界。'er\B' 能匹配 "verb" 中的 'er'，但不能匹配 "never" 中的 'er'。

\d	匹配一个数字字符。等价于 [0-9]。

\D	匹配一个非数字字符。等价于 [^0-9]。

\f	匹配一个换页符。等价于 \x0c 和 \cL。

\n	匹配一个换行符。等价于 \x0a 和 \cJ。

\r	匹配一个回车符。等价于 \x0d 和 \cM。

\s	匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ \f\n\r\t\v]。

\S	匹配任何非空白字符。等价于 [^ \f\n\r\t\v]。

\t	匹配一个制表符。等价于 \x09 和 \cI。

\v	匹配一个垂直制表符。等价于 \x0b 和 \cK。

\w	匹配字母、数字、下划线。等价于'[A-Za-z0-9_]'。

\W	匹配非字母、数字、下划线。等价于 '[^A-Za-z0-9_]'。


//--------------------非打印字符-----------

字符	           描述
\cx	    匹配由x指明的控制字符。例如， \cM 匹配一个 Control-M 或回车符。x 的值必须为 A-Z 或 a-z 之一。否则，将 c 视为一个原义的 'c' 字符。
\f	    匹配一个换页符。等价于 \x0c 和 \cL。
\n   	匹配一个换行符。等价于 \x0a 和 \cJ。
\r	    匹配一个回车符。等价于 \x0d 和 \cM。
\s	    匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ \f\n\r\t\v]。注意 Unicode 正则表达式会匹配全角空格符。
\S	    匹配任何非空白字符。等价于 [^ \f\n\r\t\v]。
\t	    匹配一个制表符。等价于 \x09 和 \cI。
\v	    匹配一个垂直制表符。等价于 \x0b 和 \cK。

//---------------------特殊字符----------


特别字符          	描述
$	     匹配输入字符串的结尾位置。如果设置了 RegExp 对象的 Multiline 属性，则 $ 也匹配 '\n' 或 '\r'。要匹配 $ 字符本身，请使用 \$。
( )	     标记一个子表达式的开始和结束位置。子表达式可以获取供以后使用。要匹配这些字符，请使用 \( 和 \)。
*	     匹配前面的子表达式零次或多次。要匹配 * 字符，请使用 \*。
+	     匹配前面的子表达式一次或多次。要匹配 + 字符，请使用 \+。
.	     匹配除换行符 \n 之外的任何单字符。要匹配 . ，请使用 \. 。
[	     标记一个中括号表达式的开始。要匹配 [，请使用 \[。
?	     匹配前面的子表达式零次或一次，或指明一个非贪婪限定符。要匹配 ? 字符，请使用 \?。
\	     将下一个字符标记为或特殊字符、或原义字符、或向后引用、或八进制转义符。例如， 'n' 匹配字符 'n'。'\n' 匹配换行符。序列 '\\' 匹配 "\"，而 '\(' 则匹配 "("。
^	     匹配输入字符串的开始位置，除非在方括号表达式中使用，当该符号在方括号表达式中使用时，表示不接受该方括号表达式中的字符集合。要匹配 ^ 字符本身，请使用 \^。
{	     标记限定符表达式的开始。要匹配 {，请使用 \{。
|	     指明两项之间的一个选择。要匹配 |，请使用 \|。


//---------------------定位符----------
字符	    描述
^	    匹配输入字符串开始的位置。如果设置了 RegExp 对象的 Multiline 属性，^ 还会与 \n 或 \r 之后的位置匹配。
$	    匹配输入字符串结尾的位置。如果设置了 RegExp 对象的 Multiline 属性，$ 还会与 \n 或 \r 之前的位置匹配。
\b	    匹配一个单词边界，即字与空格间的位置。
\B	    非单词边界匹配。

//--------------------------------------

EG1： ^[0-9]+abc$
1. ^ 为匹配输入字符串 的 开始位置
2. $ 为匹配输入字符串 的 结束位置
3. [0-9] 匹配单个数字；[0-9]+ 匹配多个数字； + 匹配一个或多个
4. abc$ 匹配以字母abc为结尾的的字符串

var stra = "12345abc";
var strb = "12345";
var reg = /^[0-9]+abc$/;

// reg.exec() 返回匹配字符串的索引值等信息，从0开始
var match = reg.exec(stra); // ["134523abc", index: 0, input: "134523abc", groups: undefined]
alert(match); // 12345abc
console.log(match); // ["134523abc", index: 0, input: "134523abc", groups: undefined]
var match = reg.exec(strb); // null

// str.match(reg) // 使用方式与 reg.exec() 相类似

EG2： ^[a-z0-9_-]{3,15}$
1. 以字母a-z、数字0-9、下划线_ 、连词符- 开始
2. 字符串的长度为3-15

var str = "katakuli";
var reg = /^[a-z0-9_-]{3,15}$/;
str.match(reg);

EG3： [1-9][0-9]*
1. [1-9] 规定第一个数字不是 0 
2. [0-9]* 表示多个数字

var str = "1234567";
var reg = /[1-9][0-9]* /;
str.match(reg); // ["1234567", index: 0, input: "1234567", groups: undefined]

EG3.333 
(^[0-9])+     //匹配有一至多个数字的字符串组合 -----正------
[^[0-9]]+  // 匹配有一至多个不含数字的字符串组合 ----反------[^]

EG4： /[0-9]{1，2}/  //匹配 0-99 的两位数
EG5： /[1-9][0-9]?/  /[1-9][0-9]{0,1}/  //匹配 1-99 正整数

EG6: 关于定位符的使用
var str = "chapter"；
var reg = /\Bter/; 与 reg = /ter\b/; 相同效果

EG7: 查找重复的单词
var str = "Is is the cost of of gasoline going up up";
// 捕获的表达式，正如 [a-z]+ 指定的，包括一个或多个字母；\1 指定第一个子匹配项; \b保证对象为整个单词，而不是类似this is 重复“is”
var patt1 = /\b([a-z]+) \1\b/ig; 
document.write(str.match(patt1));

EG8: 匹配网站连接
var str = "http://www.runoob.com:80/html/html-tutorial.html";
var patt1 = /(\w+):\/\/([^/:]+)(:\d*)?([^# ]*)/;
arr = str.match(patt1);
for (var i = 0; i < arr.length ; i++) {
    document.write(arr[i]);
    document.write("<br>");
}
第一个括号子表达式捕获 Web 地址的协议部分。该子表达式匹配在冒号和两个正斜杠前面的任何单词。 http

第二个括号子表达式捕获地址的域地址部分。子表达式匹配非 : 和 / 之后的一个或多个字符。www.runoob.com

第三个括号子表达式捕获端口号（如果指定了的话）。该子表达式匹配冒号后面的零个或多个数字。只能重复一次该子表达式。:80

第四个括号子表达式捕获 Web 地址指定的路径和 / 或页信息。该子表达式能匹配不包括 # 或空格字符的任何字符序列。/html/html-tutorial.html

*/