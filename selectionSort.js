//by Koji, Michaela, and Gil

let nums = [5, 7, 9, 4, 1, 8, 25, 3, 1, 3, 9];
let otherNums = [46, 2, 34, 90, 56, 27];
let finalTest = [5, 7, 98, 36, 47, 45, 5, 2];

const selectionSort = function(numbers) {

let counter = 0;
let min = numbers[counter];
let j = 0;

    // console.log(numbers);

while (counter < 3) {
    for(i = counter; i < numbers.length; i++) {
        if(numbers[i] <= min){
            min = numbers[i];
            j = i;
        }
    }
    // console.log(j);

    numbers[j] = numbers[counter];
    numbers[counter] = min;
    counter += 1;
    min = numbers[counter];

// console.log(numbers);

}


 //  console.log(counter);
 return numbers;

}

//find the smallest element in the array and move it to the left side of the array. (swap)

console.log(selectionSort(nums));
console.log(selectionSort(otherNums));
console.log(selectionSort(finalTest));