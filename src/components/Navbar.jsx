import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`
        fixed left-1/2 -translate-x-1/2
        rounded-full backdrop-blur-md
        transition-all duration-300
        border shadow-sm
        ${scrolled
          ? "w-[92%] sm:w-4/5 bg-gray-900/60 border-white/10"
          : "w-[96%] sm:w-3/5 bg-gray-800/50 border-white/5 mt-6"
        }
      `}
      style={{ zIndex: 1000 }}
    >
      <ul className="flex justify-center gap-6 sm:gap-10 text-sm sm:text-base py-3">
        {links.map((link) => (
          <li key={link.name} className="relative group">
            <Link to={link.path} className="px-1 py-1 inline-block">
              {link.name}
              <span
                className={`
                  absolute left-0 -bottom-1 h-[2px]
                  bg-gradient-to-r from-gray-900 to-gray-500
                  transition-all duration-300
                  ${location.pathname === link.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                  }
                `}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
