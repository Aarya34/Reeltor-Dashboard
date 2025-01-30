import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import "tailwindcss";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'; 
import DashboardScreen from './screens/DashboardScreen';
import store from './store';
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/Dashboard" element={<DashboardScreen />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
</StrictMode>,
);
