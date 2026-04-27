import { Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-sidebar flex items-center justify-center p-4">
      <div className="bg-sidebar-elev rounded-2xl p-8 w-full max-w-md border border-sidebar-border shadow-2xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-teal/20 border border-teal/40 rounded-xl flex items-center justify-center">
            <Shield size={20} className="text-sidebar-active" />
          </div>
          <div>
            <div className="text-white font-extrabold">SafeRide Admin</div>
            <div className="text-sidebar-active text-[11px] font-mono tracking-wider">CCMPTODA</div>
          </div>
        </div>

        <label className="text-sidebar-text text-xs font-semibold mb-1.5 block">
          Email
        </label>
        <input
          type="email"
          defaultValue="admin@ccmptoda.gov.ph"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white font-mono mb-3 focus:outline-none focus:border-teal/60"
        />

        <label className="text-sidebar-text text-xs font-semibold mb-1.5 block">
          Password
        </label>
        <input
          type="password"
          defaultValue="password"
          className="w-full bg-white/5 border border-teal/40 rounded-lg px-4 py-3 text-sm text-white mb-5 focus:outline-none focus:border-teal"
        />

        <button
          onClick={() => navigate('/overview')}
          className="w-full bg-teal hover:bg-teal-dark text-white font-bold rounded-lg py-3 text-sm transition-colors"
        >
          Log In
        </button>

        <div className="text-center text-sidebar-text text-[10px] mt-5">
          Authorized CCMPTODA personnel only
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
