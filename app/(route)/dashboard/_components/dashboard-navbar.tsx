import { UserButton } from "@clerk/nextjs";

const DashboardNavbar = () => {
    return ( 
        <div className="border-b h-14 px-5 shadow-md flex items-center justify-between">
            <div className="">
                Search bar
            </div>
            <div>
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
     );
}
 
export default DashboardNavbar;