
import React from 'react';


interface NavbarItemProps {
  label: string;
  href: string;
  active?: boolean;
}

const NavbarItem = ({ label, href } : NavbarItemProps) => {
  return (
    <div>
      <a href={href}>{label}</a>
    </div>
        
  
  )
}

export default NavbarItem;