let dice1 = Math.ceil(Math.random() * 6) 
let dice2 = Math.ceil(Math.random() * 6) 
let dice3 = Math.ceil(Math.random() * 6) 
console.log(dice1, dice2, dice3)


if(dice1 == dice2 == dice3)
    console.log(10000 + dice1 * 1000)
else if(dice1 == dice2 || dice1 == dice3)
    console.log(1000 + dice1 * 100)
else if(dice2 == dice3)
    console.log(1000 + dice2 * 100)
else if(dice1 > dice2 || dice1 > dice3)
    console.log(dice1 * 100)
else if(dice2 > dice1 || dice2 > dice3)
    console.log(dice2 * 100)
else if(dice3 > dice2 || dic3 > dice1)
    console.log(dice3 * 100)
