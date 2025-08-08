import s from "./Main.module.scss"
import { Profile } from "@/features/social-network/ui/page/main/profile/Profile.tsx"

export const Main = () => {
  return (
    <div className={s.Main}>
      {/*<Users />*/}
      <Profile />
    </div>
  )
}
