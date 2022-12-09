import React from 'react';
import SurveyRoutes from './components/SurveyRoutes';
import InventoryProvider from './context/InventoryProvider';

function App() {
  return (
    <InventoryProvider>
    <h1>a/A Forms</h1>
    <SurveyRoutes />
    </InventoryProvider>
  
  );
}

export default App;
