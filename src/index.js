module.exports = function getZerosCount(number) { 
  let current= number, zerCount = 0; 
  while(current>=1){ 
    current=Math.floor(current/5); 
    zerCount+=current; 
  } 
  return zerCount; 
  };