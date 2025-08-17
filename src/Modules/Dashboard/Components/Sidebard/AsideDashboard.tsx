import {  
  LogOut,
  User,
} from "lucide-react";

const AsideDashboard = () => {
  return (
    <div className="flex flex-col h-full justify-between p-4">
      
      {/* Branding o logo */}
      <div>
        <h1 className="text-2xl font-bold mb-10">RedSanpablo</h1>

        {/* Navegación */}
        <nav className="flex flex-col gap-4 text-sm text-gray-700">
          <a href="#" className="flex items-center gap-3 hover:text-black">
            <User size={18} /> Usuarios
          </a>
          
        </nav>
      </div>

      {/* Opción de cerrar sesión abajo */}
      <div>
        <a
          href="#"
          className="flex items-center gap-3 text-sm text-red-600 hover:text-red-800"
        >
          <LogOut size={18} /> Cerrar sesión
        </a>
      </div>
    </div>
  );
};

export default AsideDashboard;
