let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
//  Date() iss the built in funtion of js which gives current time day date
// console.log(currentTime);
setInterval(()=>{
    // setInterval() is a function in JavaScript that is used to repeatedly execute a given function at a specified interval.
    
    let currentTime = new Date();
    hrs.innerHTML=(currentTime.getHours()<10?'0':'')+currentTime.getHours();
    min.innerHTML=(currentTime.getMinutes()<10?'0':'')+currentTime.getMinutes();
    sec.innerHTML=(currentTime.getSeconds()<10?'0':'')+currentTime.getSeconds();
},1000
)
