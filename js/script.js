/************************************************
 Treehouse Techdegree:
 Project 4 - Random Quote Generator in JavaScript
 *************************************************/


/***
 * `quotes` array that contains a list of quotes and their source, citation, year and tags (if appliable)
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
    {
        quote: "When in doubt, log it out!",
        source: "Lee Vaughn",
        year: 2021,
        tags: "development"
    },
];

let newQuoteTimer = setInterval(printQuote,1000);

/***
 * Calling this function grabs a random quote from the quotes array
 * @return {object} a quote object
 ***/
function getRandomQuote() {
    let rand_num = Math.floor(Math.random() * quotes.length);
    return quotes[rand_num];
}

/***
 * Calling this function changes the body background color. Colors are limited to darker/muted colors to better work with white text
 ***/
function changeBackground(){
    let red = Math.floor(Math.random() * 125);
    let blue = Math.floor(Math.random() * 125);
    let green = Math.floor(Math.random() * 125);
    document.body.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
}

/***
 * Calling this function changes the 'quotebox' HTML class element to represent a randomly selected quote
 ***/
function printQuote() {

    //restart timer so it starts counting from refresh OR button press
    clearInterval(newQuoteTimer);
    newQuoteTimer = setInterval(printQuote, 10000)

    let quote = getRandomQuote();
    let out_string = `<p class="quote">${quote.quote}</p>`;
    out_string += `<p class="source">${quote.source}`;

    if (quote.hasOwnProperty('citation')) {
        out_string += `<span class="citation">${quote.citation}</span>`
    }
    if (quote.hasOwnProperty('year')) {
        out_string += `<span class="year">${quote.year}</span>`
    }
    if (quote.hasOwnProperty('tags')) {
        out_string += `<span class="tags">(${quote.tags})</span>`
    }
    out_string += '</p>';
    document.getElementById('quote-box').innerHTML = out_string;
    changeBackground();
}

printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);