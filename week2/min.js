function min(a, b){
	return (a<b)?a:b;
}

function pow(a, n){
	var prom = a;
	for (var i = 1; i< n; i++) {
	 prom *=a;
	}
	return prom;
}


function fact(n){
	
	if(n==1) return n;
	else return n*fact(n-1) ;
}

function fibonnacci(n){
	if (!(n >2)) return 1;
		return fibonnacci(n-2) + fibonnacci(n-1);
}
function sum1(n){
	var res = 0;;
	for(var i = 1; i<=n;i++)
		res +=i; 
	return res;
}

function recsum(n){
	if(n==1) return 1;
	else return n + recsum(n-1);
}


function arfsum(n){
	return n*(n+1)/2;
}
alert(arfsum(5));