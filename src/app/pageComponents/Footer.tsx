import { Separator } from "@/components/ui/separator";
import LetterPullup from "@/components/magicui/letter-pullup";
import { FaGithub, FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <div>
      <Separator className="my-4" />
      <div className="flex  gap-5 lg:flex-row lg:justify-between lg:gap-10 flex-col">
        <div>
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => window.location.assign("/")}
          >
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
            <h5 className=" text-lg font-bold">Resources</h5>
            <Link
              to={"/"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              Home
            </Link>
            <Link
              to={"/blog"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              Blog
            </Link>
            <Link
              to={"/showcase"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              Showcase
            </Link>
            <Link
              to={"/about"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              About us
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className=" text-lg font-bold">Product</h5>
            <Link
              to={"/blog"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              Pricing
            </Link>
            <Link
              to={"/showcase"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              Products
            </Link>
            <Link
              to={"/contact-us"}
              className="text-md font-semibold text-muted-foreground hover:text-black"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <Separator className="my-6" />

      <div className="flex md:items-center justify-between mb-5 md:flex-row flex-col-reverse gap-4">
        <p className="text-sm">
          © 2024{" "}
          <span
            className=" cursor-pointer hover:underline"
            onClick={() => window.location.assign("/")}
          >
            NextWeb
          </span>{" "}
          Ltd. All rights reserved.
        </p>
        <div className="flex items-center text-sm gap-5">
          <Link to={"/terms"} className="hover:underline">
            Terms & Conditions
          </Link>
          <Link to={"/privacy"} className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};
