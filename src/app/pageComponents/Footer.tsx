import { Separator } from "@/components/ui/separator";
import { SiDevexpress } from "react-icons/si";
import LetterPullup from "@/components/magicui/letter-pullup";
import { FaGithub, FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <Separator className="my-4" />
      <div className="flex  gap-5 lg:flex-row lg:justify-between lg:gap-10 flex-col">
        <div>
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

          <p>Crafted with ❤️ by a passionate team in Morocco</p>

          <div className="flex items-center gap-2 mt-10">
            <FaGithub
              size={26}
              className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-black"
            />
            <FaFacebookSquare
              size={26}
              className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-black"
            />
            <FaLinkedinIn
              size={26}
              className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-black"
            />
          </div>
        </div>
        <div className="flex md:w-[30%]  mt-10 xl:gap-20">
          <div className="flex flex-col gap-3 w-[50%]">
            <h5 className="text-muted-foreground text-sm font-bold">
              Resources
            </h5>
            <Link to={"/blog"} className="text-md font-semibold">
              Blog
            </Link>
            <Link to={"/showcase"} className="text-md font-semibold">
              Showcase
            </Link>
            <Link to={"/about"} className="text-md font-semibold">
              About us
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-muted-foreground text-sm font-bold">Product</h5>
            <Link to={"/blog"} className="text-md font-semibold">
              Pricing
            </Link>
            <Link to={"/showcase"} className="text-md font-semibold">
              Products
            </Link>
            <Link to={"/contact-us"} className="text-md font-semibold">
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <Separator className="my-6" />

      <div className="flex md:items-center justify-between mb-5 md:flex-row flex-col-reverse gap-4">
        <p className="text-sm">© 2024 NextWeb Ltd. All rights reserved.</p>
        <div className="flex items-center text-sm gap-5">
          <Link to={"/terms"}>Terms & Conditions</Link>
          <Link to={"/privacy"}>Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};
