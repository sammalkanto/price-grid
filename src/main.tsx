import React from 'react'
import ReactDOM from 'react-dom/client'
import PriceGrid from "./components/PriceGrid.tsx";
import './styles/style.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PriceGrid />
  </React.StrictMode>,
);
