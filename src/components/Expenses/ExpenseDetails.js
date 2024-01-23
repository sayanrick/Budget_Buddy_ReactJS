

import { useState } from "react";
import "./ExpenseItem.css";

const ExpenseDetails = (props) => {

  const [title, setTitle] = useState(props.title);

  const clickHAndler = () => {
    setTitle('Updated');
    console.log(title);
  }

  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <h2>{props.location}</h2>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHAndler}>Change Title</button>
    </div>
  );
};

export default ExpenseDetails;
