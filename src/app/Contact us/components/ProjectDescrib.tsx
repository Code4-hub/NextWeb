import React, { useEffect, useState } from "react";
import { SwipPage } from "./Welcome";
import { Button } from "@/components/ui/button";
import { TiArrowRight, TiArrowLeft } from "react-icons/ti";
import { Textarea } from "@/components/ui/textarea";

export const ProjectDescribe: React.FC<SwipPage> = ({ onNext, onBack }) => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const userDataKey = "userData";
    const storedData = localStorage.getItem(userDataKey);
    if (storedData) {
      const userData = JSON.parse(storedData);
      if (userData.projectDescription) {
        setMessage(userData.projectDescription);
      }
    }
  }, []);

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newMessage = event.target.value;
    setMessage(newMessage);

    const userDataKey = "userData";
    const storedData = localStorage.getItem(userDataKey);
    const userData = storedData ? JSON.parse(storedData) : {};
    userData.projectDescription = newMessage;
    localStorage.setItem(userDataKey, JSON.stringify(userData));
  };

  return (
    <div className="flex flex-col gap-5 md:max-w-[450px] w-full m-5">
      <div>
        <h1 className="text-4xl font-semibold mb-1">
          Please describe the Project
        </h1>
        <p>Please write about 1-3 sentences about the project</p>
      </div>

      <div className="grid w-full gap-1.5 my-6">
        <Textarea
          placeholder="Type your message here."
          id="message-2"
          className="min-h-[120px] resize-none"
          value={message}
          onChange={handleTextareaChange}
        />
        <p className="text-sm text-muted-foreground">
          Your message will help our sales team.
        </p>
      </div>
      <div className="flex justify-end gap-5">
        <Button
          className="px-6 py-6 rounded-full flex items-center gap-1 transition-all duration-200 ease-in-out hover:transform hover:scale-[0.9]"
          onClick={onBack}
          variant={"secondary"}
        >
          <TiArrowLeft size={22} />
          <span>Back</span>
        </Button>
        <Button
          className="px-6 py-6 rounded-full flex items-center gap-1 transition-all duration-200 ease-in-out hover:transform hover:scale-[0.9]"
          onClick={onNext}
          disabled={message.length === 0}
        >
          <span>Next</span> <TiArrowRight size={22} />
        </Button>
      </div>
    </div>
  );
};
