import { useState, useEffect } from 'react';
import './app.css';
import axios from 'axios';

function App() {
  const BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/';
  const [departments, setDepartments] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOptionClick = (department) => {
    setInputValue(department.displayName);
    setIsOpen(false);
  };

  const handleAddOption = () => {
    if (inputValue && !departments.some((dept) => dept.displayName === inputValue)) {
      setDepartments([...departments, { departmentId: Date.now(), displayName: inputValue }]);
      setInputValue('');
    }
  };

  const apiService = axios.create({
    baseURL: BASE_URL,
  });

  const getDepartments = async () => {
    try {
      const result = await apiService.get('/departments');
      setDepartments(result.data.departments);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getDepartments();
  }, []);

  return (
    <div className='main-container'>
      <h1>The Metropolitan Museum of Art</h1>

      <div className='search-bar'>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onClick={() => setIsOpen(true)}
          placeholder="Select or type..."
        />

        {isOpen && (
          <ul className="dropdown-list">
            {departments.map((department) => (
              <li key={department.departmentId} onClick={() => handleOptionClick(department)}>
                {department.displayName}
              </li>
            ))}
            {inputValue &&
              !departments.some((dept) => dept.displayName === inputValue) && (
                <li onClick={handleAddOption}>Add "{inputValue}"</li>
              )}
          </ul>
        )}
      </div>

      {departments.length > 0 ? (
        <ul>
          {departments.map((department) => (
            <li key={department.departmentId}>{department.displayName}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}

      <input type="text" placeholder="Search..." />
    </div>
  );
}

export default App;
