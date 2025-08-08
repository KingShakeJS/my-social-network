import s from "./ProfileHeader.module.scss"
import { MyBtn } from "@/common/components/my-btn/MyBtn.tsx"
import { FollowUnfollowBtn } from "@/features/social-network/ui/page/main/profile/profile-header/folow-unfolow-btn/FollowUnfollowBtn.tsx"

const ava =
  "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABQwPQLL7lLv9smZINxPqc8pU2BllxQi4MyutqR8Pr798-92PxsD8fjnRCnPtqYMl-CnpzAcGm90C1S769uJCR3DPkIzV__kUC-GQ.jpg?r=234"

const обложка = "https://i.pinimg.com/736x/7e/3b/9e/7e3b9e25c48a4a4f4e99983a7e89ce52.jpg"
export const ProfileHeader = () => {
  return (
    <div className={s.ProfileHeader}>
      <img src={обложка} alt='обложка' className={s.oblozhka} />
      <img src={ava} alt='ava' className={s.ava} />
      <div className={s.info}>
        <div>
          <div>имя</div>
          <div>статус</div>
        </div>
        <div className={s.btnBlock}>
          <MyBtn />
          <FollowUnfollowBtn />
        </div>
      </div>
    </div>
  )
}
