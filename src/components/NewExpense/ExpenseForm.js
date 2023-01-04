import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //* State as an object
  // const [userInput,setUserInput] = useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  // })

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
    //* Alternative 1
    // setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value,
    // })
    //* Alternative 2 more relevant when using along with previous state
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredTitle:event.target.value}
    // })
  };

  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
    //* Alternative 1
    // setUserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value,
    // })
    //* Alternative 2 more relevant when using along with previous state
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredAmount:event.target.value}
    // })
  };

  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
    //* Alternative 1
    // setUserInput({
    //     ...userInput,
    //     enteredDate:event.target.value,
    // })
    //* Alternative 2 more relevant when using along with previous state
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredDate:event.target.value}
    // })
  };

  const formHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={formHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
