"use client"
import { useRouter } from "next/navigation";

interface SidebarItemProps {
    label: string
    href: string
}

const SidebarItem = ({label,href}:SidebarItemProps) => {
    const router = useRouter();
    const onClick=()=> {router.push(href)};
  return (
        <button
            onClick={onClick}
            type="button"
            className="flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20"
        >
            <div className='flex items-center gap-x-2 py-4'>
               {label}
            </div>
        </button>
  )
}
export default  SidebarItem;
