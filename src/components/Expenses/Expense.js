
import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
function Expense(props) {
  const [filteredYear,setFilteredYear] = useState('2020');
  const filterChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear)
    
  }
  const filteredExpenses=props.expenses.filter(expense =>{
    return  expense.date.getFullYear().toString()===filteredYear;
  })

  
  return (
    <>    
    <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList  items={filteredExpenses}/>
            
      </Card> 
    </>
    
  );
}

export default Expense;
