import { SiDevexpress } from "react-icons/si";
import LetterPullup from "@/components/magicui/letter-pullup";
import { Link, useNavigate } from "react-router-dom";
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
        <Link
          to={"/blog"}
          className="transition-all duration-100 text-muted-foreground hover:text-black "
        >
          Blog
        </Link>
        <Link
          to={"/showcase"}
          className="transition-all duration-100 text-muted-foreground hover:text-black "
        >
          Showcase
        </Link>
        <Link
          to={"/pricing"}
          className="transition-all duration-100 text-muted-foreground hover:text-black "
        >
          Pricing
        </Link>
        <Link
          to={"/about"}
          className="transition-all duration-100 text-muted-foreground hover:text-black "
        >
          About us
        </Link>
      </div>

      <Button
        size={"lg"}
        variant={"default"}
        className="rounded-full hidden md:block"
        onClick={() => navigate("/contact-us")}
      >
        Contact Us
      </Button>

      <MobileNavBar />
    </div>
  );
};
