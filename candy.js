//You will be defining some functions that perform the individual tasks involved in producing candy. 
//Sweet little minions that will do all the tasks involved with making sugary treats.

/*
Deconstruction:
Buy some milk chocolate
Add some mint flavoring
Combine the chocolate and mint
Bake the mixture
Break the hardened sheet into 6 pieces
🍫 🍫 🍫 🍫 🍫 🍫 Enjoy!
*/
//let candy = {buyChocolate: " Milk Chocolate"}


const buyChocolate =() => 
{
    // Adds purchased chocolate to the object
    const candy = {chocolate: "Milk Chocolate"}
    return candy

}


//Define a function named addFlavoring. The function needs one parameter to accept an object as input.
//It should add a new flavor property to the object with a value of "Mint".

const addFlavoring = (candy) => 
{
    candy.flavoring = "Mint"
    return candy
}

/*Define a function named makeBarkMixture. 
It should have one parameter for an incoming object to be stored for use in the function.
Time for another if block. This time, you will also need a corresponding else block.
If the flavor property on the object is equal to "Mint", then you should add a new mixed property to the object with a value of true. 
If the flavor is not "Mint" then the property value should be false.*/


const makeBarkMixture = (candy) =>
{ 
    if (candy.flavoring === "Mint")  {candy.wasMixed = true}
    else {candy.wasMixed = false}
    return candy
}

/*Define a function named bakeCandy. It should have one parameter for an incoming object to be stored for use in the function.
Time for another if block. This time, you will also need a corresponding else block.
The function should check if the mixed property on the incoming object has a value of true.
If it does, then add a baked property to the object with a value of true.
If the mixed property is not true, then add a baked property with a value of false.*/


const bakeCandy = (candy) =>
{
    if(candy.wasMixed === true){candy.bake = true}
    else{candy.bake = false}
    return candy
}

/*Define a function named breakBark. 
It should have one parameter for an incoming object to be stored for use in the function.
Time for another if block. No else block needed this time.
If the incoming object's baked property is true, the function should return a new array with 6 strings in it. 
Each string should be "Mint Chocolate Bark Piece".
If the baked property value is false, the function should not return anything. 
This means that the return statement should be inside the if block instead of outside of it.*/


const breakBark =(candy) => 
{   
    candy.breakBark = []
    if(candy.bake === true) {candy.breakBark.push("Mint Chocolate Bark Piece\n".repeat(6))}
    return candy
}


let finishedCandy = buyChocolate()
//console.log(finishedCandy1)

finishedCandy = addFlavoring(finishedCandy)
//console.log(finishedCandy2)

finishedCandy = makeBarkMixture(finishedCandy)
//console.log(finishedCandy3)

finishedCandy = bakeCandy(finishedCandy)
//console.log(finishedCandy4)

finishedCandy = breakBark(finishedCandy)
console.log(finishedCandy)



