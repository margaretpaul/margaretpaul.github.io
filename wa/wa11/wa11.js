const button = document.querySelector("#js-new-quote")
button.addEventListener('click',getQuote);

const endpoint = 'https://www.boredapi.com/api/activity'

async function getQuote() {
    //console.log("It works!");
    try {
        const response = await fetch(endpoint)
        if(!response.ok){
            throw Error(response.statusText)
        }
        const json = await response.json();
        //console.log(json.activity);
        displayQuote(json.activity)
    }
        catch (err) {
            console.log(err);
            alert('Failed to fetch new trivia')
        }

        function random_bg_color() {
            var x = Math.floor(Math.random() * 256);
            var y = Math.floor(Math.random() * 256);
            var z = Math.floor(Math.random() * 256);
            var bgColor = "rgb(" + x + "," + y + "," + z + ")";
            
         console.log(bgColor);
          
            document.body.style.background = bgColor;
            }

            random_bg_color();



}

function displayQuote(quote) {
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}





getQuote()




