function printAllNumbersThenAllPairsSums(numbers){
    console.log('these are the numbers: ');
    numbers.forEach(function(number){
        console.log(number);
    });

    console.log("and these are their pairs sums: ");
    numbers.forEach(function(firstNumber){
        numbers.forEach(function(secondNumber){
            console.log(firstNumber + secondNumber);
        });
    });
}

printAllNumbersThenAllPairsSums([1,2,3,4,5,6])

//The Big O notation is O(n^2) according to the fourth rule where we consider only the dominant terms
//before it was O(n + n^2)
//then after it was O(n^2) the dominant term