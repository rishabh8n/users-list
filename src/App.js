import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import User from './components/user';
import UsersList from './components/usersList';

function App() {
  const [users,setUsers] = useState([]);
  const [active,setActive] = useState("1");
  const [loading,setLoading] = useState(true);
  const [activeUser,setActiveUser] = useState({});

const getData = async()=>{
  try{
    const res = await axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users');
    if(res.status===200){
      setUsers(res.data);
      setLoading(false);
      setActiveUser(res.data[0]);
    }
  }catch(e){
    console.log(e.message);
  }
}

  useEffect(()=>{
  getData();
  },[])

  useEffect(()=>{
    let temp = users.filter(user=> user.id  === active);
    if(temp.length!==0){
      setActiveUser(temp[0]);
    }
  },[active])



  return (
    <div className="App">
      {loading?
      <div className="ring">Loading
      <span></span>
      </div>
      :
      <>
      <UsersList users={users} active={active} setActive={setActive}/>
      <User user={activeUser}/>
      </>
      }
    </div>
  );
}

export default App;
