// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
var spacecraftName = 'Determination';
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// 27.7.3. Part 2 - Print Days to Mars
var milesToMars = kilometersToMars * milesPerKilometer;
var hoursToMars = milesToMars / speedMph;
var daysToMars = hoursToMars / 24;
// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(kilometersAway) {
    var milesAway = kilometersToMars * milesPerKilometer;
    var hoursToLocation = milesAway / speedMph;
    var daysToLocation = hoursToLocation / 24;
    return daysToLocation;
}
console.log("It will take spacecraft " + spacecraftName + " " + getDaysToLocation(kilometersToMars) + " days to get to Mars");
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// In the space indicated, define a function that calculates the days it would take to travel to a location.
// Function name getDaysToLocation
// Parameter
// kilometersAway must be a number.
// Returns the number of days to a location.
// Use the same calculations as in Part 2.1.
// Inside the function, make the variable names generic. Use milesAway and hoursToLocation instead of milesToMars and hoursToMars.
// The function should declare that it returns a number.
// Print out the days to Mars.
// Move the output statement from part 2 below your new function.
// Refactor the template literal to use ${getDaysToLocation(kilometersToMars)} and ${spacecraftName}.
// Print out the days to the Moon.
// Add another output statement and template literal using ${getDaysToLocation(kilometersToTheMoon)} and ${spacecraftName}.
// Use the terminal in VSCode to recompile your .ts file, then run the parts1-5.js file again.
// Part 4: Create a Spacecraft Class
// Create an instance of the class here:
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
