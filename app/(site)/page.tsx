"use client";
import AuthForm from './components/AuthForm';
import Image from 'next/image';
import Navbar from "@/components/base/Navbar";
import HeroSection from "@/components/base/HeroSection";
import FeatureSection from "@/components/base/FeatureSection";
import UserReviews from "@/components/base/UserReviews";
import Footer from "@/components/base/Footer";
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Home() {
  const router = useRouter();

  const {status, data} = useSession();

  if (status == "loading") {
    return (<div className="flex justify-center items-center h-screen w-screen">
        loading....
    </div>
  )
  }

  if (status == "authenticated") {
      router.push("/users");
  }

  return (
    <main className="flex flex-col lg:flex-row h-screen overflow-y-auto">
      <div className="lg:w-1/2 bg-gray-100 p-10 sticky top-0 left-0 h-screen hidden sm:flex sm:z-10">
        <div className="sm:mx-auto flex flex-col justify-center h-full sm:w-full sm:max-w-md">
          <Image
            alt="logo"
            className="mx-auto w-auto"
            height={64}
            width={64}
            src="/images/logo.png"
          />
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900 tracking-tight">
            Join Talky Sphere Today!
          </h2>
          <AuthForm />
        </div>
      </div>

      {/* Right Column (Content Sections) */}
      <div className="flex flex-col h-auto">
        <Navbar user={null} />
        <HeroSection />
        <FeatureSection />
        <UserReviews />

        {/* Form Section for Small Screens (Visible on screens below sm breakpoint) */}
        <div className="lg:w-1/2 bg-gray-100 p-10 flex sm:hidden top-0 left-0 h-screen z-10">
          <div className="mx-auto flex flex-col justify-center h-full w-full max-w-md">
            <Image
              alt="logo"
              className="mx-auto w-auto"
              height={64}
              width={64}
              src="/images/logo.png"
            />
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900 tracking-tight">
              Join Talky Sphere Today!
            </h2>
            <AuthForm />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
