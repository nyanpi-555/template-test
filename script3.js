//get Quote from API
// let apiQuotes = [];
//show new Quote
// getQuotes();
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
//get Quote from API
// async function getQuote(){
//     showLoadingSpiner();
//     const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//     const apiQuote ='http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
//     try{
//         const response = await fetch(proxyUrl + apiQuote);
//         const data = await response.json();
//         //if Author is blank add 'Unknown'
//         if(data.quoteAuthor ===''){
//             authorText.innerText = 'Unknown';
//         }else {
//             authorText.innerText = data.quoteAuthor;
//         }
//         //reduce fontsize for long quotes
//         if(data.quoteText.length > 120){
//             quoteText.classList.add('long-quote');
//         }else{
//             quoteText.classList.remove('long-quote');
//         }
//         quoteText.innerText = data.quoteText; 
//         //stop loader show the quote
//         removeLoadingSpiner();
//         throw new Error('Oops');
//     }catch(error){
//         console.log(error);
//         getQuote();
//     }
// }
function newQuote(){
    //pick a random quote from apiQuotes Array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

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
// async function getQuotes(){
//     const apiUrl = 'https://type.fit/api/quotes';
//     try{
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuotes();
//     } catch(error) {
// //catch error here
//     }
// }

//On Load 
newQuote();
//Tweet Quote
function tweetQuote(){
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterURl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterURl,'_blank');
}
//Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
//On Load
// getQuote();
