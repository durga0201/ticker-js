Quantum Computing Stock Ticker
A simple, real-time stock ticker that displays prices for a curated list of quantum computing companies. This project is built with a secure Node.js backend proxy to protect the API key from being exposed on the front-end.
Description
This application provides a lightweight and embeddable stock ticker for any website. It uses a Node.js server to act as a middleman between the client-side JavaScript and the FinancialModelingPrep (FMP) API. This server-side approach is a critical security practice, as it ensures the API key remains secret and is never exposed in the browser.
The front-end dynamically fetches data from our server and updates the stock prices without requiring a page reload.
Features
Real-Time Data: Displays up-to-date stock information including price, change, and percentage change.
Secure: API key is stored securely on the server using environment variables and is never exposed to the client.
Efficient: Fetches data for all specified stocks in a single API call.
Customizable: Easily change the list of stocks and the data refresh interval.
Lightweight: Built with a minimal set of dependencies (Node.js, Express).
Tech Stack
Backend: Node.js, Express.js
Frontend: HTML, CSS, Vanilla JavaScript (ES6)
API: FinancialModelingPrep (FMP)
Dependencies: express, dotenv, node-fetch@2
