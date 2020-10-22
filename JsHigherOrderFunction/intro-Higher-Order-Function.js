// => arrow function 


// Higher Order Functions
    
    //forEach - Does something for each item in the array

        const forEachArr = [1,2,3,4,5];

        forEachArr.forEach(function(item){

            console.log(item * 2)

            //console.log(`item = ${item} \n@ index ${index}`);
        });


    //map() - Does something for each item but needs to be assigned to a NEW VARIABLE - output is an array

        const mapArr = [1,2,3,4,5];

        const newMapArr = mapArr.map(function(item){
            return item * 2;
        });
        console.log(newMapArr);


    //filter() - check each item against a condition, if true item is put it in the declared variable as an array if false it is not put in 

        const filterArr = [1,2,3,4,5];

        const newFilterArr = filterArr.filter(function (item){
            return item % 2 === 0;
        });
        console.log(newFilterArr);

    
    //reduce() - 

        const reduceArr = [1,2,3,4,5];
        let add = 0;

        const newReduceArr = reduceArr.reduce(function(acc,item){
            console.log(add+=item)
            console.log(`${acc} + ${item} = ${add}`)
            return acc + item;
        
        }, 0)

        console.log(newReduceArr)

//Higher Order Functions