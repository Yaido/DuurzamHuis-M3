let tijd = document.getElementById("js--tijd");

setInterval(() =>{
    let d = new Date();
    let time = d.toLocaleTimeString();
    let date = d.toLocaleDateString();
    let currentdate = `${time} ${date}`;
    tijd.innerHTML = currentdate;
},1000)

const date = new Date();
console.log(date);

const labels = [
    "Januari",
    "Februari",
    "Maart",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Augustus",
    "September",
    "October",
    "November",
    "December"

];


const energieData = {
    labels: labels,
    datasets: [
        {
            label: "Energie Kosten Per Maand",
            data: [800,1200,750,900,1100,600,800,950,700,630,1150,850],
            backgroundColor: [
                '#57C5B6',
                '#159895',
                '#1A5F7A',
                '#002B5B'
              ],
        }
    ]
}

const waterData = {
    labels: labels,
    datasets: [
        {
            label: "Water verbruik per maand",
            data: [3,6,2,3,9,4,6,3,1,7,5,6],
            backgroundColor: [
                '#57C5B6',
                '#159895',
                '#1A5F7A',
                '#002B5B'
              ],
        }
    ]
}

const config = {
    type:'pie',
    data: energieData,
}

const config2 = {
    type: 'bar',
    data: energieData,
}

const config3 = {
    type: 'line',
    data: waterData,
}

const config4 = {
    type: 'doughnut',
    data: waterData,
}

new Chart(document.getElementById("js--chart--1"), config);
new Chart(document.getElementById("js--chart--2"), config2);
new Chart(document.getElementById("js--chart--3"), config3);
new Chart(document.getElementById("js--chart--4"), config4);