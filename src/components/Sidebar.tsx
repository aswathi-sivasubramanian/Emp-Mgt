interface LinkProps {
    title: string;
    href: string;
  }
  
  const navigationLinks: LinkProps[] = [
    { title: "Home", href: "#" },
    { title: "About", href: "#" },
    { title: "Services", href: "#" },
    { title: "Contact", href: "#" },
    { title: "Home", href: "#" },
    { title: "About", href: "#" },
    { title: "Services", href: "#" },
    { title: "Contact", href: "#" },
    { title: "Home", href: "#" },
    { title: "About", href: "#" },
    { title: "Services", href: "#" },
    
    
    
];
  
const Sidebar:React.FC=()=>{
    return(<div ><div className=" mt-0.5 "><nav className="bg-customBlue flex-col w-36 pt-36 overflow-y-auto h-screen">
    {navigationLinks.map((link) => (
      <div key={link.title} className="mt-2 ml-4 ">
        <a href={link.href} className="px-3 py-2 text-white hover:text-customOrange transition-all duration-150 ease-in-out">
          {link.title}
        </a>
      </div>
    ))}
  </nav>
  </div></div>)
}
export default Sidebar;


