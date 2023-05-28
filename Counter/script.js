var i=document.getElementById("counter").innerText=0;
var element= document.getElementById("counter");


const handleDecrease = ()=>{
    i--;
    document.getElementById("counter").innerText=i;
    element.style.color="red";
    console.log(i);
}

const handleIncrease = ()=>{
    i++;
    document.getElementById("counter").innerText=i;
    element.style.color="green";
    console.log(i);
}

const handleReset = ()=>{
    i=0;
    document.getElementById("counter").innerText=i;
    element.style.color="black";
    console.log(i);
}