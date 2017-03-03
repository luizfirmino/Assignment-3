/*
Death by JavaScript (4 points each for 20 points total)
Solve the following function/array-related problems. Each solution should be written within its own
function and the output should be displayed within a console window. The display should be the return
value of the function call.

1. Write a JavaScript function that when called, returns a passed in string with letters in alphabetical
order. Assume punctuation and number symbols are not included in the passed-in string.
Sample Data and Output
Example string: webmaster
Expected Output: abeemrstw
*/

function workBackwards(str){
    
    var arr = Array(str.length);
    
    for (var i=0; i < str.length; i++){
        arr[i] = str[i];
    }
    arr = arr.sort();
    return arr.join("");
}
window.console.log(workBackwards("webmaster"));

/*
2. Write a JavaScript function that accepts a string as a parameter and when called, converts the first
letter of each word of the string to upper case characters and return it.
Sample Data and Output
Example string: the quick brown fox
Expected Output: The Quick Brown Fox
*/

function applyCapitalLetter(str){
    
    var arr = str.split(" ");
    for (var i=0; i < arr.length; i++){
        arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase());        
    }
    return arr.join(" ");
}
window.console.log(applyCapitalLetter("luiz firmino de freitas filho"));

/*
3. Write a JavaScript function that accepts a string as a parameter and when called, counts the number
of vowels within the string and returns that number.
Sample Data and Output
Example string: The quick brown fox
Expected Output: 5
*/

function vowelsCounter(str){
    
    var v = ["a","e","i","o","u"];
    var n = 0;
    for (c in str){
        for (vi in v){
            if (v[vi] == str[c]){
                n = n + 1;
            }
        }
    }
    return n;
}
window.console.log(vowelsCounter("The quick brown fox"));


/*
4. Write a JavaScript function that when called, generates a string id (specified length) of 8 random
characters and returns those characters as a string. This is a great application to learn for making
password generator-type applications.
Sample Data and Output
Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA
*/

function generateStringId(){
    var chars = "AaBbCcDdEeFfGgHhIiJjKkMmNnOoPpQqRrSsTtUuVvZzWwYy1234567890";
    var strId = "";
    for(var i=0; i < 8; i++){
        strId = strId + chars[Math.floor(Math.random()*57)];
    }    
    return strId;
}
window.console.log(generateStringId());

/*
5. Write a JavaScript function that accepts a list of country names as input and when called, returns the
longest country name as the output.
Sample Data and Output
Sample function: Longest_Country_Name([&quot;Australia&quot;, &quot;Germany&quot;, &quot;United States of America&quot;])
Expected output: &quot;United States of America&quot;
*/

function getLongestCountryName(arrCountries){
    
    for (var country in arrCountries){
        
    }
    
}
getLongestCountryName(["Brazil","Chile","Peru","Venezuela","Cuba"]);

