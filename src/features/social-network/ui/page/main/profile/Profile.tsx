import s from "./Profile.module.scss"
import { ProfileHeader } from "@/features/social-network/ui/page/main/profile/profile-header/ProfileHeader.tsx"
import { ProfileContent } from "@/features/social-network/ui/page/main/profile/profile-content/ProfileContent.tsx"

type Props = {}
export const Profile = ({}: Props) => {
  return (
    <div className={s.Profile}>
      <ProfileHeader />
      <div className={s.gridBlock}>
        <ProfileContent />
      </div>
    </div>
  )
}
