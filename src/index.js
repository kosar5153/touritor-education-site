import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './Assets/styles/ReactToastfuyStyle.css'

import { BrowserRouter } from "react-router-dom";


// eslint-disable-next-line
import "swiper/css/bundle";

import "react-confirm-alert/src/react-confirm-alert.css";
import { AdminContextProvider, MainDataContext, ShoppingCardState, UserProvider } from './context';
import ThemeProvider from './context/dark-mode/ThemeProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <MainDataContext>
          <ShoppingCardState>
            <AdminContextProvider>
              <UserProvider>
                <App />
              </UserProvider>
            </AdminContextProvider>
          </ShoppingCardState>
        </MainDataContext>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

