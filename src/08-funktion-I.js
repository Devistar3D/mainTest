// console.log("Hallo!");

/*****Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN
// {
// // Call
// ausgabeNamen()

// // Funktion
// function ausgabeNamen();
//     // interne Variable | What happens in Vegas ...
//     let firstName = "Maria";
//     console.log("Hallo, " + firstName + "!");
// }



/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// ausgabeNamen2("Mria"); // Argument
// ausgabeNamen2("Nadim");
// ausgabeNamen2("Melanie");

function ausgabeNamen2(firstName) {    // Parameter
    console.log("Hallo, " + firstName + "!");
}

/***** Funktion 02c *****/
// 2c. Mehrere Parameter / Argumente

// ausgabeNamenParams("Max","Mütze");

// const prompt = require('prompt-sync')({sigint: true});
// ausgabeNamenParams(prompt("Vorname? :"),prompt("Name? :")); // Piping


function ausgabeNamenParams(firstName, familyName) { // Parameter
    console.log("Hallo, " + firstName + " " + familyName + "!");
}


/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

ausgabeNamenSRP("Max","Mütze");

function ausgabeNamenSRP(firstName, familyName) {  // Parameter

    // 1. Funktionalität: sting composing
    const GAP = " ";
    let outputStr = "Hallo, " + firstName + GAP + familyName + "!"

    // 2. Funktionalität: sting output
    console.log(outputStr);
}

/***** funktion 03b *****/



// 2. Funktionalität: string output
output("hi");
output(2);
output(true);

function output(outputData) {
    console.log(outputData);
}

/***** Funktion 03b *****/

// 1.Funktionalität: string composing


output(getString("Max", "Mütze"));

    function getString(firstName, familyName) {
        const GAP = " ";
        let outputStr = "Hallo, " + firstName + GAP + familyName + "!"
        return outputStr; // return schickt die Daten an den call ...
}


// 2. Funktionalität: String Output ...

function output(outputData) {

}