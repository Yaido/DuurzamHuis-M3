let tijd = document.getElementById("js--tijd");

setInterval(() =>{
    let d = new Date();
    tijd.innerHTML = d.toLocaleTimeString();
},1000)

const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"

];


const data = {
    labels: labels,
    datasets: [
        {
            label: "Energy cost per month",
            data: [800,1200,750,900,1100,600,800,950,700,630,1150,850],
            backgroundcolor: ['#FF6B6B','#FFD93D','#6BCB77','#4D96FF','#F473B9'],
        }
    ]
}

const config = {
    type:'doughnut',
    data: data,
}

const config2 = {
    type: 'bar',
    data: data,
}

new Chart(document.getElementById("js--chart--1"), config);
new Chart(document.getElementById("js--chart--2"), config2);