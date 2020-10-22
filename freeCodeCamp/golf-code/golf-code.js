var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  
  if (strokes == 1){
    console.log( names[0]);
  }
  else if (strokes <= (par - 2)){
    console.log( names[1]);
  }
  else if (strokes == (par - 1)){
    console.log( names[2]);
  }
  else if (strokes == par){
      console.log(names[3]);
  }
  else if (strokes == (par + 1)){
      console.log(names [4]);
  }
  else if (strokes == (par + 2)){
    console.log(names [5])
  }
  else if (strokes >= (par + 3)){
    console.log(names [6])
  }

 
}//ends function

golfScore(4, 9);