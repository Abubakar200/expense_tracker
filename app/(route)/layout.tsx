"use client";
import { useUser } from "@clerk/nextjs";
import DashboardNavbar from "./dashboard/_components/dashboard-navbar";
import SideNav from "./dashboard/_components/sidebar";
import { db } from "@/utils/dbConfig";
import { Budgets } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();

  useEffect(()=> {
    user && checkUserList()
  }, [user])

  const router = useRouter()
  const checkUserList = async () => {
    const result = await db
      .select()
      .from(Budgets)
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress));

      console.log(result)
      if(result?.length === 0){
          router.push("/dashboard/budgets")
      } 
  };

  
  return (
    <div>
      <div className="fixed md:w-64 hidden md:block ">
        <SideNav />
      </div>
      <div className="md:ml-64 ">
        <DashboardNavbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
