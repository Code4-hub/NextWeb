import { Badge } from "@/components/ui/badge";

const WhatBusinessToStart = () => {
  return (
    <div className="container">
      <div className="max-w-[900px] m-auto space-y-7">
        <div className="my-5">
          <h1 className="text-4xl font-extrabold">
            What Business to Start: Exploring Profitable Business Ideas
          </h1>
        </div>

        <div className="my-5 flex justify-between items-center">
          <div>
            <Badge
              variant={"outline"}
              className="rounded-full text-muted-foreground py-1"
            >
              #Business
            </Badge>{" "}
            <Badge
              variant={"outline"}
              className="rounded-full text-muted-foreground py-1"
            >
              #Entrepreneurship
            </Badge>{" "}
            <Badge
              variant={"outline"}
              className="rounded-full text-muted-foreground py-1"
            >
              #Startups
            </Badge>
          </div>

          <div className="text-xs flex items-center gap-2">
            <p className="text-gray-500 dark:text-neutral-500">
              August 03, 2024
            </p>
            <span className="text-gray-500 dark:text-neutral-500">·</span>
            <p>
              <span className="text-gray-500 dark:text-neutral-500">
                Written by
              </span>
              <span> Jordan Lee</span>
            </p>
          </div>
        </div>

        <div className="mt-5">
          <img
            src="https://source.unsplash.com/random/800x400?business"
            alt="Business Ideas"
            className="rounded-xl border dark:border-none w-full"
          />
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Introduction</h2>
            <p className="font-light">
              Starting a business can be a rewarding and profitable endeavor,
              but choosing the right business idea is crucial. This blog
              explores various business ideas across different industries,
              highlighting the potential for profitability and growth. Whether
              you're looking to start a small side hustle or launch a full-scale
              enterprise, there's a business idea for you.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">E-Commerce Store</h2>
            <p className="font-light">
              <strong>Overview:</strong> With the rise of online shopping,
              starting an e-commerce store can be highly profitable. You can
              sell products directly to consumers through your own website or
              platforms like Amazon and eBay.
            </p>
            <p className="font-light">
              <strong>Why It's Great:</strong> Low startup costs, flexibility,
              and the ability to reach a global market make e-commerce an
              attractive option.
            </p>
            <p className="font-light">
              <strong>Ideal For:</strong> Entrepreneurs with a product idea or
              access to wholesale goods.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Freelance Services</h2>
            <p className="font-light">
              <strong>Overview:</strong> Offering freelance services such as
              writing, graphic design, web development, or digital marketing can
              be a lucrative business. Platforms like Upwork, Fiverr, and
              Freelancer provide opportunities to find clients.
            </p>
            <p className="font-light">
              <strong>Why It's Great:</strong> Minimal startup costs and the
              ability to work from anywhere make freelancing appealing.
            </p>
            <p className="font-light">
              <strong>Ideal For:</strong> Skilled professionals looking to
              leverage their expertise and work independently.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Online Courses and Coaching</h2>
            <p className="font-light">
              <strong>Overview:</strong> If you have expertise in a particular
              field, you can create online courses or offer coaching services.
              Platforms like Teachable, Udemy, and Coursera allow you to create
              and sell courses.
            </p>
            <p className="font-light">
              <strong>Why It's Great:</strong> High profit margins and the
              ability to reach a wide audience make this an attractive option.
            </p>
            <p className="font-light">
              <strong>Ideal For:</strong> Experts in a field who are passionate
              about teaching and helping others succeed.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Subscription Box Service</h2>
            <p className="font-light">
              <strong>Overview:</strong> Subscription box services, which
              deliver curated products to customers on a regular basis, have
              grown in popularity. You can create a subscription box for niche
              markets such as beauty, fitness, or gourmet foods.
            </p>
            <p className="font-light">
              <strong>Why It's Great:</strong> Recurring revenue and customer
              loyalty are significant advantages.
            </p>
            <p className="font-light">
              <strong>Ideal For:</strong> Entrepreneurs with a passion for
              curation and a specific niche market in mind.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Mobile App Development</h2>
            <p className="font-light">
              <strong>Overview:</strong> With the increasing reliance on mobile
              devices, developing mobile apps can be a profitable business. You
              can create apps for entertainment, productivity, or solving
              specific problems.
            </p>
            <p className="font-light">
              <strong>Why It's Great:</strong> High demand for innovative apps
              and the potential for significant revenue through app stores.
            </p>
            <p className="font-light">
              <strong>Ideal For:</strong> Developers with coding skills and a
              creative mindset.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Content Creation and Blogging
            </h2>
            <p className="font-light">
              <strong>Overview:</strong> Starting a blog or creating content for
              platforms like YouTube, Instagram, or TikTok can be a lucrative
              business. You can monetize your content through ads, sponsorships,
              and affiliate marketing.
            </p>
            <p className="font-light">
              <strong>Why It's Great:</strong> Low startup costs and the
              potential to build a large audience and brand.
            </p>
            <p className="font-light">
              <strong>Ideal For:</strong> Creative individuals who enjoy
              writing, filming, or creating digital content.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Home-Based Food Business</h2>
            <p className="font-light">
              <strong>Overview:</strong> If you have culinary skills, starting a
              home-based food business can be rewarding. You can sell baked
              goods, homemade meals, or specialty foods at local markets or
              online.
            </p>
            <p className="font-light">
              <strong>Why It's Great:</strong> Flexibility and the ability to
              turn a passion for cooking into a profitable business.
            </p>
            <p className="font-light">
              <strong>Ideal For:</strong> Individuals with culinary skills and a
              passion for food.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Pet Services</h2>
            <p className="font-light">
              <strong>Overview:</strong> The pet industry continues to grow, and
              offering services such as pet grooming, pet sitting, or dog
              walking can be a profitable business.
            </p>
            <p className="font-light">
              <strong>Why It's Great:</strong> High demand for pet services and
              the opportunity to work with animals.
            </p>
            <p className="font-light">
              <strong>Ideal For:</strong> Animal lovers who want to turn their
              passion for pets into a business.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Eco-Friendly Products</h2>
            <p className="font-light">
              <strong>Overview:</strong> With the increasing focus on
              sustainability, starting a business that sells eco-friendly
              products can be both profitable and impactful. Products can range
              from reusable household items to sustainable fashion.
            </p>
            <p className="font-light">
              <strong>Why It's Great:</strong> Growing market for
              environmentally conscious consumers and the potential to make a
              positive impact.
            </p>
            <p className="font-light">
              <strong>Ideal For:</strong> Entrepreneurs passionate about
              sustainability and environmental conservation.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Conclusion</h2>
            <p className="font-light">
              Choosing the right business to start depends on your interests,
              skills, and market demand. Whether you opt for an e-commerce
              store, freelance services, online courses, or any other idea
              mentioned, thorough research and planning are essential for
              success. By exploring these business ideas, you can find the one
              that aligns with your passion and goals, setting you on the path
              to entrepreneurial success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatBusinessToStart;

