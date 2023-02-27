
var y = Math.random()*5 + 1;
y  = Math.floor(y);

var x = prompt("What is your name?");
if(y===1)
{
    document.getElementById("demo1").innerHTML = 
"<img src='cele.jpg' alt=''>" + "<br>" +  "Hello " + x + ","+"<br>"+" You are a hardworking person and you believe in positivity.";
}
else if(y===2){
    document.getElementById("demo1").innerHTML = 
"<img src='cele.jpg' alt=''>" + "<br>" +  "Hello " + x + ","+"<br>"+" You waste most of your time on social media and do unnecessary things. This is the best time to come on the path of success.";
}
else if(y===3){
    document.getElementById("demo1").innerHTML = 
"<img src='cele.jpg' alt=''>" + "<br>" +  "Hello " + x + ","+"<br>"+" Aap duniya ke sabse bde Gaa*du hai, Jitna jldi ho ske ye duniya chood de.🙏";
}
else if(y===4){
    document.getElementById("demo1").innerHTML = 
"<img src='cele.jpg' alt=''>" + "<br>" +  "Hello " + x + ","+"<br>"+" You are a kind hearted person, Salute to you.";
}
else {
    document.getElementById("demo1").innerHTML = 
    "<img src='cele.jpg' alt=''>" + "<br>" +  "Hello " + x + ","+"<br>"+" You like girls more, leave this habit, otherwise you will lose your weight.";
}
// document.getElementById("demo2").innerHTML = 


