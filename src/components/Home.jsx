import React, { useState, useEffect } from "react";
import CryptoTile from "./CryptoTile";
import ExchangeForm from "./ExchangeForm";

export function getExchangeRate() {
  return fetch("https://btc-exchange-rate.herokuapp.com/currencies/BTC").then(
    (data) => data.json()
  );
}

export function getRequests() {
  return fetch("https://btc-exchange-rate.herokuapp.com/requests").then(
    (data) => data.json()
  );
}

const Home = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const [requests, setRequests] = useState(null);

  useEffect(() => {
    const mounted = true;
    getExchangeRate().then((items) => {
      if (mounted) {
        setBitcoinPrice(items.data.rates.ZAR);
        console.log(bitcoinPrice);
      }
    });
    getRequests().then((items) => {
      if (mounted) {
        setRequests(items);
      }
    });
    return mounted === false;
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <p>Add a Rand value below to view its value in Bitcoin</p>
          <div className="d-flex">
            <CryptoTile rate={bitcoinPrice}></CryptoTile>
          </div>
          <ExchangeForm rate={bitcoinPrice} />
        </div>
        <div className="col-6">
          <p>List of user requests and responses</p>
          <ul
            class="list-group"
            style={{ maxHeight: 400, overflowY: "scroll" }}
          >
            {requests &&
              requests.map((item) => (
                <li key={item._id} class="list-group-item">
                  <strong>Request:</strong> {item.exchangeRateRequest}
                  <br></br>
                  <strong>Response:</strong> {item.exchangeRateResponse}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
