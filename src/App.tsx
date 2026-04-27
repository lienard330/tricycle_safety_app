import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import LoginPage from './pages/LoginPage';
import OverviewPage from './pages/OverviewPage';
import DriversPage from './pages/DriversPage';
import TripsPage from './pages/TripsPage';
import ComplaintsPage from './pages/ComplaintsPage';
import FaresPage from './pages/FaresPage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import AnalyticsPage from './pages/AnalyticsPage';
import MapPage from './pages/MapPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AdminLayout />}>
        <Route path="/" element={<Navigate to="/overview" replace />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/drivers" element={<DriversPage />} />
        <Route path="/trips" element={<TripsPage />} />
        <Route path="/complaints" element={<ComplaintsPage />} />
        <Route path="/fares" element={<FaresPage />} />
        <Route path="/announcements" element={<AnnouncementsPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/map" element={<MapPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
