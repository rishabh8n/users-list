import React from 'react';
import img from '../assets/Frame.png';

function User(props) {
  return (
    props.user.id?
    <div className='User'>
        <h2>USER DETAILS</h2>
        <div className='user_details'>
          <img src={img} alt="profile"/>
          <p className='username'>{`@${props.user.profile.username}`}</p>
          <p className='bio'>{props.user.Bio}</p>
          <h6>Full Name</h6>
          <p className='name'>{`${props.user.profile.firstName} ${props.user.profile.lastName}`}</p>
          <h6>Job Title</h6>
          <p className='job'>{props.user.jobTitle}</p>
          <h6>Email</h6>
          <p className='email'>{props.user.profile.email}</p>
        </div>
    </div>
    :
    <div className='User'>
        <h2>USER DETAILS</h2>
        <h2>No Users to Show</h2>
    </div>
  )
}

export default User;