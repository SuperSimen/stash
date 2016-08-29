function makeArray(length, getValue) {
    var newArray = [];
    for (var i = 0; i < length; i++) {
        newArray.push(getValue(i));
    }
    return newArray;
}

function isSorted(array) {
    var last = array[0];
    for (var i = 1; i < array.length; i++) {

        if (last > array[i]) {
            return false;
        }

        last = array[i]; 
    }

    return true;
}

function sort(array, slice) {
    if (isSorted(array)) {
        return array;
    }
    else {
        if (slice) return array.slice(0).sort();
        else return array.sort();
    }
}

var arrayLength = 100000;
var sequential = makeArray(arrayLength, (index) => index);
var sequential2 = sequential.slice();
var random = makeArray(arrayLength, () => Math.random() * 100000);
var random2 = random.slice();


console.time('custom slice sorting sequential');
sort(sequential, true);
console.timeEnd('custom slice sorting sequential');

console.time('custom sorting sequential');
sort(sequential);
console.timeEnd('custom sorting sequential');

console.time('sorting sequential');
sequential2.sort();
console.timeEnd('sorting sequential');

console.time('custom slice sorting random');
sort(random, true);
console.timeEnd('custom slice sorting random');

console.time('custom sorting random');
sort(random);
console.timeEnd('custom sorting random');

console.time('sorting random');
random2.sort();
console.timeEnd('sorting random');

