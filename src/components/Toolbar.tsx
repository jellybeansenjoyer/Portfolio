// "use client";
// import { useState, useEffect } from "react";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useRouter } from "next/navigation";
// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
// } from "@/components/ui/drawer";
// import { Button } from "@/components/ui/button";
// import { Hop } from "lucide-react";

// const Toolbar = () => {
//   const handleScrollBehaviour = () => {
//     window.scrollBy({
//       top: window.innerHeight, // Scroll down by one screen height
//       behavior: "smooth", // Smooth scrolling effect
//     });
//   };  
//   const downloadFile = ()=>{
//     const link = document.createElement("a");
//     link.href = "cv.pdf";
//     link.download="Raghav_Kashyap_CV.pdf"
//     link.click();
//   }
//   const routeToHome = ()=>{
//       router.push("/")
//   }
//   const router = useRouter()
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleDrawer = () => setIsOpen(!isOpen);
//   const handleScroll = () => {
//     const currentScrollY = window.scrollY;

//     if (currentScrollY > lastScrollY && currentScrollY > 25) {
//       setIsVisible(false); // Hide on scroll down
//     } else {
//       setIsVisible(true); // Show on scroll up
//     }

//     setLastScrollY(currentScrollY);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollY]);

//   const headers: string[] = [
//     "About",
//     "Experience",
//     "Achievements",
//     "Projects",
//     "Contact",
//   ];

//   return (
//     <div
//       className={`min-h-24 fixed top-0 left-0 w-full flex items-center justify-between bg-navy px-12 py-5 z-10 shadow-xl transition-transform duration-300 ${
//         isVisible ? "translate-y-0" : "-translate-y-full"
//       }`}
//     >
//       <div onClick={()=>{routeToHome()}}>
//         <p className="text-aquamarine font-sans cursor-pointer whitespace-nowrap">
//           Logo
//         </p>
//       </div>

//       <div className="gap-10 slashed-zero items-center md:flex hidden">
//         {headers.map((word, index) => (
//           <p
//             key={index}
//             onClick={()=>{handleScrollBehaviour()}}
//             className="text-aquamarine slashed-zero font-sans cursor-pointer whitespace-nowrap"
//           >
//             {`0${index + 1}. `}
//             <span className="font-sans whitespace-nowrap text-lavendar hover:text-aquamarine transition-colors duration-300 slashed-zero cursor-pointer">
//               {word}
//             </span>
//           </p>
//         ))}
//         <div onClick={()=>{
//           downloadFile()
//         }} className="bg-transparent border border-aquamarine py-2 px-3 text-aquamarine rounded-md font-sans cursor-pointer whitespace-nowrap lg:flex hidden">
//           Resume
//         </div>
//       </div>

//       {/* Hamburger icon */}
//       <FontAwesomeIcon
//         className="md:hidden flex cursor-pointer"
//         icon={faBars}
//         width={20}
//         height={20}
//         style={{ color: "#5FF5D3" }}
//         onClick={toggleDrawer}
//       />

//       {/* Drawer Component */}
//       <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
//         <DrawerContent className="bg-navy">
//           <DrawerHeader>
            
//             <DrawerTitle></DrawerTitle>
//           </DrawerHeader>
//           <DrawerFooter>
//             <div className="flex flex-col gap-10 items-center justify-center">
//             {headers.map((word, index) => (
//           <p
//             key={index}
//             className="text-aquamarine slashed-zero font-sans cursor-pointer text-center" onClick={()=>setIsOpen(false)}
//           >
//             {`0${index + 1}. `}
//             <span  onClick={()=>setIsOpen(false)} className="font-sans  text-lavendar hover:text-aquamarine transition-colors duration-300 slashed-zero cursor-pointer text-center">
//               {word}
//             </span>
//           </p>
//         ))}
//         <div  onClick={()=>{
//           setIsOpen(false); 
//           downloadFile();}} className="bg-transparent border min-w-52 justify-center border-aquamarine py-2 px-3 text-aquamarine rounded-md font-sans cursor-pointer whitespace-nowrap lg:flex hidden">
//           Resume
//         </div>
//             </div>
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     </div>
//   );
// };

// export default Toolbar;
"use client";
import { useState, useEffect } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation"; // Import usePathname

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

const Toolbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const handleScrollBehaviour = (scrollScreens:number) => {
    setTimeout(() => {
      window.scrollBy({
        top: window.innerHeight * scrollScreens, // Scroll based on the number of screens
        behavior: "smooth", // Smooth scrolling effect
      });
    }, 100); // Small delay to ensure navigation completes
  };

  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "cv.pdf";
    link.download = "Raghav_Kashyap_CV.pdf";
    link.click();
  };

  const handleNavigation = (index:number) => {
    // console.log(pathname);
    // if (pathname !== "/") {
      
    //   router.push("/");
      
    // }
    // handleScrollBehaviour(index + 1);
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => handleScrollBehaviour(index + 1), 500); // Add delay before scrolling
    } else {
      handleScrollBehaviour(index + 1);
    }
  };

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 25) {
      setIsVisible(false); // Hide on scroll down
    } else {
      setIsVisible(true); // Show on scroll up
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const headers = [
    "About",
    "Experience",
    "Achievements",
    "Projects",
    "Contact",
  ];

  return (
    <div
      className={`min-h-24 fixed top-0 left-0 w-full flex items-center justify-between bg-navy px-12 py-5 z-10 shadow-xl transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div onClick={() => router.push("/")}>
        <p className="text-aquamarine font-sans cursor-pointer whitespace-nowrap">
          Logo
        </p>
      </div>

      <div className="gap-10 slashed-zero items-center md:flex hidden">
        {headers.map((word, index) => (
          <p
            key={index}
            onClick={() => handleNavigation(index)}
            className="text-aquamarine slashed-zero font-sans cursor-pointer whitespace-nowrap"
          >
            {`0${index + 1}. `}
            <span className="font-sans whitespace-nowrap text-lavendar hover:text-aquamarine transition-colors duration-300 slashed-zero cursor-pointer">
              {word}
            </span>
          </p>
        ))}
        <div
          onClick={downloadFile}
          className="bg-transparent border border-aquamarine py-2 px-3 text-aquamarine rounded-md font-sans cursor-pointer whitespace-nowrap lg:flex hidden"
        >
          Resume
        </div>
      </div>

      {/* Hamburger icon */}
      <FontAwesomeIcon
        className="md:hidden flex cursor-pointer"
        icon={faBars}
        width={20}
        height={20}
        style={{ color: "#5FF5D3" }}
        onClick={toggleDrawer}
      />

      {/* Drawer Component */}
      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        <DrawerContent className="bg-navy">
          <DrawerHeader></DrawerHeader>
          <DrawerFooter>
            <div className="flex flex-col gap-10 items-center justify-center">
              {headers.map((word, index) => (
                <p
                  key={index}
                  className="text-aquamarine slashed-zero font-sans cursor-pointer text-center"
                  onClick={() => {
                    setIsOpen(false);
                    handleNavigation(index);
                  }}
                >
                  {`0${index + 1}. `}
                  <span className="font-sans text-lavendar hover:text-aquamarine transition-colors duration-300 slashed-zero cursor-pointer text-center">
                    {word}
                  </span>
                </p>
              ))}
              <div
                onClick={() => {
                  setIsOpen(false);
                  downloadFile();
                }}
                className="bg-transparent border min-w-52 justify-center border-aquamarine py-2 px-3 text-aquamarine rounded-md font-sans cursor-pointer whitespace-nowrap lg:flex hidden"
              >
                Resume
              </div>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Toolbar;
