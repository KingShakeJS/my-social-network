import { ProfileContentHeader } from "./profile-content-header/ProfileContentHeader"
import s from "./ProfileContent.module.scss"
import { ProfileContentMusic } from "@/features/social-network/ui/page/main/profile/profile-content/profile-content-music/ProfileContentMusic.tsx"

export const ProfileContent = () => {
  return (
    <div className={s.ProfileContent}>
      <ProfileContentHeader />
      <ProfileContentMusic />
    </div>
  )
}
