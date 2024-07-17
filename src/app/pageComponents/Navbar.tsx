import { SiDevexpress } from "react-icons/si";
import LetterPullup from "@/components/magicui/letter-pullup";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MobileNavBar } from "./MobileNavBar";


export const Navbar = () => {
  let navigate: any = useNavigate();
  return (
    <div className="flex items-center justify-between md:p-0 py-5">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => window.location.assign("/")}
      >
        <SiDevexpress size={22} />
        <LetterPullup
          className="jersey-10-regular"
          words={"NextWeb"}
          delay={0.05}
        />
      </div>
      <div className="hidden md:flex itesm-center gap-8 text-md ">
        <NavLink
          to={"/blog"}
          className={({isActive})=>(isActive ? 'text-black transition-all duration-100 font-semibold':'text-muted-foreground transition-all duration-100')}
        >
          Blog
        </NavLink>
        <NavLink
          to={"/showcase"}
          className={({isActive})=>(isActive ? 'text-black transition-all duration-100 font-semibold':'text-muted-foreground transition-all duration-100')}
        >
          Showcase
        </NavLink>
        <NavLink
          to={"/pricing"}
          className={({isActive})=>(isActive ? 'text-black transition-all duration-100 font-semibold':'text-muted-foreground transition-all duration-100')}
        >
          Pricing
        </NavLink>
        <NavLink
          to={"/about"}
          className={({isActive})=>(isActive ? 'text-black transition-all duration-100 font-semibold':'text-muted-foreground transition-all duration-100')}
        >
          About us
        </NavLink>
      </div>

      <Button
        size={"lg"}
        variant={"default"}
        className="rounded-full hidden md:block hover:bg-zinc-600"
        onClick={() => navigate("/contact-us")}
      >
        Contact Us
      </Button>

      <MobileNavBar />
    </div>
  );
};
