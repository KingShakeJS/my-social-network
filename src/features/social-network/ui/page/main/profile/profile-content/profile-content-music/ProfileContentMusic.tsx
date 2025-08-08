import s from "./ProfileContentMusic.module.scss"
import { MusicPlayer } from "@/common/components/music-treck/MusicPlayer.tsx"

export const ProfileContentMusic = () => {
  return (
    <div className={s.ProfileContentMusic}>
      <MusicPlayer />
      <MusicPlayer />
      <MusicPlayer />
      <MusicPlayer />
      <MusicPlayer />
      <MusicPlayer />
    </div>
  )
}
