// QRScanner.js
import React, { useState } from 'react';
import QrReader from 'react-qr-reader';

const QRScanner = ({ onScan }) => {
  const [error, setError] = useState(null);

  const handleScan = data => {
    if (data) {
      onScan(data);
    }
  }

  const handleError = err => {
    setError(err);
  }

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default QRScanner;
