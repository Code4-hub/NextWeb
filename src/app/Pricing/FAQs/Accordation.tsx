import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Accordions() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl">
          What does "Full service" support mean?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground text-md">
          Full service support includes personalized assistance with all aspects
          of your web development project, from initial setup to ongoing
          maintenance. This means our team will work closely with you to
          understand your requirements, design and develop your website,
          integrate necessary functionalities, and provide ongoing support to
          ensure your website remains up-to-date and fully operational. Our
          support covers troubleshooting, regular updates, performance
          optimization, and any additional changes you might need as your
          business evolves.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-xl">
          Do you charge per user?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground text-md">
          No, our pricing is based on the features and services provided, not
          the number of users. Our plans are designed to cater to businesses of
          different sizes and needs. Whether you have a small team or a large
          organization, you pay a flat rate based on the plan you choose. This
          ensures that you can scale your team and usage without worrying about
          additional costs.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-xl text-start">
          What's the difference between the "Professional" and "Enterprise"
          plans?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground text-md">
          The Professional Plan includes advanced features suitable for growing
          businesses. It offers all the benefits of the Basic Plan plus
          e-commerce integration, advanced SEO services, weekly updates,
          priority email support, and analytics setup. This plan is ideal for
          businesses looking to expand their online presence and improve their
          website’s performance.
          <br />
          <br />
          The Enterprise Plan, on the other hand, is designed for large
          businesses and enterprises that require custom solutions and dedicated
          support. It includes all the features of the Professional Plan plus
          custom web applications, API integration, a dedicated account manager,
          24/7 support, and personalized training. This plan provides a
          comprehensive solution for businesses with complex needs and a high
          volume of traffic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-xl">
          Can I switch plans later?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground text-md">
          Yes, you can switch plans at any time. If you find that your current
          plan no longer meets your needs, you can upgrade or downgrade to a
          different plan. The changes will take effect immediately, and any
          adjustments in billing will be prorated accordingly.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-xl">
          What is included in the free trial?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground text-md">
          Our free trial gives you access to all the features of the Basic Plan
          with no restrictions. This allows you to explore our services, build
          your website, and evaluate our platform before making a commitment. No
          credit card is required for the free trial, and you can cancel at any
          time without any charges.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="text-xl">
          How does the annual billing discount work?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground text-md">
          By choosing annual billing, you can save 20% compared to the monthly
          billing rate. For example, the Basic Plan costs $99 per month or $950
          per year, which breaks down to approximately $79 per month when billed
          annually. This discount is a great way to reduce your costs if you’re
          planning to use our services for the long term.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger className="text-xl">
          What payment methods do you accept?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground text-md">
          We accept all major credit cards, including Visa, MasterCard, American
          Express, and Discover. Additionally, we can accommodate PayPal
          payments and bank transfers for annual plans. If you have specific
          payment needs, please contact our support team to discuss your
          options.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger className="text-xl">
          How secure is my data?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground text-md">
          We take data security very seriously. Our platform uses
          industry-standard encryption and security measures to protect your
          data. We regularly update our security protocols to address new
          threats and ensure that your information remains safe. Additionally,
          we conduct regular security audits and have a dedicated team to
          monitor and respond to any security issues.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger className="text-xl">
          Do you offer custom solutions?
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground text-md">
          Yes, we offer custom solutions for businesses with unique
          requirements. Our team of experts can work with you to develop custom
          web applications, integrate third-party APIs, and provide tailored
          support and training. If you need a solution that isn’t covered by our
          standard plans, please get in touch with us to discuss your needs.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
