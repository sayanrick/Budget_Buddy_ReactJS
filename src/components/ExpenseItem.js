import './ExpenseItem.css';
import './ExpenseDate.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem = (props) => {

    return (
    <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title} location={props.location} amount={props.amount}/>
    </div>
    )
}


export default ExpenseItem;