function isOrthogonal(u,v) {

    var calc = 0;

    
    for (let i = 0; i < u.length; i++){
        calc+= u[i] * v[i];
    }

    return calc ==0;





}

    console.log(isOrthogonal([1,2],[2,1]),false);
    console.log(isOrthogonal([1,-2],[2,1]),true);
    console.log(isOrthogonal([7,8],[7,-6]),false);
    console.log(isOrthogonal([-13,-26],[-8,4]),true);
    console.log(isOrthogonal([1,2,3],[0,-3,2]),true);
    console.log(isOrthogonal([3,4,5],[6,7,-8]),false);
    console.log(isOrthogonal([3,-4,-5],[-4,-3,0]),true);
    console.log(isOrthogonal([1,-2,3,-4],[-4,3,2,-1]),true);
    console.log(isOrthogonal([2,4,5,6,7],[-14,-12,0,8,4]),true);
    console.log(isOrthogonal([5,10,1,20,2],[-2,-20,-1,10,5]),false);
