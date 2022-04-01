import React from "react";

const TodoList = ({ todos, handleDelete, handleEdit, handleComplete }) => {
  return (
    <table border="1" className="tab" >
    <tr>
            <th>List</th>
            <th>Action</th>
        </tr>
    <ul >
      <tr>{todos.map((t) => (
        <li >
        <tr>
          <td><span className="todoText" key={t.id}>
            {t.todo}
          </span> </td>
          <td><button onClick={() => handleEdit(t.id)}>Editd</button>
          <button onClick={() => handleDelete(t.id)}>Delete</button>
          <button onClick={() => handleComplete(t.id)}>Complete</button></td>
          </tr>
        </li>
      ))}
      </tr>
    </ul>
    </table>
  );
};

export default TodoList;
