import { Pencil } from "lucide-react";
import UserPhotoProfile from "../Components/UserProfile/UserPhotoProfile";
import UserProfileDetails from "../Components/UserProfile/UserProfileDetails";

const UserProfile = () => {
  return (
    <div className="h-full w-full bg-[#F9F7FF] px-4 sm:px-6 py-6 sm:py-10 flex flex-col">
        
        <section className="w-full flex flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 border-b border-dashed border-gray-300 pb-3">
          <div className="flex flex-col">
            <h1 className="font-bold text-[#091540] leading-tight text-[clamp(1.25rem,2.5vw,1.875rem)]">
              Perfil
            </h1>
            <p className="text-[#091540]/80 leading-snug text-[clamp(0.875rem,1.5vw,1.125rem)]">
              Observe todos los detalles de su perfil aquí.
            </p>
          </div>

          
          <button
            className="flex flex-col items-center justify-center 
                       w-16 h-16 border border-red-500 text-red-600 rounded-md 
                       hover:bg-red-50 active:bg-red-100
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2
                       transition"
            aria-label="Editar perfil"
          >
            <Pencil size={20} />
            <span className="text-xs font-medium">Editar Perfil</span>
          </button>
        </section>

        
        <section className="h-[80%] flex flex-col items-center justify-around gap-4 sm:flex-row">
            <UserPhotoProfile />
            <UserProfileDetails />
        </section>
    </div>
  );
};

export default UserProfile;
