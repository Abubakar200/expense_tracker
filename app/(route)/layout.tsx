import DashboardNavbar from "./dashboard/_components/dashboard-navbar";
import SideNav from "./dashboard/_components/sidebar";

const DashboardLayout = ({
    children
}: {
    children : React.ReactNode
}) => {
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
}
 
export default DashboardLayout;