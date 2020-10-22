let quotes = [
    "“Be yourself everyone else is already taken.” <span>― Oscar Wilde</span>",

    "“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.” <span>― Albert Einstein</span>",

    "“So many books, so little time.” <span>― Frank Zappa</span>",

    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” <span>― Bernard M. Baruch</span>",

    "“A room without books is like a body without a soul.” <span>― Marcus Tullius Cicero </span>",

    "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” <span>― Dr. Seuss</span>",

    "“You only live once, but if you do it right, once is enough.”<span>― Mae West</span>",

    "“Be the change that you wish to see in the world.”<span>― Mahatma Gandhi</span>",

    "“In three words I can sum up everything I've learned about life: it goes on.” <span>― Robert Frost</span>",

    "“No one can make you feel inferior without your consent.” <span>― Eleanor Roosevelt</span>",

    ];
    
    
function generateQuote(){
    
    //random number
    let index = Math.floor(Math.random()* quotes.length);

    //display quote
    let quote = 
        `<div class="quote-bubble">
            <p>
                ${quotes[index]}
            </p>
            <button class="close">close</button>
        </div>
        `;
    
    
    let quoteDiv = document.querySelector('#quote');
    quoteDiv.innerHTML = quote;

    // remove display: none that is set when close function is called
    if(quoteDiv.style.display==="none"){

        quoteDiv.style.display="block"
        
    };

    //get the close button & add click handler
    let close = document.querySelector('.close');

    close.addEventListener('click', closeQuote);
}

// a function to close the  div with the quotes 
function closeQuote (){
    let div = document.querySelector('#quote');

    div.style.display="none";
}

//get button & add click handler
let btn = document.querySelector('#generate-btn')
btn.addEventListener('click', generateQuote);