module.exports = function getZerosCount(number) { 

      var current= number, zeroNumber = 0; 

   while(current>=1){ 
    current=Math.floor(current/5); 
    zeroNumber+=current; 
       } 
         return zeroNumber; 
  };