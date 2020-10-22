
//simple way to solve


function correct(string)
{
    // replace 5 with s 
    string = string.replace(/5/g, 'S'); //all character 5 globally ...
    //replace 0 with o
    string = string.replace(/0/g, 'O');
    //replace 1 with i
    string = string.replace(/1/g, 'I');

    return string;
}

//another way of solving using only one iteration
function correct(string){

    return string.replace(/5|0|1/g, (letter)=> {
        switch(letter){
            case '5':
                return 'S';
            case '0':
                return 'O';
            case '1':
                return 'I';
            
        }
    });
}
function correct(string){

    //create an object 
    const mistakes = {
        5: 'S', 
        0: 'O', 
        1: 'I'
    };

    return string.replace(/5|0|1/g, (letter)=> mistakes[letter]);
}




console.log(correct("DUBL1N"),"DUBLIN");
console.log(correct("51NGAP0RE"),"SINGAPORE");
console.log(correct("BUDAPE5T"),"BUDAPEST");
console.log(correct("L0ND0N"),"LONDON");
console.log(correct("PAR15"),"PARIS");