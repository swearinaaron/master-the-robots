import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className = "text-gray-800 hover:text-purple-600" }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`${className} px-3 py-2 text-sm font-medium transition-colors`}
    >
      {children}
    </a>
  );
}