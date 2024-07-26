import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TiArrowRight, TiArrowLeft } from "react-icons/ti";
import { SwipPage } from "./Welcome";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import BlurFade from "@/components/magicui/blur-fade";

interface RadioGroupsProps {
  selectedValue: string | null;
  onChange: (value: string) => void;
}

const RadioGroups: React.FC<RadioGroupsProps> = ({
  selectedValue,
  onChange,
}) => {
  return (
    <RadioGroup
      value={selectedValue || ""}
      onValueChange={onChange}
      className="gap-5"
    >
      {["Website", "Landing page", "Web shop", "Web app"].map(
        (value, index) => (
          <div
            key={index}
            className={`flex items-center space-x-2 ${
              selectedValue === value
                ? "bg-black text-white"
                : "bg-white text-black"
            } p-5 flex items-center gap-5 border w-full rounded-xl transition-all duration-200`}
          >
            <RadioGroupItem
              value={value}
              id={`r${index + 1}`}
              className="bg-white w-6 h-6"
            />
            <Label htmlFor={`r${index + 1}`}>
              {value.charAt(0).toUpperCase() +
                value.slice(1).replace(/([A-Z])/g, " $1")}
            </Label>
          </div>
        )
      )}
    </RadioGroup>
  );
};

export const ProjectType: React.FC<SwipPage> = ({ onNext, onBack }) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  useEffect(() => {
    const userDataKey = "userData";
    const storedData = localStorage.getItem(userDataKey);
    if (storedData) {
      const userData = JSON.parse(storedData);
      if (userData.projectType) {
        setSelectedValue(userData.projectType);
      }
    }
  }, []);

  const handleProjectTypeChange = (value: string) => {
    setSelectedValue(value);
    const userDataKey = "userData";
    const storedData = localStorage.getItem(userDataKey);
    const userData = storedData ? JSON.parse(storedData) : {};
    userData.projectType = value;
    localStorage.setItem(userDataKey, JSON.stringify(userData));
  };

  return (
    <BlurFade delay={0.25} inView>
      <div className="flex flex-col gap-5 md:max-w-[450px] w-full m-5">
        <div>
          <h1 className="text-4xl font-semibold">How can we help?</h1>
          <p>Please select one of the following options</p>
        </div>
        <div>
          <RadioGroups
            selectedValue={selectedValue}
            onChange={handleProjectTypeChange}
          />
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
            disabled={!selectedValue}
          >
            <span>Next</span> <TiArrowRight size={22} />
          </Button>
        </div>
      </div>
    </BlurFade>
  );
};
