import React, { useState } from "react"
import TableList from "../../components/tableList/TableList";
import classes from "./tablePage.module.css"


const TablePage = () => {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(data => setUsers(data))
  }
  return (
    <div className={classes.table}>
      <div className={classes.table_inner}>
        <h1>TablePage</h1>
        <button onClick={getUsers}>get peoples</button>
        <TableList users={users}/>
      </div>
    </div>
  )
}

export default TablePage;