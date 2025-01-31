import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'react-bootstrap';
import './index.css';
import App from './App.jsx';
import "tailwindcss";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'; 
import DashboardScreen from './screens/DashboardScreen';
import PropertyListingsScreen from './screens/PropertyListingsScreen.jsx';
import StatisticsScreen from './screens/StatisticsScreen.jsx';
import InventoryScreen from './screens/InventoryScreen.jsx';
import PortfolioScreen from './screens/PortfolioScreen.jsx';
import SettingsScreen from './screens/SettingsScreen.jsx';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

const routes = createBrowserRouter(
  createRoutesFromElements(
    //Routing for the different screens
    <Route path="/" element={<App />}>
      <Route path="/Dashboard" element={<DashboardScreen />} />
      <Route path="/PropertyListings" element={<PropertyListingsScreen />} />
      <Route path="/Statistics" element={<StatisticsScreen/>}/>
      <Route path="/Inventory" element={<InventoryScreen/>}/>
      <Route path="/Portfolio" element={<PortfolioScreen/>}/>
      <Route path="/Settings" element={<SettingsScreen/>}/>

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
