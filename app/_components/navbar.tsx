import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav className="p-5 flex justify-between items-center border-b shadow-sm h-14">
        <Image
        src={"/logo.svg"}
        height={100}
        width={160}
        alt="Logo"
        />
        <Button>
            <Link href={"/sign-up"}>
            Get Started
            </Link>
        </Button>
    </nav>
     );
}
 
export default Navbar;