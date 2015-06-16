//function1 - generate fibonacci series
$("#btn1").click(function(e){
	document.getElementById("output1").style.display = "block";
    var n = document.getElementById('number1').value;
	var i,j=1,c=0,k;
	var out = document.getElementById('output1');
	out.innerHTML = "";
	for(i=0;i<n;i++){
		out.innerHTML = out.innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;" + j;
		k=c+j;
		c=j;
		j=k;
	}
});

//function2 - generate nth fibonacci series
$("#btn2").click(function(e){
	document.getElementById("output2").style.display = "block";
    var n = document.getElementById('number2').value;
	var i,j=1,c=0,k;
	var out = document.getElementById('output2');
	for(i=1;i<n;i++){
		k=c+j;
		c=j;
		j=k;
	}
	out.innerHTML = j;
});

//function3 - generate nth factorial
$("#btn3").click(function(e){
	document.getElementById("output3").style.display = "block";
    var n = document.getElementById('number3').value;
	var i,j=n,k;
	var out = document.getElementById('output3');
	for(i=2;i<n;i++){
		j=j*i;
	}
	out.innerHTML = j;
});

//function4 - check prime
$("#btn4").click(function(e){
	document.getElementById("output4").style.display = "block";
    var n = document.getElementById('number4').value;
	var i,j=n,c=0;
	var out = document.getElementById('output4');
	for(i=2;i<(n/2);i++){
		if(n%i===0)
		{
			c=1;
			break;
		}
	}
	if(c===1)
		out.innerHTML = "No, "+ n+" is not prime!";
	else 
		out.innerHTML = "Yes, "+ n+" is prime!";
});

//function5 - check  armstrong
$("#btn5").click(function(e){
	document.getElementById("output5").style.display = "block";
    var n = document.getElementById('number5').value;
    var len=(""+n).length;
	var i,sum=0,c=0,k,q;
	k=n;
	var out = document.getElementById('output5');
	while(k>0)
	{
		i=k%10;
		q = ((Math.pow(i,len)));
		sum=sum+q;
		k=parseInt(k/10);
	}
	if(sum!=n)
		out.innerHTML = "No, "+ n+" is not Armstrong!";
	else 
		out.innerHTML = "Yes, "+ n+" is Armstrong!";
});

//function6 - decimal to binary
$("#btn6").click(function(e){
	//document.getElementById("output6").style.display = "block";
    var n = document.getElementById('number6').value;
    var e = document.getElementById("numberType");
	var numType = e.options[e.selectedIndex].value;
	var out1 = document.getElementById('output6a');
	var out2 = document.getElementById('output6b');
	var out="";
    if(numType==0){ //binary
    	var i,l,k,sum=0,x;
    	k=n;
    	l=(n).length;
    	for(x=0;x<l;x++)
    	{
    		i=n%10;
    		sum=sum+(i*Math.pow(2,x));
    		n=parseInt(n/10);
    	}
    	out1.innerHTML = k;
		out2.innerHTML = sum;
    } else if(numType==1){ //decimal
    	var i,k;
		k=n;
		while(k>0){
			i=k%2;
			out=i+out;
			k=parseInt(k/2);
		}
		out1.innerHTML = out;
		out2.innerHTML = n;
    }
    
});



 $(document).ready(function(){
 	$('select').material_select();
 	
    $(".button-collapse").sideNav();
        
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });