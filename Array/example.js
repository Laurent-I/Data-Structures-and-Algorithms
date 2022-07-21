const string = ['a', 'b', 'c', 'd']
//4*4 = 16 bytes of storage

//access
string[2] //O(1)

//push
string.push('e') //O(1)

//pop
string.pop(); //O(1)

//unshift
string.unshift('x') //O(n)

//splice
string.splice(2,0,'alien') //O(n/2) => O(n)

console.log(string)