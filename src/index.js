module.exports = function getZerosCount(number) {
let num=number,div2=0,div5=0,current;

for (let i=1;i<=num;i++)
{
  current=i;

while(current%2==0) {
  current=Math.floor(current/2);
  div2++;
}
while(current%5==0){
  current=Math.floor(current/5);
  div5++;
}
}
if(div2>div5){
  return div5;
}
return div2;
}
