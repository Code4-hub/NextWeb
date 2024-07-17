interface BlogData {
  id: number;
  img: string;
  title: string;
  desc: string;
  link: string;
}

const blogData : BlogData[] = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "The Future of Web Development",
    desc: "Explore the latest trends and technologies shaping the future of web development in 2024 and beyond.",
    link: "#",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Top 10 UX/UI Design Principles",
    desc: "Learn the top 10 UX/UI design principles that can help you create user-friendly and visually appealing websites.",
    link: "#",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "How to Optimize Your Website for SEO",
    desc: "Discover effective strategies to optimize your website for search engines and improve your online visibility.",
    link: "#",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "The Importance of Mobile-First Design",
    desc: "Understand why mobile-first design is crucial in today's digital landscape and how to implement it effectively.",
    link: "#",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Building a Scalable Web Application",
    desc: "Learn best practices for building scalable web applications that can handle increasing user demands.",
    link: "#",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Introduction to Progressive Web Apps",
    desc: "Get started with Progressive Web Apps (PWAs) and understand how they can enhance user experience.",
    link: "#",
  },
];

const Blog = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-6xl font-bold sm:text-4xl mt-10">
            Kickstart your marketing
          </h2>

          <p className="mt-4 text-gray-500">
            Explore our latest blog posts for insights and tips on web
            development, design, and more.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogData.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm flex flex-col"
            >
              <img
                alt={item.title}
                src={item.img}
                className="h-56 w-full object-cover"
              />

              <div className="p-4 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <a href={item.link}>
                    <h3 className="text-lg font-medium text-gray-900">
                      {item.title}
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    {item.desc}
                  </p>
                </div>

                <a
                  href={item.link}
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-500"
                >
                  Find out more
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
