import Toolbar from "@/components/Toolbar";
import Hero from '@/components/Hero';
export default function Home() {
  return (
    <div className="flex relative flex-col scrollbar-thin">
    <Toolbar />
    <Hero />
    <div className="h-screen bg-gray-200 flex items-center justify-center">
        <h1 className="text-3xl">Scroll down for more content</h1>
      </div>
      <div className="h-screen bg-gray-300 flex items-center justify-center">
        <h1 className="text-3xl">Keep scrolling!</h1>
      </div>
    </div>
  );
}
