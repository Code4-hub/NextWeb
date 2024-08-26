import { motion } from "framer-motion"


const ContactU = () => {
    return (
      <div>
       <section className="bg-white dark:bg-gray-900 flex justify-between">
      <div className="m-[40px] flex items-center justify-around">
        <div  className="text-xl">
          <h2 className="p-3"><span className="font-bold">Email</span> : <a href="gmail">automatordev.soft@gmail.com</a></h2>
          <h2 className="p-3"><span className="font-bold">Phone</span> : +212 679190677</h2>
        </div>
        </div>
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <motion.h2 
      initial={{y : -80, opacity : 0}}
      whileInView={{y : 0, opacity : 1}}
      transition={{duration : 0.8}}
      viewport={{once : true}}
      className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
        Contact Us
      </motion.h2>
      <motion.p 
      initial={{y : -80, opacity : 0}}
      whileInView={{y : 0, opacity : 1}}
      transition={{duration : 0.9}}
      viewport={{once : true}}
      className="mb-8 lg:mb-16  text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</motion.p>
      <form action="#" className="space-y-8">
          <motion.div
           initial={{y : -90, opacity : 0}}
           whileInView={{y : 0, opacity : 1}}
           transition={{duration : 0.8}}>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
          </motion.div>
          <motion.div
          initial={{y : -100, opacity : 0}}
          whileInView={{y : 0, opacity : 1}}
          transition={{duration : 1.2}}
          >
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </motion.div>
          <motion.div className="sm:col-span-2"
          initial={{y : -120, opacity : 0}}
          whileInView={{y : 0, opacity : 1}}
          transition={{duration : 1.5}}
          >
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </motion.div>
          <motion.button
          initial={{y : -130, opacity : 0}}
          whileInView={{y : 0, opacity : 1}}
          transition={{duration : 1.9}}
        className="rounded-full hidden md:block bg-black p-3 text-white font-semibold"
      >
        Send
      </motion.button>
      </form>
  </div>
</section>
      </div>
    );
  };

export default ContactU