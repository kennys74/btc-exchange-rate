import React, { useState, useEffect, useCallback } from "react";
import InputBase from "./InputBase";

const ExchangeForm = ({ rate }) => {
  const INIT = { amount: 0, converted: 0 };
  const [exchange, setExchange] = useState(INIT);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setExchange({
      ...exchange,
      converted: Number(exchange.amount / rate).toFixed(2),
    });
  }, [rate]);

  const handleChange = ({ target: { value } }) => {
    const val = Number(value.trim());
    const converted = (val / rate).toFixed(2);

    setExchange({
      amount: val,
      converted,
    });
  };

  const saveRequest = useCallback(
    (e) => {
      e.preventDefault();
      const payload = {
        ...exchange,
      };
      setTransactions([...transactions, payload]);
    },
    [transactions]
  );

  return (
    <form onSubmit={saveRequest} className="form">
      <div className="input-group mb-3">
        <InputBase name="name" onChange={handleChange} textLabel="ZAR" />
        <i class="fas fa-exchange-alt" />
        <InputBase textLabel="Bitcoin" value={exchange.converted} />
      </div>
      <input className="btn btn-primary" type="submit" value="Update" />
    </form>
  );
};

export default ExchangeForm;
