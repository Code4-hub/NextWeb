import { Button } from "@/components/ui/button";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import BlurFade from "@/components/magicui/blur-fade";

type SiteData = {
  title: string;
  likes: number;
  logo: string;
  link: string;
  img: string;
};

const sitesData: SiteData[] = [
  {
    title: "Syncware",
    likes: 12,
    logo: "https://assets.website-files.com/63470e8222b1737ae74aeb6b/63470e8222b1739b114aed2e_Logo.svg",
    link: "https://syncware.webflow.io/",
    img: "https://cdn.prod.website-files.com/61789b489343c8242282a0ae/6457595e10902d6463dc1052_hPvogFMJeaIG8hUWax1Vvii9orV4z1yxOjvDABDy1a4.jpeg",
  },
  {
    title: "Detected",
    likes: 6,
    logo: "https://cdn.prod.website-files.com/6645dd8f216c161a23f6a264/6645dd8f216c161a23f6a34c_detected-logo-full-wordmark-orange-black%20(1).webp",
    link: "https://www.detected.co/",
    img: "https://cdn.prod.website-files.com/61789b489343c8242282a0ae/64575961abb73d212ae05c61_ZtTsn3eo8S6Uj2s_f-8HtAgIwp9q-gk41xR0zZagHSY.jpeg",
  },

  {
    title: "Whalesync",
    likes: 17,
    logo: "https://cdn.prod.website-files.com/60baa488e09924cdb6bb75a2/62cc8004506aea6e37ced926_whale.png",
    link: "https://www.whalesync.com/",
    img: "https://cdn.prod.website-files.com/61789b489343c8242282a0ae/64575964c9156f96c808bc60_2V2kmWQWmp65Bqb8WV7czlJWhi-dG2XJhyYnRYfsLRM.jpeg",
  },

  {
    title: "Ortus",
    likes: 9,
    logo: "https://cdn.prod.website-files.com/62c2fea083ed294ce9b01ebf/62c2fea083ed2942f8b01f23_Ortus-Wordmark-RGB-Small.svg",
    link: "https://www.ortustalent.com/",
    img: "https://cdn.prod.website-files.com/61789b489343c8242282a0ae/6457596cd34fede98ba440f5_TEAi6LLtPmIJcA9cMgYLkN3zuanRsXIkvUmy47nl_Yo.jpeg",
  },
  {
    title: "Timely",
    likes: 24,
    logo: "https://cdn.prod.website-files.com/637f533d357967a5820f3f25/64ef4834681fdafd6f90c8ea_logo-color.svg",
    link: "https://timelyapp.com/",
    img: "https://cdn.prod.website-files.com/61789b489343c8242282a0ae/6457594610d2b15afbfc8db0_Y5qsb9Dq80PzNpIV5ROReHKlyI3Na8HlW4QPxIkqiT0.jpeg",
  },

  {
    title: "Skin Co",
    likes: 19,
    logo: "https://assets-global.website-files.com/620a9582f3209f0403dd0cd0/620a9582f3209f7b60dd0d0a_Template%20Brand%20Logo.svg",
    link: "https://skincotemplate.webflow.io/",
    img: "https://cdn.prod.website-files.com/61789b489343c8242282a0ae/64575988330e4c618ce64b1e_zzDtk-aKIMGVtKngG76iftHVoiAsVeG8aWAr3EN7Eqc.png",
  },
  {
    title: "Bulpen",
    likes: 9,
    logo: "https://cdn.prod.website-files.com/62f2b0ff5631b62c6b212293/62f2feb513f4714e4fc4915c_Bullpen-RGB-p-500.png",
    link: "https://www.bullpenre.com/",
    img: "https://cdn.prod.website-files.com/61789b489343c8242282a0ae/64575956330e4c362ce63af4_OyqWa48neDLd0Sdha5bZ-Ap3V4StO5dX47RfWR3eIZM.jpeg",
  },
  {
    title: "Pickles",
    likes: 14,
    logo: "https://assets-global.website-files.com/642acbea6a68acdf9a6c5278/642ad3c7cded8b56f07d1e62_Layer%201.webp",
    link: "https://pickles.co/",
    img: "https://cdn.prod.website-files.com/61789b489343c8242282a0ae/645df5592addaaa21143970e_2FErZl3cIqMckfycVwGyq3aOMAZC3iNTKMpBzXeT6MU.jpeg",
  },
  {
    title: "Pond Foundation",
    likes: 8,
    logo: "https://cdn.prod.website-files.com/63e1350ab447818409526026/63e1350ab44781f512526066_site-logo-full.svg",
    link: "https://www.pond.foundation/",
    img: "https://cdn.prod.website-files.com/61789b489343c8242282a0ae/645df5427ab6a77471dfa8bd_a_ssQ2oIhmkiFozthbrfLYT-cMmSIpjwlMQkF7fDtO8.jpeg",
  },
];

export const RecentWork = () => {
  return (
    <div className="w-full p-5">
      <div className="w-full bg-gray-100 rounded-[24px] ">
        <div className="container py-20">
          <BlurFade delay={0.25} inView>
            <div className="flex flex-col items-center ">
              <h2 className="text-5xl lg:text-7xl max-w-xl font-semibold text-center">
                Recent work
              </h2>
              <h3 className="my-5 text-muted-foreground">
                Get to know our work.
              </h3>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sitesData.map((item, index) => (
              <BlurFade delay={index * 0.04} inView>
                <div
                  className="p-4 bg-white rounded-xl flex flex-col gap-6"
                  key={index}
                >
                  <img
                    src={item.img}
                    alt="website project img"
                    className="rounded-xl"
                    loading="lazy"
                  />

                  <div className="flex items-center justify-between ">
                    <h6 className="text-lg font-semibold">{item.title}</h6>
                    <div className="flex items-center gap-1 text-sm text-red-500">
                      <FaHeart />
                      <span>{item.likes}</span>
                    </div>
                  </div>

                  <img
                    src={item.logo}
                    className="w-[8rem] aspect-1/2"
                    alt="Company Logo"
                    loading="lazy"
                  />

                  <div className="flex items-center gap-4">
                    <a href={item.link} className="flex-1 " target="_blank">
                      <Button
                        variant={"outline"}
                        size={"lg"}
                        className="w-full py-6 text-md"
                        aria-label="Visit live site"
                      >
                        Visit live site
                      </Button>
                    </a>
                    <Button
                      variant={"outline"}
                      className="px-4 py-6"
                      aria-label="Like project"
                    >
                      <FaRegHeart size={22} />
                    </Button>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
