import React from 'react';
import img from '../assets/Frame.png';


function UsersList(props) {
  return (
    <div className='users_list'>
      <h2>USERS LIST</h2>
        {props.users.length!==0?
        props.users.map(user=>(
            <div className={`users_list_items ${props.active===user.id?'active':''}`} key={user.id} onClick={()=>props.setActive(user.id)}>
                <img src={img} alt="profile"/>
                <h3>{`${user.profile.firstName} ${user.profile.lastName}`}</h3>
            </div>
        ))
        :
        <h2>No Users to Show</h2>
        }
    </div>
  )
}

export default UsersList;