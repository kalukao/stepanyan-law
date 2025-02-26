import React from 'react';
import { Link } from 'wouter';
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Stepanyan Law</Link>
        <div className="space-x-4">
          <Link href="/about"><Button variant="ghost">About</Button></Link>
          <Link href="/practice-areas"><Button variant="ghost">Practice Areas</Button></Link>
          <Link href="/contact"><Button variant="ghost">Contact</Button></Link>
        </div>
      </div>
    </nav>
  );
}
