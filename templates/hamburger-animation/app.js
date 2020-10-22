const hamburger = document.querySelector('#btn-hamburger');
const hamburgerLines = document.querySelector('#hamburgerLines');

hamburgerLines.addEventListener("click",function(){
    
    if(hamburgerLines.classList.contains('open-color')){
        hamburgerLines.classList.remove('open-color');
        hamburger.classList.remove('open');
    }
    else{
        hamburgerLines.classList.add('open-color')
        hamburger.classList.add('open');
    }
})

