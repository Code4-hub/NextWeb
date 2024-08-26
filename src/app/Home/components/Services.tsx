import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import ImgOne from "../img/imgOne.webp";
import ImgTwo from "../img/imgTwo.webp";
import ImgTree from "../img/imgTree.webp";
import ocharfao from "../components/ocharfao.jpg"

type Data = {
  title: string;
  description: string;
  img: string;
  width: number;
  height: number;
  alt: string;
};

const content: Data[] = [
  {
    title: "Ease of Use",
    description:
      "Simplicity at its finest. Our apps are designed with ease of use in mind, ensuring that even beginners can navigate and utilize them effortlessly. Say goodbye to complicated interfaces and hello to a seamless user experience.",
    img: ImgOne,
    width: 600,
    height: 400,
    alt: "Custom website design image",
  },
  {
    title: "Innovation",
    description:
      "Innovation is at the heart of everything we do. We constantly strive to bring you the latest advancements in software solutions, so you can stay ahead of the curve and benefit from cutting-edge technology.",
    img: ImgTwo,
    width: 600,
    height: 400,
    alt: "Reliable web design service image",
  },
  {
    title: "Community Focus",
    description:
      "Join a thriving community of users and developers who are passionate about technology. Collaboration and support are at the core of our community, making it the perfect place to share ideas, learn from others, and grow together.",
    img: ImgTree,
    width: 600,
    height: 400,
    alt: "Risk-free trial image",
  },
];

export const Services = () => {
  return (
    <section className="w-full bg-black text-white py-5">
      <div className="container space-y-5 pb-10">
        <BlurFade delay={0.25} inView>
          <div className="text-center h-20 my-10">
            <div className="font-semibold text-white md:text-sm text-xs">
              WHY US
            </div>
            <div className="md:text-4xl text-3xl font-bold text-white">
              Results-driven design, with a personal touch
            </div>
          </div>
        </BlurFade>
        {content.map((item, key) => (
          <BlurFade delay={0.25} inView key={item.title}>
            <div className="flex lg:items-center flex-col lg:flex-row gap-5 lg:h-[80vh]">
              <div className="lg:w-[50%]">
      
                <div className="md:text-4xl text-3xl font-bold text-white">
                  {item.title}
                </div>
                <p className="mt-5 md:text-xl text-lg text-gray-300">
                  {item.description}
                </p>
                {key === 2 && (
                  <Button
                    className="mt-8 bg-white text-black py-6 px-10 rounded-full text-lg"
                    aria-label="Start for free"
                  >
                    Get started
                  </Button>
                )}
              </div>
              <BlurFade
                delay={0.35}
                inView
                className="lg:w-[50%] lg:mt-0 mt-5 aspect-square lg:aspect-auto"
              >
                <img
                  src={item.img}
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                  loading="lazy"
                />
              </BlurFade>
            </div>
          </BlurFade>
        ))}

        <div className="flex flex-col items-center gap-7">
          <div className="text-4xl text-center max-w-4xl">
            "I really like the different style of layouts AutomatorDev has used with
            our content, yet still within our guidelines!"
          </div>
          <div className="flex items-center gap-4">
            <img
              src={ocharfao}
              width="96"
              height="96"
              alt="Profile of Gemma Fishel"
              className="size-12 rounded-[50%]"
              loading="lazy"
            />
            <div>
              <div>Othmane charfaoui</div>
              <p className="text-xs text-muted-foreground">
                Full Stack developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
