import { Link } from "react-router-dom";
interface LinkProps {
    title: string;
    href: string;
  }
  
  const navigationLinks: LinkProps[] = [
    { title: "Profile", href: "profile" },
    { title: "Assets Owned", href: "assets" },
    { title: "Goal", href: "goal" },

   
    
    // children:[{path:"profile",element:<Profile/>},{path:"assets",element:<Assets/>},{path:"goal",element:<Goal/>}]
    
];
  
const Submenu: React.FC =()=>{
    return (<><div className="ml-0.5 mt-0.5">
     <nav className="bg-customBlue flex h-10 w-screen">
    {navigationLinks.map((link) => (
      <div key={link.title} className="mt-2 ml-4 ">
        <Link to={link.href} className="px-3 py-2 text-white hover:text-customOrange transition-all duration-150 ease-in-out">
          {link.title}
        </Link>
      </div>
    ))}
  </nav>
        </div>
       
   </>)

}
export default Submenu;