import Link from 'next/link';
import React from 'react';

interface NavbarItemProps {
  label: string;
  href: string;
  active?: boolean;
}

const NavbarItem = ({ label, href, active } : NavbarItemProps) => {
  return (
    <div className={active ? 'text-green-700 cursor-default' : 'text-foreground cursor-pointer transition'}>
      <Link href={href}>{label}</Link>
    </div>
  )
}

export default NavbarItem;