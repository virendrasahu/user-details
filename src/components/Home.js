import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import './home.css'
import {ColorRing} from 'react-loader-spinner'

function Home() {
  const { users, loading, error, darkMode, toggleDarkMode } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === 'asc') return a.name.localeCompare(b.name);
      if (sortOrder === 'desc') return b.name.localeCompare(a.name);
      return 0;
    });

  if (loading) return (
    <div className='loader'>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  )
 ;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <header>
          <h1>User Directory</h1>
          <button onClick={toggleDarkMode}>
            {darkMode ? 
            <img alt='light-image' className='image' src= 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png' /> : <img className='image' src= 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png' alt='dark-image'/>}
          </button>
      </header>
      <div className='nav-container'>
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className='filter-button'>
          <button onClick={() => setSortOrder('asc')}>Sort A-Z</button>
          <button onClick={() => setSortOrder('desc')}>Sort Z-A</button>
        </div>
      </div>
      
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <Link className='user-name' to={`/user/${user.id}`}>{user.name}</Link>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;