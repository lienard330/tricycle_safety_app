import { NavLink } from 'react-router-dom';
import {
  BarChart3,
  Users,
  Map,
  AlertTriangle,
  DollarSign,
  Megaphone,
  TrendingUp,
  MapPin,
  type LucideIcon,
} from 'lucide-react';

interface NavItem {
  path: string;
  label: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { path: '/overview', label: 'Overview', icon: BarChart3 },
  { path: '/drivers', label: 'Drivers', icon: Users },
  { path: '/trips', label: 'Trips', icon: Map },
  { path: '/complaints', label: 'Complaints', icon: AlertTriangle },
  { path: '/fares', label: 'Fares', icon: DollarSign },
  { path: '/announcements', label: 'Announce', icon: Megaphone },
  { path: '/analytics', label: 'Analytics', icon: TrendingUp },
  { path: '/map', label: 'Map View', icon: MapPin },
];

const Sidebar = () => (
  <aside className="w-[200px] bg-sidebar flex flex-col h-screen border-r border-sidebar-border flex-shrink-0">
    <div className="px-4 py-5 border-b border-sidebar-border">
      <div className="text-white font-extrabold text-sm">SafeRide</div>
      <div className="text-sidebar-active text-[10px] font-mono mt-0.5 tracking-wider">
        Admin Panel
      </div>
    </div>

    <nav className="flex-1 py-2 overflow-y-auto">
      {navItems.map(({ path, label, icon: Icon }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-medium transition-colors
             ${isActive
               ? 'bg-white/10 text-sidebar-active border-r-2 border-teal'
               : 'text-sidebar-text hover:bg-white/5 hover:text-white'
             }`
          }
        >
          <Icon size={16} />
          {label}
        </NavLink>
      ))}
    </nav>

    <div className="p-4 border-t border-sidebar-border">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-sidebar-active text-xs font-bold flex-shrink-0">
          CA
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-white text-xs font-semibold truncate">CCMPTODA Admin</div>
          <div className="text-sidebar-text text-[10px] truncate">admin@ccmptoda.gov.ph</div>
        </div>
      </div>
    </div>
  </aside>
);

export default Sidebar;
