function reverse(str) {
    //check input
    if (!str || str.length < 2 || typeof str != 'string') {
        return 'Hey, check the input!'
    }

    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0 ; i--) {
        backwards.push(str[i])
    }
    return backwards.join('') // or join method
}

function reverse2(str) {
       if (!str || str.length < 2 || typeof str != 'string') {
        return 'Hey, check the input!'
    }
       return str.split('').reverse().join('')
}

const reverse3 = str => str.split('').reverse().join('');
const reverse4 = str => [...str].reverse().join('');

console.log(reverse("Hey there!"));
console.log(reverse2("Hey there!"));
console.log(reverse3("Hey there!"));
console.log(reverse4("Hey there!"));