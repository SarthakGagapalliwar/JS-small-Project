const quotewrapper = document.querySelector('.quote-wrapper');
const refreshId = document.querySelector('.refreshId');
const loader = document.querySelector('.loder');

let quotes = [];




function showLoader(){
loader.classList.add('show');
quotewrapper.classList.add('hide');
}

function removeLoader(){
  loader.classList.remove('show');
  quotewrapper.classList.remove('hide');
}

function fetchRandomQuote() {
  showLoader()
  fetch('https://dummyjson.com/quotes')
    .then(res => res.json())
    .then((result) => {
      if(result){
        removeLoader();
        quotes = result.quotes;
        displayQuote(quotes[0]); // show first one initially
      }
    })
    .catch((e) => console.error("Error fetching quote:", e));
}

function displayQuote(getQuote) {
  quotewrapper.innerHTML = `
    <div class="quote-item">
      <p><strong>Author:</strong> ${getQuote.author}</p>
      <p><strong>Quote:</strong> "${getQuote.quote}"</p>
    </div>
  `;
}

refreshId.addEventListener('click', () => {
  let random = Math.floor(Math.random() * quotes.length); 
  displayQuote(quotes[random]);
});

fetchRandomQuote();
