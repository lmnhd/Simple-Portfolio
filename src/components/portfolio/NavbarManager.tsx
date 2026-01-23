'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const NavbarManager: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 print:hidden">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl text-primary">
          Nathaniel Orange
        </Link>
        <div className="flex items-center gap-8">
          <a href="#experience" className="text-sm text-gray-700 hover:text-primary transition-colors font-medium">
            Experience
          </a>
          <a href="#education" className="text-sm text-gray-700 hover:text-primary transition-colors font-medium">
            Education
          </a>
          <a href="#skills" className="text-sm text-gray-700 hover:text-primary transition-colors font-medium">
            Skills
          </a>
          <a href="#projects" className="text-sm text-gray-700 hover:text-primary transition-colors font-medium">
            Projects
          </a>
          <a href="mailto:halimedetech@gmail.com">
            <Button variant="default" size="sm" className="bg-primary hover:bg-blue-700 text-white">
              Contact
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarManager;
