"use client";
import { cn } from "@/lib/utils";
import { UserButton, useUser } from "@clerk/nextjs";
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNav = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const path = usePathname()
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: <LayoutGrid />,
      pathName: "/dashboard"
    },
    {
      id: 2,
      name: "Budgets",
      icon: <PiggyBank />,
      pathName: "/dashboard/budgets"

    },
    {
      id: 3,
      name: "Expenses",
      icon: <ReceiptText />,
      pathName: "/dashboard/expenses"

    },
    {
      id: 4,
      name: "Upgrade",
      icon: <ShieldCheck />,
      pathName: "/dashboard/upgrade"

    },
  ];
  return (
    <div className="h-screen border-r p-6 shadow-sm">
      <Image src={"/logo.svg"} width={160} height={100} alt="Logo" />
      <div className="mt-5 ">
        {menuList.map((item) => (
            <Link href={item.pathName}>
          <h2 className={cn("flex mt-3 items-center gap-2 font-medium text-gray-500 p-5 cursor-pointer rounded-lg hover:bg-primary hover:text-white", 
          path === item.pathName?"bg-primary text-white":""
          )}>
            {item.icon}
            {item.name}
          </h2>
            </Link>
        ))}
      </div>
      <div className="fixed bottom-10 flex gap-2 items-center">
        <UserButton afterSignOutUrl="/" />
        {user.fullName}
      </div>
    </div>
  );
};

export default SideNav;
