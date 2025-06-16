"use client";

import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import {
  EnvelopeIcon,
  LockClosedIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import { toast } from "@/hooks/use-toast";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Registration Error",
        description: err.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleProviderSignUp = async (
    provider: GoogleAuthProvider | GithubAuthProvider
  ) => {
    setIsLoading(true);
    try {
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Registration Error",
        description: err.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50'>
      <div className='bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl w-full max-w-md'>
        <div className='mb-8 text-center'>
          <Link
            href='/'
            className='inline-flex items-center gap-2 text-2xl font-bold text-purple-600'
          >
            <Image
              src='/placeholder-logo.svg'
              alt='Logo'
              width={40}
              height={40}
            />
            BuildAIWeb
          </Link>
          <h1 className='mt-6 text-3xl font-bold text-gray-900'>
            Create an account
          </h1>
          <p className='mt-2 text-gray-600'>
            Start building amazing websites with AI
          </p>
        </div>

        <form onSubmit={handleEmailSignUp} className='space-y-4'>
          <div className='relative'>
            <EnvelopeIcon className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5' />
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/50'
              required
            />
          </div>
          <div className='relative'>
            <LockClosedIcon className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5' />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/50'
              required
            />
          </div>
          <button
            type='submit'
            disabled={isLoading}
            className='w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50'
          >
            {isLoading ? (
              <ArrowPathIcon className='animate-spin h-5 w-5 mx-auto' />
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <div className='mt-6'>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <span className='w-full border-t border-gray-200' />
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='px-2 bg-white text-gray-500'>
                Or continue with
              </span>
            </div>
          </div>

          <div className='mt-6 grid grid-cols-2 gap-4'>
            <button
              onClick={() => handleProviderSignUp(new GoogleAuthProvider())}
              disabled={isLoading}
              className='flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50'
            >
              <FcGoogle className='h-5 w-5' aria-hidden='true' />
              Google
            </button>
            <button
              onClick={() => handleProviderSignUp(new GithubAuthProvider())}
              disabled={isLoading}
              className='flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50'
            >
              <FaGithub className='h-5 w-5' aria-hidden='true' />
              GitHub
            </button>
          </div>
        </div>

        <p className='mt-8 text-center text-sm text-gray-600'>
          Already have an account?{" "}
          <Link
            href='/auth/sign-in'
            className='text-purple-600 hover:text-purple-700'
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
