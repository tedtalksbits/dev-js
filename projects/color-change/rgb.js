let vals = new Array(15);

vals = vals.fill().map(x => Math.floor(Math.random()*255))
console.log(vals)

let rgb = [0,0,0]
let aNum = 0;
for (let i = 0; i < 3; i++){
    aNum+=vals[i];
    rgb[0]=(aNum)
    rgb[1]=(aNum)
    rgb[2]=(aNum)
}

console.log(rgb)