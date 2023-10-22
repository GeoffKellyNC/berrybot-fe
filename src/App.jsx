import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Admin from './views/Admin';
import ControlPanel from './views/ControlPanel';
import FeatureRequest from './views/FeatureRequest';
import Home from './views/Home';
import PricingPage from './views/pricing/PricingPage';
import Redirect from './views/Redirect';
import RedicrectYT from './views/RedirectYT';
import Success from './views/pricing/Success';
import ChatLogs from './views/ChatLogs'

// Youtube Imports
import ProtectedYTRoute from './util/ProtectedYTRoute';
import ControlPanelYT from './views/youtube/ControlPanelYT';

import AdminRoute from './util/AdminRoute';
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
        <Route path="/feature-request" element = {
          <ProtectedRoutes>
            <FeatureRequest />
          </ProtectedRoutes>
        } />
        <Route path='/chat-logs' element = {
          <ProtectedRoutes>
            <ChatLogs />
          </ProtectedRoutes>
        } />
        <Route path="/admin" element={
          <AdminRoute>
            <Admin />
          </AdminRoute>
        } />
        <Route path = '/control-panel-yt' element = {
          <ProtectedYTRoute>
            <ControlPanelYT />
          </ProtectedYTRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;
