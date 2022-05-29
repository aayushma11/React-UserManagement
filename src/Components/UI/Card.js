import React from "react";

import classes from "./Card.module.css";
// import UserForm from "../Users/UserForm";
// import UserList from "../Users/UserList";

const Card = (props) => {
  // const [userLists, setUserLists] = useState('');
  // const saveUserInfoHandler = (enteredUserInfo) => {
  //   const UserInfo = {
  //     ...enteredUserInfo,
  //     id: Math.random().toString(),
  //   };
  //   onAddUserList(UserInfo)
  // };
  // const onAddUserList = (newUsers) => {
  //   setUserLists((prevState) => {
  //     return [newUsers, ...prevState];
  //   });
  // }
  // return (
  //   <div className={styles.card}>
  //     <UserForm onSave={saveUserInfoHandler}></UserForm>
  //     <UserList userLists ={userLists}></UserList>
  //   </div>
  // );
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
