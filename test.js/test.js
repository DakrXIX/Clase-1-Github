
var p = true;
var q = false;

var proposition1 = !(p && q);
console.log("¬(p ∧ q): " + proposition1);

var proposition2 = p && !q;
console.log("p ∧ ¬q: " + proposition2); 

var proposition3 = !p && !q;
console.log("¬p ∧ ¬q: " + proposition3);
