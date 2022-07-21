let user = {
    age:54,
    name: 'Kylie',
    magic: true,
    scream: function (){
        console.log('ahhhhhhhh!');
    }
}

user.age // O(1)
user.spell = 'Abra kadabra'; //O(1)
user.scream(); //O(1)