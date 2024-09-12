import { PatientForm } from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import { PasskeyModal } from "@/components/ui/PassKeyModal";

import Image from "next/image";
import Link from "next/link";

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}
      <Image
        src="/assets/images/login_pic.jpg"
        width={1000}
        height={1000}
        alt="doctor image"
        className="side-img max-w-50%"
      />
      <section className="remove-scrollbar container my-auto">
        <div className="sub_container max-w-[496px]">
          <h1 className="header mb-4">Scheduler</h1>
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Scheduler
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      {/* Second half:picture */}
    </div>
  );
}
