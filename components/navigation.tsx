"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, LogOut } from "lucide-react";
import { SearchTrigger } from "@/components/search/search-trigger";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import Image from "next/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<null | any>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const AuthButtons = () => {
    if (user) {
      return (
        <Button
          variant='ghost'
          size='sm'
          onClick={handleSignOut}
          className='text-gray-600 hover:text-purple-600'
        >
          <LogOut className='h-4 w-4 mr-2' />
          Sign Out
        </Button>
      );
    }

    return (
      <>
        <Link href='/auth/sign-in'>
          <Button variant='ghost' size='sm'>
            Sign In
          </Button>
        </Link>
        <Link href='/auth/sign-up'>
          <Button size='sm' className='bg-purple-600 hover:bg-purple-700'>
            Start for Free
          </Button>
        </Link>
      </>
    );
  };

  return (
    <nav className='fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center'>
            <Link href='/' className='flex items-center space-x-2'>
              <Image
                src='/logo.webp'
                alt='BuildAIWeb Logo'
                className='h-10 w-auto max-w-[180px]'
                width={32}
                height={32}
              />
            </Link>
          </div>

          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              <Link
                href='/features'
                className='text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium'
              >
                Features
              </Link>
              <Link
                href='/about'
                className='text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium'
              >
                About
              </Link>

              <Link
                href='/pricing'
                className='text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium'
              >
                Pricing
              </Link>
              <Link
                href='/blog'
                className='text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium'
              >
                Blog
              </Link>
              <Link
                href='/contact'
                className='text-gray-600 hover:text-purple-600 px-3 py-2 text-sm font-medium'
              >
                Contact
              </Link>
            </div>
          </div>

          <div className='hidden md:block'>
            <div className='ml-4 flex items-center md:ml-6 space-x-3'>
              <SearchTrigger variant='compact' />
              <AuthButtons />
            </div>
          </div>

          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-600 hover:text-purple-600'
            >
              {isOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b'>
            <Link
              href='/features'
              className='block px-3 py-2 text-base font-medium text-gray-600 hover:text-purple-600'
            >
              Features
            </Link>
            <Link
              href='/about'
              className='block px-3 py-2 text-base font-medium text-gray-600 hover:text-purple-600'
            >
              About
            </Link>

            <Link
              href='/pricing'
              className='block px-3 py-2 text-base font-medium text-gray-600 hover:text-purple-600'
            >
              Pricing
            </Link>
            <Link
              href='/blog'
              className='block px-3 py-2 text-base font-medium text-gray-600 hover:text-purple-600'
            >
              Blog
            </Link>
            <Link
              href='/contact'
              className='block px-3 py-2 text-base font-medium text-gray-600 hover:text-purple-600'
            >
              Contact
            </Link>
            <SearchTrigger variant='default' className='mx-3 mb-2' />
            <div className='px-3 py-2 space-y-2'>
              {user ? (
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={handleSignOut}
                  className='w-full text-gray-600 hover:text-purple-600'
                >
                  <LogOut className='h-4 w-4 mr-2' />
                  Sign Out
                </Button>
              ) : (
                <>
                  <Link href='/auth/sign-in'>
                    <Button variant='ghost' size='sm' className='w-full'>
                      Sign In
                    </Button>
                  </Link>
                  <Link href='/auth/sign-up'>
                    <Button
                      size='sm'
                      className='w-full bg-purple-600 hover:bg-purple-700'
                    >
                      Start for Free
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
