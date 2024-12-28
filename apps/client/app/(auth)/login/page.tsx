import LoginForm from "@/components/LoginForm";
import { GalleryVerticalEnd } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen bg-lightBg flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex relative w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          AlgoHub
        </a>
        <LoginForm />
      </div>
    </div>
  );
}
