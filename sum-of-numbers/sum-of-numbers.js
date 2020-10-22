function getSum( a,b )
{
   let sum = 0;
   let bigger;
   let smaller;

   //may be redundant 
   if (a == b){
         ans = a;
   }

   //compare to find smallest and largest values
   if (a > b){
       bigger = a;
       smaller = b;
   }
   else{
       bigger = b;
       smaller = a;
   }//ends comparison

   for (let i = smaller; i <= bigger; i++ ){
        sum+= i;
   }//iterate and add each value between smaller and bigger

   return sum;
}
/************************************ANOTHER VERSION WITH SHORTER CODE******************************************/
/************************************USING MATH.MAX AND MATH.MIN******************************************/
function getSum( a,b )
{
   let sum = 0;
   
    //sets the largest given value to the bigger variable
   let bigger = Math.max(a,b);

   //sets the smallest given value to smaller variable
   let smaller = Math.min(a,b);

   for (let i = smaller; i <= bigger; i++ ){
        sum+= i;
   }//iterate and add each value between smaller and bigger

   return sum;
}