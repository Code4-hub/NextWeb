import { Button } from "@/components/ui/button";
import { TiArrowRight } from "react-icons/ti";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import BlurFade from "@/components/magicui/blur-fade";

export const StartNow = () => {
  return (
    <BlurFade delay={0.25} inView>
      <div className="relative bg-black my-20 h-[50vh] rounded-[24px] text-white p-5 flex flex-col items-center justify-center gap-8">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
          )}
        />
        <BlurFade delay={0.35} inView>
          <h1 className="text-5xl lg:text-6xl font-semibold text-center">
            Time to update yourself .
          </h1>
        </BlurFade>
        <BlurFade delay={0.45} inView>
          <p className="text-sm md:text-md">
            Get a quote for the ideal website for your business.
          </p>
        </BlurFade>
        <BlurFade delay={0.55} inView>
          <Button
            className="bg-white text-black px-8 py-6 rounded-full text-lg flex items-center gap-1 transition-all duration-200 ease-in-out hover:gap-3 hover:bg-gray-100"
            variant={"default"}
            onClick={() => window.location.assign("/pricing")}
            aria-label="Start now"
          >
            <span> Start here</span>
            <TiArrowRight />
          </Button>
        </BlurFade>
      </div>
    </BlurFade>
  );
};
