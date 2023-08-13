import React,{useState} from 'react'
import "./expenseForm.css"
export default function ExpenseForm(props) {
    // const [userInput,setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    //  })
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    const titelchangeHandler=(event)=>{
    //    setUserInput((prevState)=>{
    //         return {...prevState,
    //         enteredTitle:event.target.value};
    //     });
    setEnteredTitle(event.target.value);
    }
    const amountchangehandler=(event)=>{
        // setUserInput((prevState)=>{
        //     return {...prevState,
        //     enteredAmount:event.target.value};
        // });
        setEnteredAmount(event.target.value)
    }
    const datechangehandler=(event)=>{
        // setUserInput((prevState)=>{
        //     return {...prevState,
        //     enteredDate:event.target.value};
        // }); 
        setEnteredDate(event.target.value);
    }
    const submitHandler=(e)=>{
    e.preventDefault();
   const expenseData={
      title:enteredTitle,
      amount:enteredAmount,
      date:new Date(enteredDate)
   }
//    console.log(expenseData);
   props.onSaveExpenseData(expenseData);
   setEnteredAmount('');
   setEnteredTitle('');
   setEnteredDate('');
    }
  return (
    <>
    <form onSubmit={submitHandler} >
        <div className="new-expense_controls">
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titelchangeHandler}/>
                </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" value={enteredAmount} onChange={amountchangehandler} min="0.01" step="0.01" />
                </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" value={enteredDate} onChange={datechangehandler} min="2019-01-01" max="2022-12-31" />
                </div>
        </div>
        <div className="new-expense__action">
            <button type="submit">Add Expense</button>
        </div>
    </form>
    </>
    
  )
}
