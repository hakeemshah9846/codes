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
const str3 = "Is it ok fishes";
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
const regexp = /^[a-z][a-z 0-9 _]*$/i;

function onChange(arg) {
    const result = checkResult(arg.value);
    let label = document.getElementById("input-label");
    label.innerHTML = result;

}


function checkResult(value) {

    const result = regexp.test(value);
    if(result) {
        return '';
    }else {
        return 'Invalid string';
    }
}
