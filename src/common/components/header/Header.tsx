import s from "./Header.module.scss"
import { Logo } from "@/common/components/logo/Logo.tsx"

export const Header = () => {
  return (
    <header className={s.header}>
      <Logo width={150} />
      <div className={s.content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, recusandae!</div>
    </header>
  )
}
