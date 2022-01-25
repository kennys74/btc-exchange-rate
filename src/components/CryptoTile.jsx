import React from "react";

const CryptoTile = ({ data, selected, tileClicked }) => {
  const { title, rate, icon } = data;

  const handleClick = () => tileClicked(data);
  return (
    <div onClick={handleClick} className={`card ${selected && "selected"}`}>
      <div className="card-body">
        <div className="coin-icon mb-3">{icon}</div>
        <div>{title}</div>
        <div>@ {rate}</div>
      </div>
    </div>
  );
};

export default CryptoTile;
