import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx';

// FIRSTLY ADDED THE DOCUMRNT MOVED TO THE TRASH WE HAVE TO DO IT FOR MAKING IT 
// import AuthContext from './context/AuthContext.jsx';
// import TaskContext from './context/TaskContext.jsx';

// localStorage.clear()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AuthContext>
      <TaskContext> */}
      <AuthProvider>
        <App />
        </AuthProvider>
      {/* </TaskContext>
    </AuthContext> */}
  </StrictMode>,
)
