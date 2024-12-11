import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import './css/global.css'
import MainLayout from "./views/layout/main.layout";
=======
import { MainPage } from "./pages";
import './global.css';

>>>>>>> 74a557cd976eb0c6c672256a5c8092decb358222

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
<<<<<<< HEAD
root.render(
  <React.StrictMode>
      <MainLayout />
  </React.StrictMode>
=======
root.render(<MainPage></MainPage>
  // <React.StrictMode>
  //     <MainPage></MainPage>
  // </React.StrictMode>
>>>>>>> 74a557cd976eb0c6c672256a5c8092decb358222
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
