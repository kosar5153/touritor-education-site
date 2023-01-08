
import './App.css';
import { ToastContainer } from 'react-toastify';
import MainRoutes from './MainRoutes/MainRoutes';
import { useEffect } from 'react';

function App() {


  return (
    <div className="App ">
      <MainRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
