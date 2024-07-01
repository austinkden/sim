document.addEventListener('DOMContentLoaded', function() {
    const metarElement = document.getElementById('metar');

    // Fetch METAR data using a CORS proxy
    async function fetchMetar() {
        try {
            const response = await fetch('https://api.allorigins.win/get?url=https://metar-taf.com/kden');
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

    // Call the fetch function
    fetchMetar();
});
