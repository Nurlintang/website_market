// Dynamic Greeting
function updateGreeting() {
    const hour = new Date().getHours();
    const greeting = document.getElementById('greeting-message');
    if (hour < 12) {
        greeting.textContent = "Good Morning, Lintang !";
    } else if (hour < 18) {
        greeting.textContent = "Good Afternoon, Lintang !";
    } else {
        greeting.textContent = "Good Evening, Lintang!";
    }
}
updateGreeting();

// Dummy Interest Rates
const interestRates = [
    { country: "USA", rate: "4.5%" },
    { country: "Eurozone", rate: "3.4%" },
    { country: "Japan", rate: "0.10%" },
];

function loadInterestRates() {
    const container = document.getElementById('interest-rate-data');
    interestRates.forEach(rate => {
        const div = document.createElement('div');
        div.className = 'rate-item';
        div.innerHTML = `<strong>${rate.country}</strong><br>Rate: ${rate.rate}`;
        container.appendChild(div);
    });
}
loadInterestRates();
