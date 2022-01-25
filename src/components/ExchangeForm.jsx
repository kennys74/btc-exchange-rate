import React from "react";

const ExchangeForm = () => {
  return (
    <form className="form">
      <div className="input-group mb-3">
        <input type="text" />
        <i class="fas fa-exchange-alt" />
        <input type="text" />
        <input className="btn btn-primary" type="submit" value="Update" />
      </div>
    </form>
  );
};

export default ExchangeForm;
