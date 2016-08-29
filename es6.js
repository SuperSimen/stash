
function test(fu) {
    return fu(2);
}

var ta = function() {
    console.log('ta');
};



var funx = function() {
    console.log('hohoho');
};

funx.dude = 21;
funx();
console.log(funx.dude);

function funxz() {
    console.log('kljjkljkl');

}

var halla = {fun: funxz};

function klj(fun) {
    console.log('whaat');
    fun.fun();
}

function a() {
    console.log(b);
}

function bc() {
    var b = 321;
    a();
}

var b = 3;
bc();
