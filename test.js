function a(a,b) {
    console.log(a + b);
}

var a2 = a.bind(null, 1);

var ar = [1,2,3];
var sl1 = [].slice.call(ar,1);
var sl2 = ar.slice(1);


var s = "kljlkj";
s.halla = "dude";

var li = [1,2,3,4,5];
li.dude = 123;
li["1"] = 123;
console.log(li);
