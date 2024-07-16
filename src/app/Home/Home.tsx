import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <div className="h-screen flex flex-col gap-5 justify-center items-center">
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <div>
        <Button variant={"default"} size={"lg"}>
          Get started
        </Button>
        <Button variant={"outline"} size={"lg"}>
          Learn more
        </Button>
      </div>
    </div>
  );
};

export default Home;
