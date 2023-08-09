import React from "react";

function UserList(props){
    console.log(props.users);

    function onEditClicked(event,datas){
        props.editUser(datas);
    }

    function onDelete(event,datas){
        props.deleteUser(datas);
    }

    return(
        <React.Fragment>
            <table className="table mx-auto mt-3" style={{maxWidth:800, width : "100%", marginLeft:'auto', marginRight:'auto'}}>
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((datas)=>{
                        return <tr>
                            <td>{datas.firstname + " " + datas.lastname}</td>
                            <td>{datas.email}</td>
                            <td>{datas.phone}</td>
                            <td>{datas.dob}</td>
                            <td>{datas.role}</td>
                            <td>
                                <button className="btn btn-warning" onClick={(event)=>{onEditClicked(event,datas)}}>Edit</button>
                                <button className="btn btn-danger" style={{marginLeft: 10}} onClick={(event) => {onDelete(event,datas)}}>Delete</button>
                            </td>
                        </tr>
                    })
                    }
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default UserList