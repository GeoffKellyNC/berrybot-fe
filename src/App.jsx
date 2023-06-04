import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ControlPanel from './views/ControlPanel';
import Home from './views/Home';
import Redirect from './views/Redirect';

import ProtectedRoutes from './util/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="/control-panel" element={
          <ProtectedRoutes>
            <ControlPanel />
          </ProtectedRoutes>
        } />
      </Routes>
    </div>
  );
}

export default App;
