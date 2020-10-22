

$(document).ready(function () {
    
    function randomNum () {
        return Math.floor(Math.random()*255)
    };

    $("#button").on("click", function () {
        
        
        for(let i = 0; i < 15; i++){

            
            var num1 = randomNum();
            var num2 = randomNum();
            var num3 = randomNum();

            var rbg = `${num1},${num2},${num3}`;
          
            
        }
        
        $("#body").css('background', `rgb(${rbg})`);
        
   
        
    });

});