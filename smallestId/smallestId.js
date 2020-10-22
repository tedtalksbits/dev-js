function nextId(ids){
    //this will be awesome!
    var ans;
      for (let i = 0; i < ids.length; i++){
          if (ids[i] !== i){
              ans = i;
          }
          else {
              ans = ids.length;
          }
          
        }
        return ans;
  }

  nextId([0,1,2,3,4,5,6,7,8,9,10])