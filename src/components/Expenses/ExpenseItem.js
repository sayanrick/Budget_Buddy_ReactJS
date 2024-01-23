import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // function clickHandler() {}
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails
          title={props.title}
          location={props.location}
          amount={props.amount}
        />
      </Card>
    </li>
  );
};

export default ExpenseItem;
