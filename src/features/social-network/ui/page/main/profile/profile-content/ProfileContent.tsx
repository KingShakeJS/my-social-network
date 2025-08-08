import { ProfileContentHeader } from "./profile-content-header/ProfileContentHeader"
import s from "./ProfileContent.module.scss"

export const ProfileContent = () => {
  return (
    <div className={s.ProfileContent}>
      <ProfileContentHeader />
      {/*<ProfileContentMusic />*/}
    </div>
  )
}
