import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ControlPanel from './views/ControlPanel';
import Home from './views/Home';
import PricingPage from './views/pricing/PricingPage';
import Redirect from './views/Redirect';
import RedicrectYT from './views/RedirectYT';
import Success from './views/pricing/Success';

import ProtectedRoutes from './util/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="/yt-redirect" element={<RedicrectYT />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/success" element={<Success />} />
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
