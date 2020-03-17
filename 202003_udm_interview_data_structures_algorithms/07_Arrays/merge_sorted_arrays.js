function mergeSortedArrays(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2item = array2[0];
    let i = 1;
    let j = 1;

    //Check sum
    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array1;
    }

    while (array1Item || array2item) {
        // Next if is safeguard for undefined value
        if (!array2item || array1Item < array2item) {
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++

        } else {
            mergedArray.push(array2item);
            array2item = array2[j];
            j++
        }
    }
    return mergedArray;

}

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]));