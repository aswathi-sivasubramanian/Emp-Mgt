import {Link} from "react-router-dom";
interface LinkProps {
    title: string;
    href: string;
  }
  
  const navigationLinks: LinkProps[] = [
    { title: "Home", href: "/main" },
    { title: "Link2", href: "#" },
    { title: "Link3", href: "#" },
    { title: "Link4", href: "#" },
    { title: "Link5", href: "#" },
    { title: "Link6", href: "#" },
    { title: "Link7", href: "#" },
    { title: "Link8", href: "#" },
    { title: "Link9", href: "#" },
    { title: "Link10", href: "#" },
    { title: "Link11", href: "#" },
    
    
    
];
  
const Sidebar:React.FC=()=>{
    return(<div ><div className=" mt-0.5 "><nav className="bg-customBlue flex-col w-36 pt-36 overflow-y-auto h-screen">
    {navigationLinks.map((link) => (
      <div key={link.title} className="mt-2 ml-4 ">
        <Link to={link.href} className="px-3 py-2 text-white hover:text-customOrange transition-all duration-150 ease-in-out">
          {link.title}
        </Link>
      </div>
    ))}
  </nav>
  </div></div>)
}
export default Sidebar;


