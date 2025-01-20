let  timer=60;
let num;
let score=0;
function makeBubble(){
    for(let i=0;i<180;i++){
    num=Math.floor(Math.random()*10+1);
    document.getElementById("hit").innerHTML=num;
    bubble +=`<div class=bubble>${num}</div>`;
    }
    document.getElementById("bottom");
    
}

function time(){
    setInterval(()=>{
        if(timer>0){
    document.getElementById("time").innerHTML=timer;
    timer--}
    },1000)
}
makeBubble()
time()
console.log("hello");
