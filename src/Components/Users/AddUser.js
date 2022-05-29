import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameInputChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
            title: 'Invalid Input',
            message: 'Please enter a valid name and the age (non empty values)'
        })
      return;
    }
    if (+enteredAge < 1) {
        setError({
            title: 'Invalid age',
            message: 'Please enter a valid age greater than zero'
        })
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const ErrorHandler = prop => {
      setError(null)
  }
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={ErrorHandler}/> }
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <div className={classes.input}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={enteredUsername}
              onChange={usernameInputChangeHandler}
            />
            <label htmlFor="age">Age(Years)</label>
            <input
              id="age"
              type="number"
              value={enteredAge}
              onChange={ageInputChangeHandler}
            />
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
