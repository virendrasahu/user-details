import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import './userDetails.css'

function UserDetail() {
  const { users } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((user) => user.id === parseInt(id));

  if (!user) return (
    <div className='user-not-found-container'>
        <img className='user-not-found' src='https://assets.ccbp.in/frontend/react-js/not-found-img.png' alt='user not found'/>
        <p className='user-not-found-para'>User not found.</p>
    </div>
  );

  return (
    <div className='user-details-container'>
      <h2 className='user-name'>{user.name}</h2>
      <p className='user-text'>Email: {user.email}</p>
      <p className='user-text'>Phone: {user.phone}</p>
      <p className='user-text'>Company: {user.company.name}</p>
      <p className='user-text'>Website: {user.website}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default UserDetail;