import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import BlurFade from "@/components/magicui/blur-fade";

export const Monthly = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-5 w-full mt-5">
      <BlurFade delay={0.25} inView>
        <div className="p-5 flex flex-col gap-4 transition-all duration-200 ease-in-out hover:shadow-lg rounded-[24px] border w-full">
          <h3 className="text-lg">Basic Plan</h3>
          <div className="flex items-end justify-center">
            <p className="font-bold text-6xl">$99</p>
            <span className="text-lg text-muted-foreground">/month</span>
          </div>
          <p className="text-sm text-muted-foreground">
            For startups and small businesses
          </p>

          <div className="mt-2">
            <Button className="w-full py-6 rounded-full" variant={"secondary"}>
              Talk to Sales
            </Button>
          </div>
          <Separator className="my-4" />

          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <FaCheck size={20} className="text-green-500" />
              <p className="text-md">Custom website design</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck size={20} className="text-green-500" />
              <p className="text-md">Responsive development</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck size={20} className="text-green-500" />
              <p className="text-md">Basic SEO</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck size={20} className="text-green-500" />
              <p className="text-md">Monthly updates</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck size={20} className="text-green-500" />
              <p className="text-md">Email support</p>
            </div>
          </div>
        </div>
      </BlurFade>
      {/* Professional Plan Card*/}
      <BlurFade delay={0.35} inView>
        <div className="p-5 flex flex-col gap-4 transition-all duration-200 ease-in-out hover:shadow-lg rounded-[24px] border w-full">
          <h3 className="text-lg">Professional Plan</h3>
          <div className="flex items-end justify-center">
            <p className="font-bold text-6xl">$199</p>
            <span className="text-lg text-muted-foreground">/month</span>
          </div>
          <p className="text-sm text-muted-foreground">
            For growing businesses
          </p>

          <div className="mt-2">
            <Button className="w-full py-6 rounded-full" variant={"default"}>
              Talk to Sales
            </Button>
          </div>
          <Separator className="my-4" />

          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <FaCheck size={20} className="text-green-500" />
              <p className="text-md">All Basic Plan features plus</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck size={20} className="text-green-500" />
              <p className="text-md">E-commerce integration</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck size={20} className="text-green-500" />
              <p className="text-md">Advanced SEO</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck size={20} className="text-green-500" />
              <p className="text-md">Weekly updates</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck size={20} className="text-green-500" />
              <p className="text-md">Priority email support</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck size={20} className="text-green-500" />
              <p className="text-md">Analytics setup</p>
            </div>
          </div>
        </div>
      </BlurFade>
      {/* Enterprise Plan Card */}
      <BlurFade delay={0.40} inView>
        <div className="p-5 flex flex-col gap-4 transition-all duration-200 ease-in-out hover:shadow-lg rounded-[24px] border w-full">
          <h3 className="text-lg">Enterprise Plan</h3>
          <div className="flex items-end justify-center">
            <p className="font-bold text-6xl">$499</p>
            <span className="text-lg text-muted-foreground">/month</span>
          </div>
          <p className="text-sm text-muted-foreground">
            For large businesses and enterprises
          </p>

          <div className="mt-2">
            <Button className="w-full py-6 rounded-full" variant={"outline"}>
              Talk to Sales
            </Button>
          </div>
          <Separator className="my-4" />

          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <FaCheck size={20} className="text-green-500" />
              <p className="text-md">All Professional Plan features plus</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck size={20} className="text-green-500" />
              <p className="text-md">Custom web applications</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck size={20} className="text-green-500" />
              <p className="text-md">API integration</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck size={20} className="text-green-500" />
              <p className="text-md">Dedicated account manager</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck size={20} className="text-green-500" />
              <p className="text-md">24/7 support</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck size={20} className="text-green-500" />
              <p className="text-md">Personalized training</p>
            </div>
          </div>
        </div>
      </BlurFade>
    </div>
  );
};
