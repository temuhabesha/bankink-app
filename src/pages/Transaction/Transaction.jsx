import React from 'react'
import './Transaction.css'

const Transaction = () => {
  return (
    <div className="transaction">
      <h1>MONY TRANSFER</h1>
      <form>
        <div className="sendersaccount">
          <label htmlFor="senderaccount">senders account</label>
          <input type="text" placeholder="senders account" />
        </div>
        <div className="reciversaccount">
          <label htmlFor="reciveraccount">reciver account</label>
          <input type="text" placeholder="reciver account" />
        </div>
        <div className="ammount">
          <label htmlFor="amount">amount</label>
          <input type="text" placeholder="amount" />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Transaction
