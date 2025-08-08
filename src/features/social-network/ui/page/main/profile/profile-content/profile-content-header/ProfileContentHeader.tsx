import s from "./ProfileContentHeader.module.scss"
import { ProfileContentHeaderItem } from "@/features/social-network/ui/page/main/profile/profile-content/profile-content-header/profile-content-header-item/ProfileContentHeaderItem.tsx"
export const ProfileContentHeader = () => {
  return (
    <div className={s.ProfileContentHeader}>
      <ProfileContentHeaderItem />
      <ProfileContentHeaderItem />
      <ProfileContentHeaderItem />
      <ProfileContentHeaderItem />
    </div>
  )
}
