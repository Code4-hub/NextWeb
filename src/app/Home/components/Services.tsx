import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";

type Data = {
  title: string;
  subTitle: string;
  description: string;
  img: string;
};
const content: Data[] = [
  {
    subTitle: "CUSTOM DESIGN",
    title: "A website you can call your own",
    description:
      "Our team custom builds and designs every site we create. Your business is unique, so your website should be too.",
    img: "https://assets-global.website-files.com/62c435401c8f7261df7dac30/62c6c0de9909cbb7bc80092a_Frame%20144.jpg",
  },
  {
    subTitle: "RELIABLE",
    title: "We don’t disappear after the work is done",
    description:
      "Web design often faces a commitment problem. You won’t find us trying to sneak out the moment the project is finished.",
    img: "https://assets-global.website-files.com/62c435401c8f7261df7dac30/62c6c0dfc2bb300a564d4101_Frame%20146.jpg",
  },
  {
    subTitle: "MY GUARANTEE",
    title: "Try us out, risk-free!",
    description:
      "If you're not happy with the design after the first draft, we will refund your deposit, no questions asked.",
    img: "https://assets-global.website-files.com/62c435401c8f7261df7dac30/62c6c0de3ffbaf5e894f8d06_Frame%20147.jpg",
  },
];

export const Services = () => {
  return (
    <section className="w-full bg-black text-white py-5">
      <div className="container space-y-5 pb-10">
        <BlurFade delay={0.25} inView>
          <div className="text-center h-20 my-10">
            <h4 className="font-semibold text-white md:text-sm  text-xs   ">
              WHY US
            </h4>
            <h3 className="md:text-4xl text-3xl font-bold text-white">
              Results-driven design, with a personal touch
            </h3>
          </div>
        </BlurFade>
        {content.map((item, key) => (
          <BlurFade delay={0.25} inView key={item.title}>
            <div className="flex lg:items-center flex-col lg:flex-row gap-5 lg:h-[80vh]">
              <div className="lg:w-[50%]">
                <h4 className="font-semibold text-white md:text-sm  text-xs  mb-5">
                  {item.subTitle}
                </h4>
                <h3 className="md:text-4xl text-3xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-5 md:text-xl  text-lg text-gray-300">
                  {item.description}
                </p>
                {key == 2 && (
                  <Button className="mt-8 bg-white text-black py-6 px-10 rounded-full text-lg">
                    Get started
                  </Button>
                )}
              </div>
              <BlurFade
                delay={0.35}
                inView
                className="lg:w-[50%] lg:mt-0 mt-5 aspect-square lg:aspect-auto"
              >
                <img src={item.img} />
              </BlurFade>
            </div>
          </BlurFade>
        ))}

        <div className="flex flex-col items-center gap-7">
          <img
            src="https://assets-global.website-files.com/63b78919476f228ce0b0bdf6/63dbf7877692382fc4e56c6a_Logo.png"
            className="w-40"
          />
          <h5 className="text-4xl text-center max-w-4xl">
            "I really like the different style of layouts NextWeb has used with
            our content, yet still within our guidelines!"
          </h5>

          <div className="flex items-center gap-4">
            <img
              src="https://www.speechify.ai/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fspeechify-ai-api-prod-centralized-voice-list%2Fbase%2Favatars%2Fen-US-Henry-Speechify-gpttts.webp&w=96&q=75"
              alt="profile"
              className="size-12"
            />
            <div>
              <h6>Gemma Fishel</h6>
              <p className="text-xs text-muted-foreground">
                Commercial Manager
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
