// src/App.tsx

import React from 'react';
import Sidebar from './assets/sidebar';

const App: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
      </div>
    </div>
  );
};

export default App;
