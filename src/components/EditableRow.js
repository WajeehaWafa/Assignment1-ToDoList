function EditableRow({editformdata ,handleEditformchange })
{
    return(
        <tr>
       <td> 
           <input type='text' name ='name' value={editformdata.name} onChange={handleEditformchange}/>
        </td>
        <td>
            <button type='submit' >Save</button>
        </td>
        </tr>
    );
}
export default EditableRow;