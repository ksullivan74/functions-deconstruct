const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

//You have been given some starter code. It's an object representing an Apple Macbook Pro computer. 
//You need to define a function that takes that object as input (needs a parameter), 
//and outputs (returns) the following HTML representation of that computer.
/*<section id="computer--1">
	<h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
</section>
*/

/* Algo:
- Define a funtion
- create a variable to store the value from the body of the function
- create a interpolated string as the value for the above variable
- return the value
--** Note this function does not need a loop because you are not gathering properties from objects in an array.
*/

const compOutput = (compdetails) =>
{
	const outPut = (`<section id="computer--1">\n<h1>${compdetails.manufacturer}<h1>\n<div>${compdetails.model}</div>\n<div>${compdetails.specs.memory}</div>`)
	return outPut
}

compOutputString = compOutput(computer)
console.log(compOutputString)
