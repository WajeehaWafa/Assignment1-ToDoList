const ReadOnlyRow = ({ isComplete, contact, handleEditClick , del , Complete}) => {
    return (
      <tr >
        <td  style={{ textDecoration: isComplete ? 'line-through': '' }} >{contact.name}</td>
        <td>
          <button type="button" onClick={(event) => handleEditClick(event, contact)}
          >Edit</button>
          <button type='button' onClick={()=>del(contact.id)}>Delete</button>
          <button type='button' onClick={()=>Complete(contact.id)}>Complete</button>
        </td>
      </tr>
    );
  };
  export default ReadOnlyRow;