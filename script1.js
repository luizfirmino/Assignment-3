/*
Practice with Arrays (5 points)
Within a new web page, create the following applications. Remember to comment out every application once you’ve finished with that step:
1.	Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
*/
var arrMovies = ["Pulp Fiction","Reservoir Dogs","Rush","Casablanca","Sixth Sense"];
window.console.log(arrMovies[1]);

/*
2.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.
*/
var arrMovies = new Array(5);
arrMovies[0] = "Pulp Fiction";
arrMovies[1] = "Reservoir Dogs";
arrMovies[2] = "Rush";
arrMovies[3] = "Casablanca";
arrMovies[4] = "Sixth Sense";
window.console.log(arrMovies[0]);

/*
3.	Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
*/
arrMovies.push("Avatar");
window.console.log(arrMovies.length);
arrMovies = null;

/*
4.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.
*/
var arrMovies = Array();
arrMovies[0] = "Gladiator";
arrMovies[1] = "Back to the future";
arrMovies[2] = "Terminator";
arrMovies[3] = "Rocky";
arrMovies[4] = "Forest Gump";
arrMovies.shift();
window.console.log(arrMovies.length);

/*
5.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.
*/

var arrMovies = Array();
arrMovies[0] = "Gladiator";
arrMovies[1] = "Back to the future";
arrMovies[2] = "Terminator";
arrMovies[3] = "Rocky";
arrMovies[4] = "Forest Gump";
arrMovies[5] = "Pulp Fiction";
arrMovies[6] = "Reservoir Dogs";
for (var i=0; i < arrMovies.length; i++){
    window.console.log(arrMovies[i]);
}

/*
6.	Now, use a for-in loop to iterate through the array and display each movie within the console window.
*/
for (var i in arrMovies){
    window.console.log(arrMovies[i]);
}

/*
7.	Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.
*/
arrMovies.sort();
for (var i in arrMovies){
    window.console.log(arrMovies[i]);
}

/*
8.	Under the previous movies array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
Movies I like:

Movie 1
Movie 2
Movie 3
…

Movies I regret watching:

Movie 1
Movie 2
Movie 3
*/
window.console.log("Movies I like:\n\n");
for (var i in arrMovies){
    window.console.log(arrMovies[i]);
}

window.console.log("\nMovies I regret watching:\n\n");
var arrLeastFavMovies = ["SinCity","Mars","Besides the Lights"];
for (var i in arrLeastFavMovies){
    window.console.log(arrLeastFavMovies[i]);
}

/*
9.	Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.
*/

var movies = arrMovies.concat(arrLeastFavMovies); 
movies.sort().reverse();
for (var i in movies){
    window.console.log(movies[i]);
}

/*
10.	Return just the last item in the array and display it within the console window.
*/
window.console.log(movies[movies.length-1]);

/*
11.	Remove the previous method and this time return just the first item in the array and display it within the console window.
*/
window.console.log(movies[0]);

/*
12.	Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. 
*/
var arrIndexes = new Array(arrLeastFavMovies.length);
for (var i in arrLeastFavMovies){
    arrIndexes[i] = movies.indexOf(arrLeastFavMovies[i]);
    movies[movies.indexOf(arrLeastFavMovies[i])] = "";
}
var arrNewFavoriteMovies = ["Sons of Anarchy","Narcos","Black Mirror"];
for (var i in arrIndexes){
    movies[arrIndexes[i]] = arrNewFavoriteMovies[i];
}
for (var i in movies){
    window.console.log(movies[i]);
}

/*
13.	Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window. 
*/

var employee1 = [];
employee1["employeeId"]    = 007;
employee1["name"]           = "LUIZ FILHO";
employee1["title"]          = "SYSTEM ANALYST";
employee1["department"]     = "LOANS";
employee1["isCurrent"]      = true;

var employee2 = [];
employee2["employeeId"]    = 013;
employee2["name"]           = "MICHELE BULZICO";
employee2["title"]          = "ACCOUNTANT";
employee2["department"]     = "PRODUCTS";
employee2["isCurrent"]      = true;

var employees = [employee1, employee2];
window.console.log(employees[1]["name"]);


/*
14.	Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees.
*/
var employee1 = [];
employee1["employeeId"]    = 007;
employee1["name"]           = "LUIZ FILHO";
employee1["title"]          = "SYSTEM ANALYST";
employee1["department"]     = "LOANS";
employee1["isCurrent"]      = true;

var employee2 = [];
employee2["employeeId"]    = 013;
employee2["name"]           = "MICHELE BULZICO";
employee2["title"]          = "ACCOUNTANT";
employee2["department"]     = "PRODUCTS";
employee2["isCurrent"]      = true;

for (var i=0; i < employees.length; i++){
    window.console.log(employees[i]["name"]);
}

/*
15.	And to really tick you off, add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.
*/
var employee3 = [];
employee3["employeeId"]    = 033;
employee3["name"]           = "DAVINO FIRMINO";
employee3["title"]          = "SYSTEM ANALYST";
employee3["department"]     = "SALES";
employee3["isCurrent"]      = false;
employees[2] = employee3;

for (var i=0; i < employees.length; i++){
    if (employees[i]["isCurrent"])
        window.console.log(employees[i]["name"]);
}

/*
16.	Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 
movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.
*/

var arrMovies = [["Pulp Fiction", 5], ["Big Fellas", 5], ["Rush", 4], ["Forest Gump", 3], ["The Big Boss", 5]];


/*
Practice with Functions (5 points)
1.	Create an anonymous function named displayMessage that accepts one parameter. Within the function write a statement that prints out the value of the parameter out into the console window. Now, call the function and pass in a string as the parameter in the function call.
*/

var displayMessage = function (param){
    window.console.log(param);
}
displayMessage("param string");


/*
2.	Create a named function named calculate that accepts two parameters. Within the function write a statement that returns the modulus of the first and second parameters. Now, call the function and pass in two numbers as parameters into the function call. Make sure to display the result within the console window.
*/

function calculate(param1, param2){
    return (param1 % param2);
}
window.console.log(calculate(2,4));

/*
3.	Create a string array called employees and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:

Employees: 

ZAK 
JESSICA 
MARK 
FRED 
SALLY
*/

var arrEmployees = ["ZAK","JESSICA","MARK","FRED","SALLY"];
var showEmployee = function (param1){
    window.console.log("Employees: \n\n");
    for(var i=0; i<param1.length; i++){
        window.console.log(param1[i]);

    }
}
showEmployee(arrEmployees);