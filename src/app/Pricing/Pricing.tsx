import { PricingTabs } from "./PricingTabs";
import BlurFade from "@/components/magicui/blur-fade";
import { FAQs } from "./FAQs/FAQs";

const Pricing = () => {
  return (
    <>
      <BlurFade delay={0.25} inView>
        <div className="text-center mt-20 flex flex-col items-center p-4">
          <BlurFade delay={0.35} inView>
            <h2 className="text-md font-semibold">Transparent Pricing</h2>
          </BlurFade>

          <BlurFade delay={0.45} inView>
            <h1 className="max-w-3xl text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              Start for free, and pay only when you share your first demo
            </h1>
          </BlurFade>
          <BlurFade delay={0.55} inView>
            <p className="text-sm md:text-lg text-muted-foreground mt-3">
              Subscribe when you’re ready to launch your project.
            </p>
          </BlurFade>
          <PricingTabs />
        </div>
      </BlurFade>
      
      <div className="flex flex-col items-center gap-2 my-40">
        <h3>Trusted by marketers at...</h3>
        <div className="flex flex-wrap justify-center items-center gap-4 mt-5">
          <img
            src="https://www.vectorlogo.zone/logos/google/google-ar21.svg"
            className="grayscale md:h-16 h-12 "
            alt="Google"
          />
          <img
            src="https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg"
            className="grayscale md:h-20 h-12 "
            alt="Microsoft"
          />
          <img
            src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg"
            className="grayscale md:h-16 h-12 "
            alt="Amazon AWS"
          />
          <img
            src="https://www.vectorlogo.zone/logos/ibm/ibm-ar21.svg"
            className="grayscale md:h-16 h-12 "
            alt="IBM"
          />
          <img
            src="https://www.vectorlogo.zone/logos/intel/intel-ar21.svg"
            className="grayscale md:h-16 h-12 "
            alt="Intel"
          />
        </div>
      </div>

      <FAQs />
    </>
  );
};

export default Pricing;
