console.log("Javascript regular expressions...");

// const regexp = /a/;
// const regexp = /a/i;//Case insensitive search

// [] - represent range
// const regexp = /[cr]a/i; // Matchees words starting with ca or ra
// const regexp = /[a-z]a/i; // Starting letter before a ranges between a to z, and also 'i' represents case insensitive search
// const regexp = /[a-z0-9]at/i; // Starting letter before a ranges between a to z or 0 to 9, and also 'i' represents case insensitive search


// ^ - represents start and $ - represents end of a string
// const regexp = /^rat/i; // Start of a string should be rat
// const regexp = /meat$/i; // End of a string should be meat
// const regexp = /meat$/im; // 'm' represents multiline matching
// const regexp = /^good/im; // 'm' represents multiline matching
//if 'm' is not given it will try to match the start of the string even if it is multiline


// ? - Resprsents optional word or group of words , for group of words use '()' , words or group of words before '?' symbol is considered
// () - Used for grouping
// const regexp = /meats?$/i; // word before '?' is optional for matching, it matches both "meat" and "meats"
// const regexp = /fish(es)?$/im; // word or group of words before '?' is optional for matching, it matches both "fish" and "fishes"
// const regexp = /meats*$/i; // It matches meat meatssssssssss etc...
// const regexp = /meats+$/i; // For '+' , atleast one charactor before it is required, her atleast single 's' is required 
// const regexp = /meat.$/i; // For '.' , any number of charactors is supported, ie meats meatsss meatazhdj meatzzzzzzzz, all is matched


const str1 = "The cat is white";
const str2 = "rat eats fish";
const str3 = "Is it ok fishes ";
const str4 = `
good meat
is always good
`;


// const result1 = regexp.test(str1);
// console.log("Result1 : ", result1);

// const result2 = regexp.test(str2);
// console.log("Result2 : ", result2);

// const result3 = regexp.test(str3);
// console.log("Result3 : ", result3);

// const result4 = regexp.test(str4);
// console.log("Result3 : ", result4);



//Form validation task
// Allowed only
// characters A - Z
// Numbers 0 - 9
// Underscore _
// Starts only with characters
// const regexpForm = /^[a-z][a-z 0-9 _]*$/i;

// function onChange(arg) {
//     const result = checkResult(arg.value);
//     let label = document.getElementById("input-label");
//     if(result) {

//         label.innerHTML = result;
//     }else {
//         label.innerHTML = '';
//     }

// }


// function checkResult(value) {

//     const result = regexpForm.test(value);
//     if(result) {
//         return '';
//     }else {
//         return 'Invalid string';
//     }
// }






// const regexp = /[kjm]/i; //If there is k or j or m then it will be true
// const regexp = /[^kjm]/i; //ir there is no k or j or m then it will be true
// const regexp = /[H+]/i; //atleast  1 'H' is required
// const regexp = /O$/i; //String ends with 'o'

// const regexp = /O?$/i; //Ending 'o' can be 0 or 1 or more
// const regexp = /O+$/i; //Atleast  1 'O' is required in string end


// const regexp = /L{2}o$/i; //'o' should be exactly after 2 L's
// const regexp = /L{2,4}o$/i; //'o' should be exactly after between 2 to 4 L's
// const regexp = /HeL{2,4}o$/i; //'o' should be exactly after between 2 to 4 L's and exactly after 2 to 4 L's and 'o' is required
// const regexp = /HeL{2,}o$/i; //2 or more 'L' is required

// \- escape character
// const regexp = /\d/i; //if there is any digits 0 to 9, it will be true, else it will be false
// const regexp = /\D/i; //if there is any non-digits ie letters or charactors, if there is only digits it will be false
//Suppose we want to match '.' in a string, since '.' has a special meaning everything will be matched and will be true
// const regexp = /./i; //if there is '.' or anything it will match
// const regexp = /\./i; //if there is any  '.' it will match, else it will be false
//So '\'(backslash) is used to excape special charactors


// const str = "Hello";



// const result = regexp.test(str);
// console.log("Result : ", result);



//Date validation


// const regexpForDate = /^\d{1,2}-\d{1,2}-\d{4}$/;
// |- or case
// const regexpForDate = /^([012]?\d|3[01])-([0]\d|[1][012])-(\d{4})$/i; //In first group- If first character is '0' or '1' or '2' then second character can be any digits(0-9) or if first character is '3' then second character should be '0' or '1'
//In the second group if the first character is '0' then second character can be any digits(0-9) or if first character is '1' then second character should be '0' or '1' or '2'
//In the last date part four digits is allowed


// function onChange(arg) {
//     const result = checkResult(arg.value);
//     let label = document.getElementById("input-label");
//     if(result) {

//         label.innerHTML = result;
//     }else {
//         label.innerHTML = '';
//     }

// }

// function checkResult(value) {
//     //() - capturing group(gets the characters as array elements in match function), ?: - non capturing group(will not get the characters as array elements in match function), /^(?:[012]?\d|3[01])-([0]\d|[1][012])-(\d{4})$/i

//     const result = value.match(regexpForDate); //If it matches it will return an object with capture groups '()' as array elements
//     console.log("Result : ", result);
//    if(result === null) {
//     return 'Invalid String';
//    }else {
//     return '';
//    }
// }



//String replacing using regular expressions
// let str5 = "a-b-c";


// let str6 = str5.replace(/-/,':'); // Replaces '-' with ':', only replaces the first match
// console.log("str6 : ", str6);

// let str7 = str5.replace(/-/g,':'); // Replaces '-' with ':', replaces all the matches
// console.log("str7 : ", str7);


// let dateStr = '12-10-04';

// let dateStrReplace = dateStr.replace(/(\d{2})$/,'20$1');//gets '04' from dateStr and replace it as '2004', '$1' will get the value of first capture group ie within '()' brackets.
// console.log("dateStrReplace", dateStrReplace);



//Online tool  for testing regular expressions : https://regex101.com/

// '^' and '$' can only be used in the start and end of a string and cannot be used in between strings to match, so we use lookaheads for giving starting and ending in between strings
// (?=) - Possitive Lookahead
//(?<=) - Possitive Lookbehind
//(?! ) - Negative Lookahead
//(?<! ) - Negative Lookbehind

let dateString = '11-10-2023';

// let regex = /-\d+-/; //It will match also '-10-' in result and gives as result array

//Using Lookahead and Lookbehind
let regex = /(?<=-)\d+(?=-)/; //It will exactly match '10' and gives in result array


const result = dateString.match(regex);
console.log("Result : ", result);


//Example for Negative Lookahead and Negative Lookbehind

let phone = "(91)1234567890";

//Matches numbers outside of (91)
const phoneRegex = /(?<!\()\d+(?!\))/; // escape chractor '\' is used to represent '(' and ')' in string

const phoneResult = phone.match(phoneRegex);
console.log("Phone result : ", phoneResult);