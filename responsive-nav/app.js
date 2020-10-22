const burger = document.getElementById('burger');
const ul = document.querySelector('nav ul');

//on click on burger toggle on and off the .show 
burger.addEventListener('click', () => {
    ul.classList.toggle('show');
   
})


//sam code as avove without arrow function
// burger.addEventListener('click', function(){
//     ul.classList.toggle('show');
//    console.log('clicked')
// })