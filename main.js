/* Notes:
    Your job is to deconstruct your hobby, job, or craft into the tasks required.

    Write a function for each task.
    In the function body, just console.log() a description of the task.
    Invoke the tasks in the correct order.
*/
/* Individual Tasks:
Walk Into The studio
Turn on the lights
Choose guitar
Plug guitar into Helix
Log into computer
Open Reaper
Create new project folder
Save project name to project folder
Create new line to record
Press record button
Play guitar
Press "stop" button
Save project -> File -> Save Project
*/

const recordingInstructions = ""

const studio = ()=>
{
    console.log(`1.) Walk into the room towards the back of the house that faces the rear treeline.\n`)

    //Opens the studio
}
const lights = ()=>
{
    console.log(`2.) The light switch is on the right hand side as you walk into the room.\n`)
    //Turns on the lights
}
const computer =()=>
{
    console.log(`3.) There is a power strip under the desk, simply turn it on. The computer will log you in automatically.\n`)
    //Turns on Computer
}
const guitar= ()=>
{
    console.log(`4.) There are several guitars on the wall. Choose the guitar that best fits the style of music your are recording.\n`)
    //Choose guitar
}
const helix=()=>
{
    console.log(`5.) The Helix should already be on at this point. Plug a guitar cable with one end into the guitar and the other end into the "input" of the Helix.\n`)
    //Turns on Helix
}
const daw=()=>
{
    console.log(`6.) You should see the "Reaper" icon on the desktop of the comupter. Double click on this. You are now ready to record.\n`)
    //Turns on DAW
}
const play=()=>
{
    console.log(`7) Now you can get creative, hit the record button in "Reaper" and kick out some killer riffage.\n`)
    //Play some cool music
}

studio();
lights();
computer();
guitar();
helix();
daw();
play();
