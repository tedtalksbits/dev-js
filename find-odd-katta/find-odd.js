function findOdd(array) {
  //a place for counts 
  const counts = {}
  //iterate over the array 
  for(let i = 0; i < array.length; i++){
    const number = array[i];
    
    //if we have not seem this number before
    if (!counts[number]){
    
      //add it to counts with a value of 1 
      counts[number] = 1;

    }
    else{

      //if we have seen this number before
      // increment its count 
      counts[number]++;

    }
  }

  //iterate over the counts 
    for (const number in counts){

      const count = counts[number];
      
      //if the number is odd
      if (count % 2 !==0 ){

        //return the odd number
        //adding '+' converts the string into a number
        //also could use '* 1' to covert string to a number
        return +number;
      }
    }
  }