import React,{useState, useEffect} from 'react';
import './App.css';
import UserForm from './container/userForm';
import UserList from './container/userList';

function App() {

  let [openForm, setOpenForm] = useState(false);
  let [usersArray, setUsersArray] = useState([]);
  let [editMode, setEditMode] = useState(false);
  let [getUserForEdit, setUserForEdit] = useState(null);
  let [userId, setUserId] = useState(null);

  useEffect(()=>{
    listUser();
  },[])

  function showForm(){
    setOpenForm(true);
  }

  function createUser(user){
    if(!editMode){
    const existingData = localStorage.getItem("users");
    let dataArray = [];
    if(existingData){
      dataArray = JSON.parse(existingData);
    }
    const newUser = user;
    dataArray.push(newUser);
    localStorage.setItem("users",JSON.stringify(dataArray));
    listUser();
   }
   else{
    var getDataForId = [];
    getDataForId = JSON.parse(localStorage.getItem("users"));
    console.log(getDataForId[userId]);
    // let findId = getDataForId.findIndex(userId);
    getDataForId[userId] = user;
    localStorage.setItem("users",JSON.stringify(getDataForId));
    listUser();
   }
    setOpenForm(false);
  }

  function listUser(){
    var getUser = localStorage.getItem("users");
    var retriveUser = JSON.parse(getUser);
    let fetchedUsers = [];
    for(let key in retriveUser){
      fetchedUsers.push({...retriveUser[key], id : key});
    }
    setUsersArray(fetchedUsers);
    
  }

  function closeForm(value){
    setOpenForm(value);
  }

  function editUser(user,id){
    setEditMode(true);
    setUserForEdit(user);
    setOpenForm(true);
    setUserId(user.id);
  }

  function deleteUser(val){
    var deleteId = [];
    deleteId = JSON.parse(localStorage.getItem("users"))
    var id = val.id;
    deleteId.splice(id, 1);
    console.log(deleteId);
    let confirm = window.confirm("Are you sure you want to delete " + val.firstname + " " + val.lastname);
    if(confirm){
      localStorage.setItem("users", JSON.stringify(deleteId));
      listUser();
    }
  }

  return (
    <div className="App">
        <button className="btn btn-primary mt-4" onClick={showForm} style={{marginLeft : '50%'}}>Add User</button>
        <button className="btn btn-success mt-4" onClick={listUser} style={{marginLeft : 30}}>List User</button>
        {openForm && <UserForm onCreateUser={createUser} editMode={editMode} getUserForEdit={getUserForEdit} closeForm={closeForm}></UserForm>}
        <UserList users={usersArray} editUser={editUser} deleteUser={deleteUser}></UserList>
    </div>
  );
}

export default App;
