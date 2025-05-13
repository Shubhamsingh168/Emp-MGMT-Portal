import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard';
import AdminDashBoard from './components/DashBoard/AdminDashBoard';
import { Authcontext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [LoggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(Authcontext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);

        // ✅ Store employee data and name
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      } else {
        alert('Improper Credentials');
      }
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === 'admin' && <AdminDashBoard changeUser={setUser} />}
      {user === 'employee' && (
        <EmployeeDashboard data={LoggedInUserData} changeUser={setUser} />
      )}
    </>
  );
};

export default App;
