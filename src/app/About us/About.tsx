import NumberTicker from "@/components/magicui/number-ticker";
import BlurFade from "@/components/magicui/blur-fade";

const About = () => {
  return (
    <>
      <BlurFade delay={0.25} inView>
        <section className="py-14 lg:py-24 relative z-0 ">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
            <BlurFade delay={0.35} inView>
              <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl md:leading-normal">
                Innovate Your Web Presence with{" "}
                <span
                  style={{
                    color: "white",
                    fontSize: "50px",
                    WebkitTextStrokeWidth: "1px",
                    WebkitTextStrokeColor: "black",
                  }}
                >
                  NextWeb
                </span>
              </h1>
            </BlurFade>

            <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
              Discover a smarter way to build and manage your online presence
              with NextWeb's innovative solutions.
            </p>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={0.25} inView>
        <section className="py-14 lg:py-24 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
              <BlurFade delay={0.3} inView>
                <div className="img-box">
                  <img
                    src="https://downloader.la/temp/[Downloader.la]-6696a068dc97d.jpg"
                    alt="About Us"
                    className="max-lg:mx-auto rounded-xl"
                  />
                </div>
              </BlurFade>
              <div className="lg:pl-[100px] flex items-center">
                <div className="data w-full">
                  <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                    About Us
                  </h2>
                  <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                    At NextWeb, we are driven by a passion for delivering
                    seamless user experiences. Our mission is to empower
                    businesses with cutting-edge web development solutions that
                    drive success and growth. We provide a comprehensive toolkit
                    to help you build intuitive, beautiful interfaces that
                    resonate with users at every interaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={0.3} inView>
        <section className="py-14 lg:py-24 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
              <div className="lg:pr-24 flex items-center">
                <BlurFade delay={0.3} inView>
                  <div className="data w-full">
                    <img
                      src="https://downloader.la/temp/[Downloader.la]-6696a25629c1b.jpg"
                      alt="About Us"
                      className="block lg:hidden mb-9 mx-auto rounded-xl"
                    />
                    <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                      We are Innovators Since 2010
                    </h2>
                    <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                      NextWeb is more than just a web development agency; it's a
                      philosophy. We prioritize accessibility, scalability, and
                      usability in every project we undertake. From the smallest
                      details to the most complex layouts, every element is
                      crafted to enhance functionality and elevate user
                      satisfaction.
                    </p>
                  </div>
                </BlurFade>
              </div>
              <div className="img-box ">
                <img
                  src="https://downloader.la/temp/[Downloader.la]-6696a25629c1b.jpg"
                  alt="About Us"
                  className="hidden lg:block max-lg:mx-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </BlurFade>


      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <BlurFade delay={0.3} inView>
              <div className="img-box">
                <img
                  src="https://downloader.la/temp/[Downloader.la]-6696a18d5f0ff.jpg"
                  alt="Our Vision and Mission"
                  className="max-lg:mx-auto rounded-xl"
                />
              </div>
            </BlurFade>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                  Our Vision and Mission
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Our vision at NextWeb is to be the leading provider of
                  innovative web development solutions worldwide. Our mission is
                  to empower businesses to achieve their digital goals through
                  cutting-edge technology, creative design, and unparalleled
                  user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
            Our results in numbers
          </h2>
          <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex lg:flex-col gap-5 items-center">
                <div className="font-manrope text-5xl font-bold flex gap-1 tabular-nums lg:w-auto w-[140px] ">
                  <NumberTicker value={240} className="" />
                  <div>%</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Company growth
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    NextWeb's remarkable growth journey as we continually
                    innovate and drive towards new heights of success.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex lg:flex-col gap-5 items-center">
                <div className="font-manrope text-5xl font-bold flex gap-1 tabular-numslg:w-auto w-[140px]">
                  <NumberTicker value={123} />
                  <div>+</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Talented team members
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    Our talented team members are the powerhouse of NextWeb and
                    the pillars of our success.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex lg:flex-col gap-5 items-center">
                <div className="font-manrope text-5xl font-bold flex gap-1 tabular-nums lg:w-auto w-[140px]">
                  <NumberTicker value={145} />
                  <div>+</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Projects Completed
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    We have successfully completed over 145 projects worldwide
                    and continue to take on new challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
