function secondRule(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while(index < middleIndex) {
        console.log(items[index])
        index++
    }

    for(var i = 0; i < 100; i++){
        console.log('hi')
    }
}
//This first prints the first item then the first half items then says hi 100 times
//When we are calculating the Big O Notation we use the second rule which allows to ignore the constants
//O(n)is our Big O Notation