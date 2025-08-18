import { Pencil } from "lucide-react";
import UserPhotoProfile from "../Components/UserProfile/UserPhotoProfile";
import UserProfileDetails from "../Components/UserProfile/UserProfileDetails";

const UserProfile = () => {
  return (
    <div className="min-h-full w-full ">
      <div
        className="
          mx-auto w-full
          max-w-full
          sm:max-w-[95%]
          md:max-w-[92%]           /* iPad/tablet más ancho */
          lg:max-w-6xl
          xl:max-w-7xl
          2xl:max-w-[1400px]
          px-4 sm:px-6 lg:px-10 xl:px-12
          py-8 lg:py-12
        "
      >
        {/* Header */}
        <section
          className="w-full flex items-center justify-between gap-6
                     border-b border-dashed border-[#091540]/30 pb-4"
        >
          <div className="min-w-0">
            <h1
              className="text-[#091540] font-extrabold leading-tight tracking-tight
                         text-[clamp(1.6rem,2.6vw,2.75rem)]"
            >
              Perfil
            </h1>
            <p className="text-[#091540]/80 text-[clamp(1rem,1.4vw,1.25rem)] lg:text-lg">
              Observe todos los detalles de su perfil aquí
            </p>
          </div>

          {/* Botón cuadrado */}
          <button
            className="shrink-0 flex flex-col items-center justify-center
                       w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16
                       border-2 border-red-500 text-red-600 rounded-md
                       hover:bg-red-50 active:bg-red-100 transition
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2"
            aria-label="Editar perfil"
          >
            <Pencil size={22} />
            <span className="sm:block text-xs sm:text-sm font-medium">Editar</span>
          </button>
        </section>

        {/* Body */}
        <section
          className="
            grid grid-cols-1
            md:grid-cols-2
            gap-6 md:gap-8 lg:gap-10 xl:gap-12
            mt-8
          "
        >
          {/* Card izquierda */}
          <div className="w-full min-h-[260px]">
            <UserPhotoProfile />
          </div>

          {/* Card derecha */}
          <div className="w-full min-h-[260px]">
            <UserProfileDetails />
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
