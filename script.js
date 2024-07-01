document.addEventListener('DOMContentLoaded', function() {
    const metarElement = document.getElementById('metar');

    // Function to fetch METAR data from the website
    async function fetchMetar() {
        try {
            const response = await fetch('https://metar-taf.com/kden');
            const text = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, 'text/html');
            const metar = doc.querySelector('code').innerText; // Assuming the METAR is inside a <code> tag
            metarElement.textContent = metar;
        } catch (error) {
            metarElement.textContent = 'Error fetching METAR data';
            console.error('Error:', error);
        }
    }

    // Call the fetch function
    fetchMetar();
});
