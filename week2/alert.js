var name= prompt("Who you are?","");
if (name=="admin") {

	var pass = prompt("pass?","");

	if (pass=="Черный властелин"){  
		alert("Welcome");
	}
	else 
		if (pass==null){
		alert("Log in is aborted");
	}
	else{
	 alert("Wrong password");
	}

} 
else
 if (name=="null") {//чому тут має бути рядок?
	alert("log in is aborted");
}
else{
	alert("1i dont know you");
}