function caseStatement (val){

    let answer = '';

    //switch ('whats being tested')
    switch(val){
        case 1:
            answer = "The first case was satified";
        break;
        case 2:
            answer = "The second case was satified";
        break;
        case 3:
            answer = "Te third case was satisfied";
        break;
        case 4:
            answer = "The forth case was satified";
        break;
        default: 
            answer = "The default case was satified because all cases fails"

    }
    
    return answer;

}//ends caseStatement function

console.log(caseStatement(1));
console.log(caseStatement(2));
console.log(caseStatement(7));

/*************************************************** EXAMPLE 2 **************************************************/


function sequentialSizes(val) {
    var result = "";

    switch (val){
      
      case 1:
      case 2:
      case 3:
        result = "low";
        break;
      
      case 4:
      case 5:
      case 6:
        result = "Mid";
        break;
  
      
      case 7:
      case 8:
      case 9:
        result = "High";
        break;
  
    }
  
    return result;
  }
  
  console.log(sequentialSizes(3));
  