import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100 p-8 dark:bg-gray-900">
      <div className="relative mx-auto h-[800px] w-full max-w-sm rounded-[3rem] border-[14px] border-gray-900 bg-gray-900 shadow-xl ring-1 ring-gray-900/50">
        <div className="absolute left-1/2 top-0 z-20 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-gray-900"></div>
        <div className="h-full w-full overflow-hidden rounded-[2.5rem] bg-white dark:bg-black">
          <div className="relative h-full w-full overflow-hidden">
            {/* Hero Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/landing_page.png"
                alt="Beautiful turquoise lake surrounded by mountains"
                fill
                priority
                className="object-cover animate-zoom-loop"
                quality={90}
              />
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />
            </div>

            {/* Content */}
            <main className="relative z-10 flex h-full flex-col items-center justify-center px-4 py-8 sm:px-8 sm:py-16">
              <div className="flex w-full max-w-4xl flex-col items-center gap-6 text-center sm:gap-8">
                <h1 className="text-3xl font-bold leading-tight text-white drop-shadow-lg sm:text-4xl">
                  Welcome to Caregiver's Task Manager
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-white/90 drop-shadow-md sm:text-xl">
                  Personalised task management for caregivers
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
