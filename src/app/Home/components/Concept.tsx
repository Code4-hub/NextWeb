import { FaHandshake } from "react-icons/fa6";
import { SiMaterialdesign } from "react-icons/si";
import { IoDesktopOutline } from "react-icons/io5";
import { GoRocket } from "react-icons/go";
import BlurFade from "@/components/magicui/blur-fade";

type Steps = {
  title: string;
  description: string;
  icon: JSX.Element;
  day: string;
};

const steps: Steps[] = [
  {
    title: "Kickoff",
    description:
      "Initial discovery session to learn about all your needs and ideas.",
    icon: <FaHandshake size={36} />,
    day: "Session 1",
  },
  {
    title: "Design",
    description: "Website design + draft review for feedback.",
    icon: <SiMaterialdesign size={36} />,
    day: "Session 2",
  },
  {
    title: "Development",
    description:
      "Website construction + final review of content and functionality.",
    icon: <IoDesktopOutline size={36} />,
    day: "Session 3",
  },
  {
    title: "Launch",
    description: "Setup, training, and final testing for launch.",
    icon: <GoRocket size={36} />,
    day: "Session 4",
  },
];
export const Concept = () => {
  return (
    <div className="container mx-auto px-4 my-20 lg:h-[60vh]">
      <BlurFade delay={0.25} inView>
        <div className="flex flex-col items-center">
          <h2 className="text-5xl lg:text-7xl max-w-xl font-semibold text-center">
            Concept to reality in weeks
          </h2>
          <h3 className="my-5 text-muted-foreground">
            Your website ready in 4 to 6 weeks.
          </h3>
        </div>
      </BlurFade>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mt-20">
        {steps.map((item, key) => (
          <BlurFade delay={key * 0.05} inView>
            <div className="flex flex-col items-center gap-3 " key={key}>
              {item.icon}
              <p className="text-muted-foreground">{item.day}</p>
              <h4 className="text-3xl font-bold">{item.title}</h4>
              <p className="text-sm max-w-xs text-center text-muted-foreground">
                {item.description}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
};
