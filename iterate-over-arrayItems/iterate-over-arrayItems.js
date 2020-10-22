let array1 = [ 1, 2, 3, 'stephanie'];

array1.forEach((Element)=>{
    console.log(Element);
})

/******************************* Second example ******************************************/

let array2 = [
    1000, 
    2330,
    31,
    'Jennifer'
];

array2.forEach((i)=>{

    let type = (typeof i);

    if (type == 'string'){

        console.log(`the input '${i}' is a string`)
    }
    else {
        console.log(`${i} is a ${type}`);
    }
})