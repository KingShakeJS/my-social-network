import logo from "@/assets/logo.png"
import s from "./Logo.module.scss"

type LogoPT = {
  width: number
}

export const Logo = ({ width }: LogoPT) => {
  return <img className={s.Logo} src={logo} alt='logo' style={{ width: width }} />
}
