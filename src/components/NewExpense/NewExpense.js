import React, { useState } from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEditing,setIsEditing] = useState(false);
    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random()
        }
        props.onNewExpense(expenseData)
        setIsEditing(false);
    }

    const editingHandler = () => {
      setIsEditing(true);
    }

    const cancelHandler = () => {
      setIsEditing(false);
    }


  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onCancelForm={cancelHandler} onSaveExpenseData={saveExpenseData}/>}
    </div>
  );
}

export default NewExpense;
