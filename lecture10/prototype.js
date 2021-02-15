var p = {
    a:10
}
console.log(p);

var q = Object.create(p);  //it will use p as its prototype/blue print.
q.b = 15;

console.log(q);
console.log("q.a -> : " + q.a);

var r = Object.create(q);
r.c=20;

console.log(r);
console.log(r.a)