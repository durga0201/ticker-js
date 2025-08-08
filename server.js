// Load environment variables from .env file
require('dotenv').config();
const express = require('express');
// const fetch = require('node-fetch'); // REMOVE THIS LINE

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/get-stocks', async (req, res) => {
    // Dynamically import node-fetch here
    const fetch = (await import('node-fetch')).default;

    const stocks = ['IONQ', 'RGTI', 'QBTS', 'NVDA', 'GOOGL', 'MSFT'];
    const stockList = stocks.join(',');
    const apiKey = process.env.FMP_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'API key not found on server.' });
    }

    const url = `https://financialmodelingprep.com/api/v3/quote/${stockList}?apikey=${apiKey}`;

    try {
        const apiResponse = await fetch(url);
        const data = await apiResponse.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching from FMP API:', error);
        res.status(500).json({ error: 'Failed to fetch stock data.' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});