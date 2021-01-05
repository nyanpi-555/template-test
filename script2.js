const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

function showLoadingSpiner(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function removeLoadingSpiner(){
    if(!loader.hidden){
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

let apiQuotes = [];
//show new Quote
function newQuote(){
    showLoadingSpiner();
    //pick a random quote from apiQuotes Array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    if(!quote.author){
        authorText.textContent = 'Unknown';
    }else{
        authorText.textContent = quote.author;
    }
            //reduce fontsize for long quotes
    if(quote.text.length > 120){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    //set quote, and hide loader
        quoteText.textContent = quote.text;
        removeLoadingSpiner();
    }
    
//get Quote from API
async function getQuotes(){
    showLoadingSpiner();
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuotes();
    } catch(error) {
//catch error here
    }
}

//Tweet Quote
function tweetQuote(){
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterURl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterURl,'_blank');
}
//Event Listeners
newQuoteBtn.addEventListener('click', getQuotes);
twitterBtn.addEventListener('click', tweetQuote);

//On Load 
getQuotes();