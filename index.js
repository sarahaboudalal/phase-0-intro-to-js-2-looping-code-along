// Code your solutions in this file

function writeCards(theirArray) {
    let myArra = [];
    let counter = 0;
    theirArray.forEach(element => {
        myArra[counter] = `Thank you, ${element}, for the wonderful surprise gift!`
        counter++;
    });
    return myArra;
}

function countDown(num) {
   for (let i = num; i >= 0; i--)
   console.log(i)
}