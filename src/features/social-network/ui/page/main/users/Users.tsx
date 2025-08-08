import { useAppSelector } from "@/common/hooks/useAppSelector.ts"
import { selectUsers } from "@/features/social-network/model/users-slice.ts"
import { User } from "@/features/social-network/ui/page/main/users/user/User.tsx"
import s from "./Users.module.scss"

export const Users = () => {
  const users = useAppSelector(selectUsers)
  console.log(users)

  return (
    <div className={s.Users}>
      {users.map((u) => (
        <User key={u.id} user={u} />
      ))}
    </div>
  )
}
