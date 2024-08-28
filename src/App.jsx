import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setData(res.data); 
      })
      .catch((err) => {
        setError('Failed to fetch users.'+err); 
      });
  }, []);

  let content;

  if (error) {
  
    content = <p style={{ color: 'red' }}>{error}</p>;
  } else {
   
    content = (
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className="App">
      <h1>User List</h1>
      {content}
    </div>
  );
}

export default App;
