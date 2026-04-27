import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const AdminLayout = () => (
  <div className="flex h-screen overflow-hidden">
    <Sidebar />
    <main className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto p-8">
        <Outlet />
      </div>
    </main>
  </div>
);

export default AdminLayout;
