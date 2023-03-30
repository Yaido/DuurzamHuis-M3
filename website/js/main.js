let tijd = document.getElementById("js--tijd");

setInterval(() =>{
    let d = new Date();
    tijd.innerHTML = d.toLocaleTimeString();
},1000)
