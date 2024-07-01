document.addEventListener('DOMContentLoaded', function() {
    const metarElement = document.getElementById('metar');
    const fetchMetarBtn = document.getElementById('fetchMetarBtn');
    const airportCodeInput = document.getElementById('airportCode');

    async function fetchMetar(airportCode) {
        try {
            const response = await fetch(`https://api.allorigins.win/get?url=https://metar-taf.com/${airportCode}`);
            const data = await response.json();
            const html = data.contents;
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const metar = doc.querySelector('code').innerText; // Adjust the selector as needed
            metarElement.textContent = metar;
        } catch (error) {
            metarElement.textContent = 'Error fetching METAR data';
            console.error('Error:', error);
        }
    }

    function fetchMetarForInput() {
        const airportCode = airportCodeInput.value.trim().toUpperCase();
        if (airportCode) {
            metarElement.textContent = 'Loading...';
            fetchMetar(airportCode);
        } else {
            metarElement.textContent = 'Please enter a valid airport code';
        }
    }

    fetchMetarBtn.addEventListener('click', fetchMetarForInput);

    airportCodeInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            fetchMetarForInput();
        }
    });
});
