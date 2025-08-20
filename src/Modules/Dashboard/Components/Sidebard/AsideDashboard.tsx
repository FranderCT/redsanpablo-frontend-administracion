import {  
  LogOut,
  Users2,
} from "lucide-react";
import { useLogout } from "../../../Auth/Hooks/AuthHooks";


const AsideDashboard = () => {

  const logout = useLogout();

  return (
    <div className="flex flex-col h-full justify-between p-4">
      
      {/* Branding o logo */}
      <div>
        <h1 className="text-2xl font-bold mb-10">RedSanpablo</h1>

        {/* Navegación */}
        <nav className="flex flex-col gap-4 text-sm text-gray-700">
          <a href="#" className="flex items-center gap-3 hover:text-black">
            <Users2 size={18} /> Usuarios
          </a>
        </nav>
      </div>

      {/* Opción de cerrar sesión abajo */}
      <div>
        <button
          onClick={logout}
          className="flex items-center gap-3 text-sm text-red-600 hover:text-red-800"
        >
          <LogOut size={18} /> Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default AsideDashboard;
