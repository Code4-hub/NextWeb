import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { TiArrowRight } from "react-icons/ti";

export interface SwipPage {
  onNext: () => void;
  onBack?: () => void;
}

const initializeUserData = () => {
  const userDataKey = "userData";
  const storedData = localStorage.getItem(userDataKey);

  if (!storedData) {
    const initialData = {
      name: "",
      lastName: "",
      email: "",
      companyName: "",
      companyWebsite: "",
      projectType: "",
      projectDescription: "",
      budget: "",
    };
    localStorage.setItem(userDataKey, JSON.stringify(initialData));
  }
};

export const Welcome: React.FC<SwipPage> = ({ onNext }) => {
  useEffect(() => {
    initializeUserData();
  }, []);

  return (
    <div className="text-center flex flex-col gap-5">
      <h1 className="text-4xl font-semibold">Hi, There 👋</h1>
      <p>We're excited to help you with your project.</p>
      <div>
        <Button
          className="px-9 py-6 rounded-full flex items-center gap-2 transition-all duration-200 ease-in-out hover:transform hover:scale-[0.9] m-auto"
          onClick={onNext}
        >
          <span>Start</span> <TiArrowRight size={22} />
        </Button>
      </div>
    </div>
  );
};
