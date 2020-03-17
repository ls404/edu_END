// Big O - N^2
// returns true if every value in forts array have squared analogue in second
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
    arr2.splice(correctIndex,1)
    }
    return true
}

console.log(same([1,2,3],[9,1,4]));