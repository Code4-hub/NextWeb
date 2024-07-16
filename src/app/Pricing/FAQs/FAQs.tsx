import React from "react";
import { Accordions } from "./Accordation";
import { Button } from "@/components/ui/button";

export const FAQs = () => {
  return (
    <div className="my-40 max-w-[800px] m-auto">
      <div className="flex flex-col gap-4 mb-20">
        <h4 className="text-md font-bold">Support</h4>
        <h3 className="text-4xl font-bold">FAQs</h3>
        <p className="text-lg text-muted-foreground">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please chat to our team.
        </p>

        <div>
          <Button size={"lg"} className="py-6 rounded-xl">
            Get in touch
          </Button>
        </div>
      </div>

      <Accordions />
    </div>
  );
};
