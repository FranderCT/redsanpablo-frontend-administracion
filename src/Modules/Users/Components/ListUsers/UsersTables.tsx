import type { Users } from "../../Models/Users"

type Props = {
  user? : Users
}

const UsersTables = ({user}: Props) => {
  return (
    <div
    key={user?.Id}
    >
      Nombre {user?.Name}
      email {user?.Email}
    </div>
  )
}

export default UsersTables