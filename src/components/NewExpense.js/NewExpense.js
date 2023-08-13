import React from 'react'
import './newExpence.css'
import ExpenseForm from './ExpenseForm'
export default function NewExpense(props) {
  const saveExpenseDataHandler=(enteredExpenseData)=>{
      const expenseData={
        id:Math.random().toString(),
        ...enteredExpenseData
        
      }
     props.onAddExpense(expenseData);
    //  console.log(expenseData);
  }
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}
