import React from "react";
import { componentsData } from "./pages/ComponentsData";

const Blog: React.FC = () => {
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
          {componentsData.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm flex flex-col"
            >
              <img
                alt={item.cardTitle}
                src={item.img}
                className="h-56 w-full object-cover"
              />
              <div className="p-4 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <a href={item.link}>
                    <h3 className="text-lg font-medium text-gray-900">
                      {item.cardTitle}
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
