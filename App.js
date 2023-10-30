// App.js
import React, { useState } from 'react';
import QRScanner from './components/QRScanner';
import Rating from './components/Rating';
import PricingOptions from './components/PricingOptions';

function App() {
  const [scannedData, setScannedData] = useState(null);

  const handleScan = data => {
    setScannedData(data);
  }

  const handleRatingSubmit = rating => {
    // Handle rating submission (e.g., store in state, send to server)
    console.log('Rating submitted:', rating);
  }

  const handlePricingSubmit = option => {
    // Handle pricing option submission (e.g., store in state, send to server)
    console.log('Pricing option submitted:', option);
  }

  return (
    <div className="App">
      <h1>Supplier Assessment PWA</h1>
      {scannedData ? (
        <>
          <p>Scanned QR Code: {scannedData}</p>
          <Rating onSubmit={handleRatingSubmit} />
          <PricingOptions onSubmit={handlePricingSubmit} />
        </>
      ) : (
        <QRScanner onScan={handleScan} />
      )}
    </div>
  );
}

export default App;
