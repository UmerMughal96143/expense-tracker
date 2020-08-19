import React, { useContext, useState } from "react";
import { TransactionContext } from "./transactionContext";
import "./App.css";

function Child() {
  let { transactions, addTransaction, deleteTransaction } = useContext(
    TransactionContext
  );
  let [newDesc, setDesc] = useState("");
  let [newAmount, setAmount] = useState(0);

  const handleAddition = (event) => {
    event.preventDefault();
    if (Number(newAmount) === 0) {
      alert("Please Enter correct amount");
      return false;
    }

    addTransaction({
      amount: Number(newAmount),
      desc: newDesc,
    });

    setDesc("");
    setAmount(0);
  };
  const deleteSingleTransaction = (index) => {
    deleteTransaction(index);
  };

  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) income += transactions[i].amount;
    }
    return income;
  };

  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) expense += transactions[i].amount;
    }
    return expense;
  };

  return (
    <div className="container">
      <h1 className="text-center"> Expense Tracker APP</h1>
      <h2>
        Your Balance <br />${getIncome() + getExpense()}
      </h2>

      {/* <div className="expense-container">
  <h3>INCOME <br/> ${getIncome()}</h3>
  <h3>EXPENSE <br/> ${getExpense()}</h3>
            

        </div> */}
      <div className="income-expense">
        <div className="income">
          <p>
            INCOME <br />
            <span>${getIncome()}</span>
          </p>
        </div>
        <div className="expense">
          <p>
            EXPENSE <br />
            <span>${getExpense()}</span>
          </p>
        </div>
      </div>

      <h3>History</h3>
      <hr />
      <ul className="transaction-list">
        {transactions.map((transObj, ind) => {
          return (
            <li key={ind}>
              <span>{transObj.desc}</span>
              <span>${transObj.amount}</span>
              <button
                className="delete-transaction"
                onClick={() => deleteSingleTransaction(ind)}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
      <h3>
        Add new Transection <hr />
      </h3>

      <form className="transaction-form" onSubmit={handleAddition}>
        <label>
          Enter Description <br />
          <input
            type="text"
            value={newDesc}
            placeholder="Enter Descrition"
            onChange={(ev) => setDesc(ev.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Enter amount <hr />
          <input
            type="text"
            value={newAmount}
            placeholder="Enter Amount"
            onChange={(ev) => setAmount(ev.target.value)}
            required
          />
        </label>
        <br />
        <input type="submit" value="ADD TRANSACTIONS" />
      </form>
    </div>
  );
}

export default Child;
