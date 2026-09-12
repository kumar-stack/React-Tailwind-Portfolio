import { useEffect, useState } from "react";
import Button from "./Button";
import { Menu, X } from "lucide-react";
import "../App.css";

const navlinks = [
  { href: "#about", title: "About" },
  { href: "#projects", title: "Projects" },
  { href: "#experience", title: "Experience" },
  { href: "#testimonials", title: "Testimonials" },
];

function Navbar() {
  const [isMenuAcitve, setIsMenuActive] = useState(false);
  const [isScroll, seIsScroll] = useState(false);

  useEffect(() => {
    const scrollehandler = () => {
      seIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", scrollehandler);

    return () => window.removeEventListener("scroll", scrollehandler);
  }, []);

  return (
    <div className="z-20 fixed w-full">
      {/* <nav className="flex items-center justify-between px-3 py-1 bg-emerald-100 shadow-[0px_1px_1px_0px_darkgreen] opacity-65"> */}
      <nav
        className={`fixed w-full py-2 flex items-center justify-between px-3 transition-all duration-500 backdrop-blur-sm ${isScroll ? "bg-white/20 py-1" : "bg-transparent"}`}
      >
        <a href="#" className="logo flex items-center text-white text-3xl">
          GK<span className="text-emerald-600 text-3xl">.</span>
        </a>

        <div className=" gap-5 items-center hidden md:flex menu_list">
          {navlinks.map((link, index) => (
            <a href={link.href} className="" key={index}>
              {link.title}
            </a>
          ))}
        </div>
        <div className="max-md:hidden p-0">
          <Button>
            <a href="#contactMe">Contact me</a>
          </Button>
        </div>

        <button
          className="md:hidden text-white text-lg"
          onClick={() => setIsMenuActive(!isMenuAcitve)}
        >
          {isMenuAcitve ? <X /> : <Menu />}
        </button>
      </nav>
      {isMenuAcitve && (
        <div>
          <div className="undertabMenu flex flex-col mt-13 bg-white/99 py-5 gap-3 md:hidden px-2">
            {navlinks.map((link, index) => (
              <a
                href={link.href}
                className=""
                onClick={() => {
                  setIsMenuActive(false);
                }}
                key={index}
              >
                {link.title}
              </a>
            ))}
            <Button>Contact me</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
