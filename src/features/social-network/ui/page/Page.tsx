import { Header } from "@/common/components/header/Header.tsx"
import { SideBar } from "@/features/social-network/ui/page/side-bar/SideBar.tsx"

export const Page = () => {
  return (
    <>
      <Header />
      <main>
        <SideBar />
      </main>
    </>
  )
}
