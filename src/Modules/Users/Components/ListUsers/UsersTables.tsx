import type { UserProfile } from "../../Models/User"

type Props = {
  user? : UserProfile
}

const UsersTables = ({user}: Props) => {
  return (
    <div>
      {user?.Name}
    </div>
  )
}

export default UsersTables