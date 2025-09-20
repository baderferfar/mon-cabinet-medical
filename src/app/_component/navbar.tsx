
import { ModeToggle } from "@/components/mode-toggle"
import MobileSidebar from "./mobile-sidebar"
import Sidebar from "./sidebar"

export const Navbar = () => {
  return (
  <div className="flex justify-between items-center">
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
        <MobileSidebar />
    </div>
    <div className="hidden md:flex flex-row h-full ">
        <Sidebar />
    </div>
    <div>
        <ModeToggle />
    </div>
  </div>
  )
}

