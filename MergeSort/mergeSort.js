function merge(leftArray, rightArray){
    const mergedArray = []

    while(leftArray.length && rightArray.length){
        mergedArray.push(leftArray[0] > rightArray[0] ? rightArray.shift() : leftArray.shift())
    }
    while(leftArray.length){
        mergedArray.push(leftArray.shift())
    }
    while(rightArray.length){
        mergedArray.push(rightArray.shift())
    }
    console.log(mergedArray)
    return mergedArray
}

function mergeSort(array){
    if(array.length < 2) return array
    const middlePoint = Math.floor(array.length / 2)
    const leftSideOfArray = array.slice(0, middlePoint)
    const rightSideOfArray = array.slice(middlePoint, array.length)
    console.log(leftSideOfArray, rightSideOfArray)
    const sortedLeftSide = mergeSort(leftSideOfArray)
    const sortedRightSide = mergeSort(rightSideOfArray)
    return merge(sortedLeftSide, sortedRightSide)
}
 
var sortArray = [16,21,11,8,12,22]
const sortedArray = mergeSort(sortArray)
console.log(sortedArray)