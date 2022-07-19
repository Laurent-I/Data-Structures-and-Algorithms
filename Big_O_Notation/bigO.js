const nemo = ['nemo']
const largeArray = new Array(10000).fill('nemo')

function findNemo(array){
    for(let i = 0; i < array.length; i++){
        console.log('Running');
        if(array[i] ==='nemo'){
            console.log('found NEMO!')
            break;
        }
    }
}

findNemo(largeArray)

//Constant Time Big Notation

// const boxes = [0,1,2,3,4,5];
//
// function logFirstTwoBoxes(boxes){
//     console.log(boxes[0]);//O(1)
//     console.log(boxes[1]);//O(1)
// }
//
// logFirstTwoBoxes(boxes);