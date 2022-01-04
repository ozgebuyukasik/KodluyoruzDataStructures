function insertionSort (array){
    const sizeOfArray = array.length;
    
    for(var iteration = 1; iteration <sizeOfArray; iteration++){
        var key = array[iteration];
        var leftElementsOfKey = iteration - 1;

        while(leftElementsOfKey >= 0 && key < array[leftElementsOfKey]){
            array[leftElementsOfKey + 1] = array[leftElementsOfKey];
            --leftElementsOfKey;
        }
        array[leftElementsOfKey + 1] = key;
        console.log(array);
    }
}

const array = [22,27,16,2,18,6];
insertionSort(array);
console.log("******************")
const secondArray = [7,3,5,8,2,9,4,15,6];
insertionSort(secondArray);
console.log(secondArray);