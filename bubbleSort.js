//by Koji, Michaela, and Gil

let nums = [7, 5, 9, 4, 1, 8, 25, 3];
let otherNums = [46, 2, 34, 90, 56, 27];
let finalTest = [5, 7, 98, 36, 47, 45, 5, 2];

const bubbleSort = function(numbers) {

    let swapCounter = -1;

    console.log(numbers);
    // while(swapCounter != 0) {
        
        for(i = 0; i < numbers.length; i++) {

               
            if(numbers[i] > numbers[i+1]){
                swapCounter += 1;
                temp = numbers[i];
                numbers[i] = numbers[i+1];
                numbers[i+1] = temp;
            }

    console.log(numbers);

        // }
    }

}

//set swap counter to -1
//repeat until swap counter is equal to 0
//if two adjacent elements are not in order, swap the elements and add 1 to swap counter

console.log(bubbleSort(nums));
// console.log(bubbleSort(otherNums));
// console.log(bubbleSort(finalTest));