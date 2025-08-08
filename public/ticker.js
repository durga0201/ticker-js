document.addEventListener('DOMContentLoaded', function() {
    const tickerElement = document.getElementById('stock-ticker');

    function fetchStockData() {
        const url = '/api/get-stocks';

        fetch(url)
            .then(response => {
                // Also check if the response itself was successful
                if (!response.ok) {
                    // Get the error message from the body to display it
                    return response.json().then(err => { throw new Error(err.error) });
                }
                return response.json();
            })
            .then(data => {
                tickerElement.innerHTML = ''; // Clear previous data

                data.forEach(stock => {
                    const price = stock.price ? stock.price.toFixed(2) : 'N/A';
                    const change = stock.change ? stock.change.toFixed(2) : 'N/A';
                    const changePercent = stock.changesPercentage ? stock.changesPercentage.toFixed(2) : 'N/A';
                    const isPositive = parseFloat(change) >= 0;

                    const changeClass = isPositive ? 'stock-change-positive' : 'stock-change-negative';
                    const changeSign = isPositive ? '+' : '';

                    // **IMPROVEMENT**: Use the full HTML with CSS classes for styling
                    const stockHTML = `
                        <div class="stock">
                            <span class="stock-symbol">${stock.symbol}:</span>
                            <span class="stock-price">$${price}</span>
                            <span class="${changeClass}">
                                (${changeSign}${change} / ${changeSign}${changePercent}%)
                            </span>
                        </div>
                    `;
                    tickerElement.innerHTML += stockHTML;
                });
            })
            .catch(error => {
                console.error('Error fetching stock data from server:', error);
                // Display the detailed error message we now get from the server
                tickerElement.innerHTML = `<p style="color:red; font-weight:bold;">${error.message}</p>`;
            });
    }

    fetchStockData();
    setInterval(fetchStockData, 90000);
});
