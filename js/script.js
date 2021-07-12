/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator in JavaScript
*************************************************/


/*** 
 * `quotes` array 
***/

quotes = [
    {
        quote: "Toto, I've got a feeling we're not in Kansas anymore.",
        source: "Dorothy",
        citation: "The Wizard of Oz",
        year: 1939,
        tags: "movies"
    },
    {
        quote: "Elementary, my dear Watson.",
        source: "Sherlock Holmes",
        citation: "The Adventures of Sherlock Holmes",
        year: 1929,
        tags: "movies"
    },
    {
        quote: "Begin now to be what you will be hereafter.",
        source: "Saint Jerome",
        tags: "inspirational"
    },
    {
        quote: "Talk is cheap. Show me the code.",
        source: "Linus Torvalds",
        tags: "programming, linux"
    },
    {
        quote: "Art is anything you can get away with.",
        source: "Marshal McLuhan",
        year: 2005,
        tags: "design, art"
    },
];

//console.log(quotes);


/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
    let rand_num = Math.floor(Math.random() * quotes.length);
    return quotes[rand_num];
}


/***
 * `printQuote` function
***/

function printQuote(){
    let quote = getRandomQuote();

}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);