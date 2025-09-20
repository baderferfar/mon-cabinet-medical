"use client"

import {usePathname, useSearchParams} from "next/navigation"
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";


const NavbarRoutes = () => {
  const pathname = usePathname();
  const params = useSearchParams();
  console.log("pathname:",pathname);
  console.log("params:",params);
  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter");

  return (
    <div className="flex gap-x-2 ml-auto">
    {
      (isTeacherPage || isPlayerPage) ? 
      (<Link href='/'>
        <Button size="sm" variant={"ghost"}>
        <LogOut className="h-4 w-4 mr-2"/>
          Exit
        </Button>
      </Link>)
    :
      (<Link href='/teacher/courses'>
        <Button size="sm" variant={"ghost"}>
          Teacher Mode
        </Button>
      </Link>)
    }

    </div>
    
  )
}

export default NavbarRoutes