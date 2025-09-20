"use client"

import SidebarItem from "./sidebar-item";

const routes = [
    {
        label: "Accueil",
        href: "/",
    },
        {
        label: "Soins",
        href: "/soins",
    },
        {
        label: "Equipe",
        href: "/equipe",
    },
    {
        label: "Cabinet",
        href: "/cabinet",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];


const SidebarRoutes = () => {
    
  return (
    <div className="flex w-full">
        { routes.map((route)=>(
            <SidebarItem 
                key= {route.href}
                href={route.href}
                label= {route.label}
            />
        ))}
    </div>
  )
}

export default SidebarRoutes

