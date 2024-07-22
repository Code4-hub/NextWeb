import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import { Progress } from "@/components/ui/progress";
import { Navbar } from "../pageComponents/Navbar";
import { Welcome } from "./components/Welcome"; // Adjust import for Welcome
import { ProjectType } from "./components/ProjectType"; // Adjust import for ProjectType
import React, { ReactElement, useEffect, useState } from "react";
import { ProjectDescribe } from "./components/ProjectDescrib";
import { ProjectExist } from "./components/ProjectExist";
import { Budget } from "./components/Budget";
import { PersonalInfo } from "./components/PersonalInfo";
import { Submited } from "./components/Submited";
type PageChild = ReactElement;

const ContactUs: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const handleNext = () => {
    if (currentPage < pageComponents.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const pageComponents: PageChild[] = [
    <Welcome onNext={handleNext} />,
    <ProjectType onNext={handleNext} onBack={handlePrevious} />,
    <ProjectDescribe onNext={handleNext} onBack={handlePrevious} />,
    <ProjectExist onNext={handleNext} onBack={handlePrevious} />,
    <Budget onNext={handleNext} onBack={handlePrevious} />,
    <PersonalInfo onNext={handleNext} onBack={handlePrevious} />,
    <Submited />,
  ];

  const handleProgress = () => {
    setProgress(((currentPage + 1) / pageComponents.length) * 100);
  };

  useEffect(() => {
    handleProgress();
  }, [currentPage]);

  return (
    <div className="h-screen w-screen relative flex flex-col">
      <div className="container">
        <Navbar />
      </div>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        )}
      />
      <Progress value={progress} className="w-full rounded-none" />
      <div className="flex-1 flex items-center justify-center">
        {pageComponents[currentPage]}
      </div>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_top_left,white,transparent,transparent)]"
        )}
      />
    </div>
  );
};

export default ContactUs;
