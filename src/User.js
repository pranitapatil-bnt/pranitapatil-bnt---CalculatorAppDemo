import React, { useState } from 'react';

const UserDetails = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      // Perform authentication logic (replace with your own authentication logic)
      // For demonstration, we'll use the JSONPlaceholder fake API
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
      const users = await response.json();

      if (users.length === 1) {
        const user = users[0];
        setUserData(user);
        setError(null);
      } else {
        setError('User not found');
        setUserData(null);
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
      setError('Error fetching user details');
      setUserData(null);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
      </div>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {userData && (
        <div>
          <h3>User Details:</h3>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Add more user details as needed */}
        </div>
      )}
    </div>
  );
};

export default UserDetails;
