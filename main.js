
var y = Math.random()*5 + 1;
y  = Math.floor(y);

var x = prompt("Enter your name to know mrore about you?");
if(y===1)
{
    document.getElementById("demo1").innerHTML = 
"<img src='cele.jpg' alt=''>" + "<br>" +  "Hello " + x + ","+"<br>"+" You are a hardworking person and you believe in positivity. Your unwavering commitment to hard work and belief in positivity is truly admirable.";
}
else if(y===2){
    document.getElementById("demo1").innerHTML = 
"<img src='cele.jpg' alt=''>" + "<br>" +  "Hello " + x + ","+"<br>"+" You waste most of your time on social media and do unnecessary things. This is the best time to come on the path of success.";
}
else if(y===3){
    document.getElementById("demo1").innerHTML = 
"<img src='cele.jpg' alt=''>" + "<br>" +  "Hello " + x + ","+"<br>"+" You love to visit new places and meet with different peoples. Your passion for exploring new places and meeting people from diverse background is truly admirable and inspiring.";
}
else if(y===4){
    document.getElementById("demo1").innerHTML = 
"<img src='cele.jpg' alt=''>" + "<br>" +  "Hello " + x + ","+"<br>"+" You are a kind hearted person. Your genuine compassion towards others is truly heartwarming and makes a positive impact on those around you. Keep spreadig kindness!";
}
else {
    document.getElementById("demo1").innerHTML = 
    "<img src='cele.jpg' alt=''>" + "<br>" +  "Hello " + x + ","+"<br>"+" Great job in prioritizing your health and hygiene! Your dedication to personal fitness and hygiene is truly commrndable and serves as a positive example for others to follow.";
}
// document.getElementById("demo2").innerHTML = 


