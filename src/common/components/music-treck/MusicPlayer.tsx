import s from "./MusicPlayer.module.scss"
import sg from "@/assets/music/sg.mp3"
import sglogo from "@/assets/img/sglogo.png"
import { useRef, useState } from "react"

export const MusicPlayer = () => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(1)
  const [duration, setDuration] = useState(0)
  const [togleVolume, setTogleVolume] = useState(false)

  // Обработка запуска/паузы
  const togglePlay = () => {
    if (isPlaying) {
      // @ts-ignore
      audioRef?.current.pause()
    } else {
      // @ts-ignore
      audioRef?.current.play()
    }
    setIsPlaying(!isPlaying)
  }
  // Обновление прогресса
  const handleTimeUpdate = () => {
    // @ts-ignore
    const currentTime = audioRef?.current.currentTime
    // @ts-ignore
    const duration = audioRef?.current.duration
    setProgress((currentTime / duration) * 100)
  }
  // Получение длительности трека
  const handleLoadedMetadata = () => {
    // @ts-ignore
    setDuration(audioRef?.current.duration)
  }
  // Установка времени при перемещении прогресс-бара
  const handleProgressChange = (e) => {
    const newProgress = e.target.value
    // @ts-ignore
    const newTime = (newProgress / 100) * audioRef.current.duration
    // @ts-ignore
    audioRef.current.currentTime = newTime
    setProgress(newProgress)
  }

  // Обработка изменения громкости
  const handleVolumeChange = (e: any) => {
    const newVolume = e.target.value
    // @ts-ignore
    audioRef.current.volume = newVolume
    setVolume(newVolume)
  }
  return (
    <div className={s.MusicPlayer}>
      <img src={sglogo} alt='logo' />

      <audio src={sg} ref={audioRef} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata}></audio>

      <div className={s.controlls}>
        <div className={s.btnTime}>
          <button className={s.startStop} onClick={togglePlay}>
            {" "}
            {isPlaying ? "||" : ">"}{" "}
          </button>
          <div className={s.time}>
            {formatTime(audioRef?.current?.currentTime)} / {formatTime(duration)}
          </div>
          <div
            onMouseOver={() => setTogleVolume(true)}
            onMouseOut={() => {
              setTimeout(() => {
                setTogleVolume(false)
              }, 1000)
            }}
          >
            <div className={s.volume}>
              {togleVolume && (
                <input
                  id='volume'
                  type='range'
                  min='0'
                  max='1'
                  step='0.01'
                  value={volume}
                  onChange={handleVolumeChange}
                  onMouseOver={() => setTogleVolume(true)}
                />
              )}
            </div>
            🔊
          </div>
        </div>

        <input
          className={s.progressLine}
          type='range'
          min='0'
          max='100'
          value={progress}
          onChange={handleProgressChange}
        />
      </div>
    </div>
  )
}

function formatTime(time: any) {
  if (!time || isNaN(time)) return "00:00"

  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)

  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
}
