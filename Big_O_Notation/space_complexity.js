// function boooo(n){
//     for (let i = 0; i < n.length; i++){
//         console.log('booooooo!');
//     }
// }
//
// boooo([1,2,3,4,5]) //O(1)

function arrayOfHintTimes(n){
    let hiArray = [];
    for (let i = 0; i <n; i++){
        hiArray[i]= 'hi';
    }
    console.log(hiArray);
}

arrayOfHintTimes(6) //O(n)