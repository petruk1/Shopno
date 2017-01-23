function checkAge(age) {
	
   return (age > 18)?true:confirm('Родители разрешили?')
   return res;*/
   return (age>18)||confirm('Родители разрешили?')
  
}
alert(checkAge(20));