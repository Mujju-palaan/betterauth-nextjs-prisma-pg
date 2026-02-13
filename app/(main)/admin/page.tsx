import { getServerSession } from "@/app/lib/get-session";
import { Skeleton } from "@/components/ui/skeleton";
import { forbidden, unauthorized } from "next/navigation";

export default async function AdminLoading() {
  const session = await getServerSession();
    const user = session?.user

    if (!user) unauthorized();
    if (user && user.role !== "admin") forbidden();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12">
      <div className="space-y-3">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-5 w-56" />
      </div>
    </div>
  );
}