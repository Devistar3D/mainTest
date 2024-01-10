
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/



const prompt = require('prompt-sync')({sigint: true});


const zahl1 = parseFloat(prompt('Geben Sie die erste Zahl ein: '));         // Eingabe der ersten Zahl

const zahl2 = parseFloat(prompt('Geben Sie die zweite Zahl ein: '));        // Eingabe der zweiten Zahl

const summe = zahl1 + zahl2;                                                // Berechnung der Summe




console.log(`Die Summe der Zahlen ist: ${summe}`);                          // Ausgabe der Summe