import React from "react";
import {Card} from "react-bootstrap";

const TableList = ({users}) => {
  return(
    <div>
      <h1>People Table</h1>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
    {users.map((user, key) => { 
      return(
        <tr key={key}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.username}</td>
        </tr>
      )
    })}
</table>
    </div>
  )
}

export default TableList;