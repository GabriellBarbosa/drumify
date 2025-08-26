import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#18181b] via-[#23272f] to-[#1a1a2e] dark px-4">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-[#23272f]/80 border border-[#2c2f36] flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-primary mb-2">
            <path d="M12 16v-8m0 0l-3.5 3.5M12 8l3.5 3.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="3" y="3" width="18" height="18" rx="4" stroke="#fff" strokeWidth="1.5"/>
          </svg>
          <h1 className="text-2xl font-bold text-white mb-1 text-center">Create your own drum sheets</h1>
          <p className="text-sm text-muted-foreground text-center">Upload a video or audio file and let Drumify convert your music into drum notation. Drag & drop or select your music file to get started.</p>
        </div>
        <div className="w-full">
          <label htmlFor="picture" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-primary rounded-xl cursor-pointer bg-[#18181b]/60 hover:bg-[#23272f]/90 transition-colors">
            <span className="text-muted-foreground mb-2">Click or drag file here</span>
            <Input id="picture" type="file" accept="video/*,audio/*" className="hidden" />
          </label>
        </div>
      </div>
    </div>
  );
}
