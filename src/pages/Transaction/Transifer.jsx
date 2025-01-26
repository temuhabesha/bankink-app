import React, { useState } from "react";
import "./transfer.css";
import axios from "axios";

const Transaction = () => {
  const [senders_account, setsenders_account] = useState("");
  const [recivers_account, setrecivers_account] = useState("");
  const [amount, setamount] = useState("");

  async function handlesubmit(e) {
    e.preventDefault();
    try {
      const recponce = await axios.post("http://localhost:3001/transaction", {
        senders_account,
        recivers_account,
        amount,
      });
      alert(recponce.data.msg);
    } catch (error) {
      alert(error.response.data.msg);
    }
  }
  return (
    <div className="tranisfer">
      <h1>MONY TRANSFER</h1>
      <form onSubmit={handlesubmit}>
        <div className="sendersaccount">
          <label htmlFor="senderaccount">senders account</label>
          <input
            type="text"
            placeholder="senders account"
            onChange={(e) => setsenders_account(e.target.value)}
          />
        </div>
        <div className="reciversaccount">
          <label htmlFor="reciveraccount">reciver account</label>
          <input
            type="text"
            placeholder="reciver account"
            onChange={(e) => setrecivers_account(e.target.value)}
          />
        </div>
        <div className="ammount">
          <label htmlFor="amount">amount</label>
          <input
            type="text"
            placeholder="amount"
            onChange={(e) => setamount(e.target.value)}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Transaction;
