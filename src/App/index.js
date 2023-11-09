import React from 'react';
import { AppUi } from './AppUi';
import { TaskProvider } from '../TaskContext';

function App() {
  return (
    <TaskProvider>
      <AppUi/>  
    </TaskProvider>
  );
}

export default App;
