import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <div className="h-full w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <div className="relative text-start z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-medium">
          <h1 className="text-9xl pb-5">I&#8217;m Vinay Ingle.</h1>
          <h5 className="text-xl">Coming soon!</h5>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
