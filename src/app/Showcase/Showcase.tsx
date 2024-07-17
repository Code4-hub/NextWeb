import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";

interface DataItem {
  id: number;
  img: string;
  title: string;
  desc: string;
}

const data: DataItem[] = [
  {
    id: 1,
    img: "https://framerusercontent.com/images/gI72DhfNDm5yo31lOKXKGBPL7c.png",
    title: "Duolingo E-commerce Redesign",
    desc: "A complete redesign of Duolingo's online store, enhancing user experience and increasing sales through intuitive navigation and responsive design.",
  },
  {
    id: 2,
    img: "https://framerusercontent.com/images/h0gZpvyBU3u51KT9FUyoZB9OmI.png?scale-down-to=1024",
    title: "IBM Corporate Website Overhaul",
    desc: "Revamping IBM's corporate website to better reflect the brand’s values and improve client engagement with a modern, professional look.",
  },
  {
    id: 3,
    img: "https://framerusercontent.com/images/iAkFUxgM1Zm3KGUSUMs0BLtrWw.png?scale-down-to=1024",
    title: "Bellanova Portfolio Showcase",
    desc: "Creating a stunning portfolio for Bellanova, showcasing their work in a clean, visually appealing manner.",
  },
  {
    id: 4,
    img: "https://framerusercontent.com/images/IZGU4RHHr0DamivhTq9Vhv8TV74.png?scale-down-to=1024",
    title: "NorthAlley Non-Profit Organization Site",
    desc: "Developing a website for NorthAlley, a non-profit organization, to help them reach a wider audience and streamline their donation process.",
  },
  {
    id: 5,
    img: "https://framerusercontent.com/images/9Zo0y2Tyu4bJKqVigF6fYymR0lU.png?scale-down-to=1024",
    title: "Super.com Educational Platform",
    desc: "Building an interactive educational platform for Super.com to provide online courses, quizzes, and student progress tracking.",
  },
  {
    id: 6,
    img: "https://framerusercontent.com/images/FO4MVtGBBWPK3S7WYzAGrg1mk.png?scale-down-to=1024",
    title: "Dropbox Restaurant Website",
    desc: "Designing a mouth-watering website for Dropbox's corporate restaurant, complete with an online reservation system and menu display.",
  },
  {
    id: 7,
    img: "https://framerusercontent.com/images/l900AL3voZZPThyeF2Fvv5kpPE.png?scale-down-to=1024",
    title: "Startbox Tech Startup Landing Page",
    desc: "Creating a dynamic landing page for Startbox, a tech startup, to attract investors and showcase their innovative product.",
  },
  {
    id: 8,
    img: "https://framerusercontent.com/images/TIeqxiug3u86TUVz7d3ahnOjMw.png?scale-down-to=1024",
    title: "Twitch Travel Blog",
    desc: "Developing a travel blog for Twitch with engaging content and beautiful imagery to inspire and inform travelers.",
  },
  {
    id: 9,
    img: "https://framerusercontent.com/images/w6qV3REQzeZhn7oJWvEx0Q780.png?scale-down-to=1024",
    title: "Freepik Fitness App Website",
    desc: "Designing a promotional website for Freepik's fitness app, highlighting its features and benefits to potential users.",
  },
];

const Showcase: React.FC = () => {
  return (
    <div className="py-10">
      <BlurFade delay={0.25} inView>
        <div className="flex flex-col items-center">
          <h1 className="text-center text-5xl w-full md:w-8/12 font-bold mt-20">
            Interactive Product Demo Examples
          </h1>
          <BlurFade delay={0.3} inView>
            <p className=" py-4 text-center">
              A selection of our favorite demos to get your creativity flowing
            </p>
          </BlurFade>
        </div>
      </BlurFade>
      <BlurFade delay={0.4} inView>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 justify-center gap-10 mt-20">
          {data.map((item, index) => {
            return (
              <BlurFade key={item.id} delay={index * 0.1} inView>
                <div className="cursor-pointer transition-all duration-200 ease-in-out hover:shadow-lg rounded-xl p-5">
                  <img
                    src={item.img}
                    alt={item.title}
                    className=" object-cover rounded-lg border"
                  />
                  <h1 className="font-bold text-lg pt-5">{item.title}</h1>
                  <p className="text-[0.9rem] opacity-70 py-2">{item.desc}</p>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </BlurFade>
      <BlurFade delay={0.45} inView>
        <div className="mx-5 bg-black text-white flex flex-col gap-8 justify-between items-center px-10 py-6 rounded-lg mt-20 md:flex-row md:gap-0 md:px- ">
          <div>
            <h1 className="text-xl">Create your first product demo on us!</h1>
            <p className="text-base font-normal leading-7 text-zinc-500 lg:max-w-lg md:max-w-md my-2">
              Start now and take advantage of our comprehensive web development
              tools to create stunning demos that captivate your audience.
            </p>
          </div>
          <Button className="bg-white text-black rounded-full px-5 py-6 hover:bg-zinc-300">
            Get started for free
          </Button>
        </div>
      </BlurFade>
    </div>
  );
};

export default Showcase;
