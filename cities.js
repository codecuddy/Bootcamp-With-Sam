/* Directions: Using the following cities in Pennsylvania: 

Warren, Washington, Wilkes-Barre, Williamsport, York

Concatenate all the cities that are less than 7 characters long. Print the resulting concatenated string to the console.

Grading Criteria

1. Use at least two separate functions
2. Make use of at least one array
3. Have at least one but not too many comments 
4. The syntax is correct and the code is indented properly */




var cities = ["Warren", "Washington", "Wilkes-Barre", "Williamsport", "York"];

/* Used .filter on the cities array and applied the function to return lengths of individual elements from the array that were less than 7. */

var short_cities = cities.filter(function (city) {
    return city.length < 7;
});

console.log(short_cities.join());

















/* Attempts Before getting there 

//Give length of Each City//

var cities = ["Warren", "Washington", "Wilkes-Barre", "Williamsport", "York"];

for (var i=0; i < 5; i++) {
    console.log(cities[i].length)
};




// Sort to order from small to long //

var cities = ["Warren", "Washington", "Wilkes-Barre", "Williamsport", "York"];
cities.sort(function(a, b) {return a.length>b.length});


["York", "Warren", "Washington", "Wilkes-Barre", "Williamsport"]


// Looping Arrays //

var cities = ["Warren", "Washington", "Wilkes-Barre", "Williamsport", "York"];
var citylist = cities.join();


if (citylist.length < 7) {
    console.log("THAT CITY");
}
else {
    console.log("NOTHING");
}

*/