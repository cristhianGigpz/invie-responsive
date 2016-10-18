//alert('todo ok');
var numeros = 100;
//var divisible = false;

for (var i = 0; i <= numeros; i++)
{
  if (i % 3 == 0)
  {
      document.write("Fizz");
      //divisible = true;
  }
  if (i % 5 == 0)
  {
      document.write("Buzz");
      //divisible = true;
  }
  //if(!divisible)
  if(i % 3 !=0 && i % 5 !=0)
  {
      document.write(i);
  }
  document.write("<br />");
}

function esDivisible(num, divisor)
{
  if (num % divisor == 0) {
    return true;
  }
  else
  {
    return false;
  }
}
