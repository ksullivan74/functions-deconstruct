
const createChassis = () => {
	// Create a new object. No properties yet.
	const chassisObject = {	}

	return chassisObject
}

 //The addWheels() function should have a parameter for the incoming chassis object. 
 //add a new property to that object named wheels with a value of 4. The function should return the chassis object.

const addWheels=(chassisObject)=>
{
    chassisObject.wheels = 4
    return chassisObject
}

//The addEngine() function should have a parameter for the incoming chassis object. 
//It should add a new property to that object named engine with a value of "4.8L". 
//The function should return the chassis object.



const addEngine = (chassisObject) =>
{
	chassisObject.engine = "4.8L"
	return chassisObject
}

//The addSteeringWheel() function should have a parameter for the incoming chassis object. 
//It should add a new property to that object named steeringWheel with a value of "Tilting". 
//The function should return the chassis object.

const addSteeringWheel=(chassisObject)=>
{
	chassisObject.steeringWheel = "Tilting"
	return chassisObject
}

//The addDriveTrain() function should have a parameter for the incoming chassis object. 
//It should add a new property to that object named driveTrain with a value of "Two wheel drive".
//The function should return the chassis object.

const addDriveTrain = (chassisObject) =>
{
	chassisObject.driveTrain = "Two Wheel Drive"
	return chassisObject
}

const addBody = (neil) => 
{
	// Use dot notation to add a new property
	neil.body = "Fever"

	// Return the chassis that now has a body property on it
	return neil
}

let chasis = createChassis()
//console.log(chasis)
let chassisWithBody = addBody(chasis)
//console.log(chassisWithBody)
let chasisWithWheels = addWheels(chassisWithBody)
//console.log(chasisWithWheels)
let chasisWithEngine = addEngine(chasisWithWheels)
//console.log(chasisWithEngine)
let chasisWithSteeringWheel = addSteeringWheel(chasisWithEngine)
//console.log(chasisWithSteeringWheel)
let chasisWithDriveTrain = addDriveTrain(chasisWithSteeringWheel)
console.log(chasisWithDriveTrain)

