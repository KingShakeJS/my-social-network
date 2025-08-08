import { Header } from "@/common/components/header/Header.tsx"
import { SideBar } from "@/features/social-network/ui/page/side-bar/SideBar.tsx"
import { Footer } from "@/common/components/footer/Footer.tsx"
import { Main } from "@/features/social-network/ui/page/main/Main.tsx"
import s from "./Page.module.scss"

export const Page = () => {
  return (
    <>
      <Header />

      <div className={s.Page}>
        <SideBar />
        <Main />
      </div>
      <Footer />
    </>
  )
}
