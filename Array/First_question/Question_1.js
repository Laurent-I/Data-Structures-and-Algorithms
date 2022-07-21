// Given an array of integers, return the indices of the two numbers that add up to a given target
//Step 1: Verify the constraints like (Positive, unique and possibility of null return value)
//Step 2: Layout the test cases
//Step 3: Figure out the solution without code
//We use the Two pointer methods (Genius)
//Step 4: Write solution into code
//Step 5 : Double check errors

// My trial actually!!!😅😅
// function findPair(array, target){
//
//     pairs = [];
//     for(let i=0; i<array.length; i++){
//         let p1 = array[i];
//         let number = target - p1;
//         for(let j=0; j<array.length; j++){
//             let p2 = number
//             if (p2 === array[j]){
//                 pairs.push(p2, p1)
//
//             }
//
//         }
//     }
//
//     console.log(pairs) ;
// }
//
// findPair([1,3,7,9,2], 11)

///////////////////////////////////////////
//Brute Force Solution

const numsArray = [1,3,7,9,2];
const targetToFind = 11
//
const findTwoSum = function(nums, target){
    for(let p1=0; p1<nums.length; p1++){
        console.log({p1, value: nums[p1]})
        const numberToFind = target - nums[p1];
        console.log({numberToFind})
        for(let p2 = p1 + 1; p2 < nums.length; p2++){
            console.log({p2, value: nums[p2]})
            if(numberToFind === nums[p2]){
                return [p1, p2];
            }
        }
    }

    return null;
}

console.log(findTwoSum(numsArray, targetToFind))

//Step 6: Test using our test cases
//Step 7: Space and Time Complexity of our code
//Step 8: Optimize our code

//////////////////////////////////////////
//Optimal Solution
//{numberToFind: index}
// const findTwoSum = function(nums, target){
//     const numsMap = {};
//     console.log({numsMap})
//
//     for(let p=0; p<nums.length; p++){
//         console.log({p, value:nums[p]})
//
//         const currentMapValue = numsMap[nums[p]];
//         console.log({currentMapValue});
//
//         if(currentMapValue >= 0){
//             return [currentMapValue,p]
//         }else{
//             const numberToFind = target - nums[p];
//             console.log({numberToFind});
//
//             numsMap[numberToFind]= p;
//             console.log({numsMap})
//         }
//     }
//     return null;
// }
//
// console.log(findTwoSum(numsArray, targetToFind))
