function alternatingSums(array) {

    let evenSum=0;
    let oddSum=0;
    let ans=[];
    for(i=0;i<array.length;i++){
        if(i%2==0){
            evenSum+=array[i];
        }

        if(i%2==1){
            oddSum+=array[i];
        }
    }
    ans.push(evenSum,oddSum);
    return ans;
}

///same code below written differently


function alternatingSums(array) {

    let evenSum=0;
    let oddSum=0;
    let ans=[0,0];
    for(let i=0;i<array.length;i++){
        if(i%2==0){
            evenSum+=array[i];
            ans[0]=(evenSum)
        }

        if(i%2==1){
            oddSum+=array[i];
            ans[1]=(oddSum)

        }
    }
   
    return ans;
}


const nums = [50, 60, 60, 45, 70];
        
        // act
        const result = alternatingSums(nums);

        // log
        console.log("result: ", result);
        
        // assert
       // expect(result).toEqual([180, 105]);
