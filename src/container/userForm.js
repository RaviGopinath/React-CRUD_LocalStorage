import React,{useState} from 'react';

function UserForm(props){

    let [fname, setFname] = useState("");
    let [lname, setLname] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [dob, setDOB] = useState("");
    let [role, setRole] = useState("");

    function firstName(event){
        setFname(event.target.value);
    }

    function lastName(event){
        setLname(event.target.value);
    }

    function mail(event){
        setEmail(event.target.value);
    }

    function mobile(event){
        setPhone(event.target.value);
    }

    function date(event){
        setDOB(event.target.value);
    }

    function roles(event){
        setRole(event.target.value);
    }

    function createUser(event){
        event.preventDefault();
        let user = {
            firstname : fname,
            lastname : lname,
            email : email,
            phone : phone,
            dob : dob, 
            role : role
        }
        props.onCreateUser(user);
        // setFname("");
        // setLname("");
        // setEmail("");
        // setPhone("");
        // setDOB("");
        // setRole("");
    }

    function closeForm(){
        props.closeForm(false);
    }

    return (
        <React.Fragment>
            <div className='card mt-3' style={{maxWidth : 600,width : '100%', marginLeft : 'auto',marginRight:'auto'}}>
                <form style={{margin : 'auto'}}>
                    <div className='row'>
                        <h4 style={{textAlign : 'center'}}>{props.editMode ? "Edit User" : "Add User"}</h4>
                        <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                            <input type='text' className='form-control mt-2' placeholder='First Name' onChange={firstName} defaultValue={props.editMode ? props.getUserForEdit.firstname : ''}></input>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                            <input type='text' className='form-control mt-2' placeholder='Last Name' onChange={lastName} defaultValue={props.editMode ? props.getUserForEdit.lastname : ''}></input>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                            <input type='text' className='form-control mt-2' placeholder='Email' onChange={mail} defaultValue={props.editMode ? props.getUserForEdit.email : ''}></input>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                            <input type='text' className='form-control mt-2' placeholder='Phone Number' onChange={mobile} defaultValue={props.editMode ? props.getUserForEdit.phone : ''}></input>
                        </div>
                        <div className='col-sm-12 col-md-6'>
                            <input type='date' className='form-control mt-2' placeholder='Date of Birth' onChange={date} defaultValue={props.editMode ? props.getUserForEdit.dob : ''}></input> 
                        </div>
                        <div className='col-sm-12 col-md-6'>
                            <input type='text' className="form-control mt-2" placeholder="Role" onChange={roles} defaultValue={props.editMode ? props.getUserForEdit.role : ''}></input>
                        </div>
                    </div>
                    <button className='btn btn-primary mt-2 mb-2' onClick={createUser}>{props.editMode ? "Update" : "Submit"}</button>
                    <button className="btn btn-secondary" onClick={closeForm} style={{marginLeft :15}}>Close</button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default UserForm;