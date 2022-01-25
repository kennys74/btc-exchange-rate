import React, { useState } from "react";
import CryptoTile from "./CryptoTile";
import ExchangeForm from "./ExchangeForm";

const Home = () => {
  const tiles = [
    {
      id: 1,
      title: "Bitcoin",
      rate: "33800",
      icon: <i className="fab fa-bitcoin" />,
    },
    {
      id: 2,
      title: "Ethereum",
      rate: "44800",
      icon: <i className="fab fa-ethereum" />,
    },
  ];

  const [selectedTile, setSelectedTile] = useState(tiles[0]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="d-flex">
            {tiles.map((item) => (
              <CryptoTile
                data={item}
                selected={item.id === selectedTile.id}
                tileClicked={(data) => setSelectedTile(data)}
              ></CryptoTile>
            ))}
          </div>
          <ExchangeForm />
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
};

export default Home;
