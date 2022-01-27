import React from "react";

const CryptoTile = ({ rate }) => {
  const randPrice = Number(rate);
  return (
    <div className="card">
      <div className="card-body">
        <div className="coin-icon mb-3">
          <i className="fab fa-bitcoin" />
        </div>
        <div>1 Bitcoin (BTC)</div>
        <div>= R {randPrice.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default CryptoTile;
