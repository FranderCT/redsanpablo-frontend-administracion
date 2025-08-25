import HeaderUserProfile from "../Components/UserProfile/HeaderUserProfile";
import UserPhotoProfile from "../Components/UserProfile/UserPhotoProfile";
import UserProfileDetails from "../Components/UserProfile/UserProfileDetails";
import { useGetUserProfile } from "../Hooks/UsersHooks";


const Profile = () => {
  const {UserProfile} = useGetUserProfile();
  return (
    <main className="flex flex-col justify-center min-h-full w-full h-full bg-[#f9fafb] ">
      <div className="h-full w-full border flex items-center justify-center flex-col">
        {/* Header */}
        <HeaderUserProfile/>
        <div className="border-b border-dashed border-gray-300 mb-8 mt-6"></div>
        {/* Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Foto de perfil */}
          <UserPhotoProfile User={UserProfile}/>
          {/* Información del usuario */}
          <UserProfileDetails User={UserProfile}/> 
        </section>
      </div>
    </main>
  )
}

export default Profile