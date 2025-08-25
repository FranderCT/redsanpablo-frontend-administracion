import FormEditProfile from "../Components/EditProfile/FormEditProfile"
import { useGetUserProfile } from "../Hooks/UsersHooks";

const EditProfile = () => {
  const {UserProfile} = useGetUserProfile();

  return (
    <div className="border h-full w-full flex items-center justify-center">
      <FormEditProfile User={UserProfile}/>
    </div>
  )
}

export default EditProfile