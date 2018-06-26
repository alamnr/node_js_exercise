/*var obj = {a: 1, b: 2};
console.log(obj);*/

var a = 0;
function init() {
  a = 1;
}
function incr() {
	var a = a + 1;
	console.log('a after: %d', a);
}
init();
console.log('a before: %d', a);
incr();
console.log('a after: %d', a);