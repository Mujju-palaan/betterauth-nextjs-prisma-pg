// import  MujjuLogo from "/assets/mujju_logo.png";
import { ModeToggle } from "@/components/mode-toggle";
import { UserDropdown } from "@/components/user-dropdown";
import { getServerSession } from "../../app/lib/get-session";
import Image from "next/image";
import Link from "next/link";

export async function Navbar() {
  const session = await getServerSession();
  const user = session?.user;

  if (!user) return null;

  return (
    <header className="bg-background border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 font-semibold"
        >
          <Image
            src={`/assets/mujju_logo.png`}
            alt="Mujju logo"
            width={150}
            height={100}
            className="border-muted rounded-full border"
          />
          {/* Better-Auth Tutorial */}
        </Link>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <UserDropdown user={user} />
        </div>
      </div>
    </header>
  );
}