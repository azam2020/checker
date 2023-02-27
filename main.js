// let x = "Azam" + 3 + 8;
// alert(x);

// let x = BigInt(333333333333334223445566789876);
// alert(x);

// const x = ["azam", "hsgs", "dujd"];
// for(var i=0; i<x.length; i++){
//     alert(x[i]);
// }

// const obj= {
//     name: "Mohammad Azam",
//     course: "BTech",
//     en_no: "19ELB152",
//     sr_no: 31
// };

// document.getElementById("demo").innerHTML=
// "Name of the candidate is " + obj.name;

var y = Math.random()*5 + 1;
y  = Math.floor(y);

var x = prompt("What is your name?");
if(y===1)
{
    document.getElementById("demo1").innerHTML = 
"<img src='cele.jpg' alt=''>" + "<br>" +  "Hello " + x + ", You are a hardworking person and you believe in positivity.";
}
else if(y===2){
    document.getElementById("demo1").innerHTML = 
"<img src='cele.jpg' alt=''>" + "<br>" +  "Hello " + x + ", You waste most of the time on social media and do unnecessary things. This is the best time to come on the path of success.";
}
else if(y===3){
    document.getElementById("demo1").innerHTML = 
"<img src='cele.jpg' alt=''>" + "<br>" +  "Hello " + x + ", Aap duniya ke sabse bde Gaa*du hai, Jitna jldi ho ske ye duniya chood de.🙏";
}
else if(y===4){
    document.getElementById("demo1").innerHTML = 
"<img src='cele.jpg' alt=''>" + "<br>" +  "Hello " + x + ", You are a kinf hearted person, Salute to you.";
}
else {
    document.getElementById("demo1").innerHTML = 
    "<img src='cele.jpg' alt=''>" + "<br>" +  "Hello " + x + ", You like girls more, leave this habit, otherwise you will lose weight.";
}
// document.getElementById("demo2").innerHTML = 


