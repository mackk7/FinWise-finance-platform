import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";

const Header = () => {
  return (
    <div className="fixed top-0 w-screen overflow-x-hidden z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      {/* Increased height to h-24 (96px) to fit the larger logo */}
      <nav className="w-full px-4 md:px-10 h-24 flex items-center justify-between">
        
        {/* Left Side: Logo */}
        <Link href="/">
          <Image
            src="/finwise-logoo.png"
            alt="finwise logo"
            height={120}
            width={300}
            // h-16 makes the logo taller (64px)
            // mix-blend-multiply hides the white background box
            className="w-40 md:w-auto h-20 object-contain cursor-pointer mix-blend-multiply"
          />
        </Link>

        {/* Right Side: Buttons */}
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href={"/dashboard"} className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
              <Button variant="outline" className="cursor-pointer">
                <LayoutDashboard size={18}/>
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <Link href={"/transaction/create"} >
              <Button className="flex items-center gap-2 cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md transition-all border-none">
                <PenBox size={18}/>
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant = "outline" className="cursor-pointer" >Login</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button variant className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md transition-all cursor-pointer border-none">Sign Up</Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
              <UserButton appearance={{
                  elements: {
                    avatarBox: "w-16 h-16",
                  },
                }}
              />
          </SignedIn>
        </div>

      </nav>
    </div>
  );
};
export default Header;