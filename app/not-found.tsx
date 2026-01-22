'use client';

import Link from "next/link";

import Image from "next/image";
import { SiHomebrew } from "react-icons/si";

const NotFound = () => {
  return (
    <section className="font-geist mx-auto px-4 max-w-3xl relative overflow-hidden flex justify-center pt-20">
      <div className="relative z-10 min-h-screen w-full mt-1 py-6">
        <div className="my-4 text-start">
          <h2 className="text-3xl ">Oops! Page not found !</h2>
        </div>

      
       
        {/* 404 Image */}
        <div className="flex justify-center mb-4">
          <Image
            src="/404.png"
            alt="404 Not Found"
            width={420}
            height={420}
            className="w-[260px] sm:w-[340px] md:w-[420px] h-auto"
            priority
          />
        </div>

        {/* Button */}
        <div className="flex justify-center py-8">
          <Link href="/" className="inline-flex flex-col items-center text-start">
            <span className="text-sm text-base-content/70">
              The page you’re looking for doesn’t exist or has been moved.
              Let’s get you back to something useful. <span className="mt-3 inline-flex items-center gap-2 hover:text-primary font-medium text-sm ">
              Go Home <SiHomebrew size={16} />
            </span>
            </span>

            
          </Link>
        </div>

        <p className="text-start text-sm text-base-content/50 mt-4">
          You can explore my projects, skills, or contact section from the homepage.
        </p>
      </div>
    </section>
  );
};

export default NotFound;
