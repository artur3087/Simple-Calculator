// !! PROJECT 2 - SIMPLE CALCULATOR !! //

// ! Below I declare variables ! //

const display = document.getElementById("display");


// ! Below I code functions for calculator ! //

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try { // try block (explanation below)
        display.value=eval(display.value); // eval function (explanation below)
    }
    catch (error){ // catch block (explanation below)
        display.value="Error, dude!!!"
    }

}



// !!! Explanations !!! //

// eval function:
// It takes an expressions like (1+2+3) and evaluates them and give a result. It is like JavaScript built in calculator :) It makes our lives much more easy! // Within this specific code it evaluates a display value //

// try block:
// It can be used as a ERROR HANDLING; to try a code, which can potentially give us errors. Then with 
// catch block
// we can handle any errors and display a message for user. 
