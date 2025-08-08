import type { UserType } from "@/features/social-network/model/users-slice.ts"
import s from "./User.module.scss"

type UserProps = {
  user: UserType
}
export const User = ({ user }: UserProps) => {
  return (
    <div className={s.User}>
      <div>{user.name}</div>
      <div>{user.age}</div>
      <div>{user.isMarried ? "женат" : "не женат"}</div>
    </div>
  )
}
