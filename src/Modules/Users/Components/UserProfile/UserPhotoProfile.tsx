import type { UserProfile } from "../../Models/User";

type Props = {
  User? : UserProfile
}

const UserPhotoProfile = ({User} : Props) => {
  return (
    <article className="h-full w-full bg-white border border-[#091540]/20 rounded-xl shadow-sm p-6 lg:p-8 flex flex-col items-center justify-center">
      <h3 className="text-center text-[#091540] font-extrabold text-lg lg:text-2xl mb-5">
        {User?.Name} {User?.Surname1} {User?.Surname2}
      </h3>

      <div className="size-40 lg:size-66 rounded-full overflow-hidden border-4 border-[#091540]/25">
        <img
          src="https://i.pravatar.cc/400?img=12"
          alt="Foto de perfil"
          className="w-full h-full object-cover"
        />
      </div>
    </article>
  );
};

export default UserPhotoProfile;
