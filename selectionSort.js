//by Koji, Michaela, and Gil

let nums = [5, 7, 9, 4, 1, 8, 25, 3];
let otherNums = [46, 2, 34, 90, 56, 27];
let finalTest = [5, 7, 98, 36, 47, 45, 5, 2];

const selectionSort = function(numbers) {
let counter = 0;
let min = numbers[counter];

    console.log(numbers);

    for(i = 0; i < numbers.length; i++) {
        if(numbers[i] < min){
            counter += 1;
            min = numbers[i];
            temp = numbers[i];
        }
    }


   console.log(counter);

}

//find the smallest element in the array and move it to the left side of the array. (swap)

console.log(selectionSort(nums));
// console.log(selectionSort(otherNums));
// console.log(selectionSort(finalTest));