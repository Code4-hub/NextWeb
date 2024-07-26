import React, { useEffect, useState } from "react";
import { SwipPage } from "./Welcome";
import { Button } from "@/components/ui/button";
import { TiArrowLeft } from "react-icons/ti";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const PersonalInfo: React.FC<SwipPage> = ({ onNext, onBack }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");

  useEffect(() => {
    const userDataKey = "userData";
    const storedData = localStorage.getItem(userDataKey);
    if (storedData) {
      const userData = JSON.parse(storedData);
      if (userData.firstName) setFirstName(userData.firstName);
      if (userData.lastName) setLastName(userData.lastName);
      if (userData.email) setEmail(userData.email);
      if (userData.company) setCompany(userData.company);
    }
  }, []);

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>, key: string) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setter(value);

      const userDataKey = "userData";
      const storedData = localStorage.getItem(userDataKey);
      const userData = storedData ? JSON.parse(storedData) : {};
      userData[key] = value;
      localStorage.setItem(userDataKey, JSON.stringify(userData));
    };

  const isFormValid = () => {
    return (
      firstName.length > 0 &&
      lastName.length > 0 &&
      email.length > 0 &&
      company.length > 0
    );
  };

  return (
    <div className="flex flex-col gap-5 md:max-w-[450px] w-full m-5">
      <div>
        <h1 className="text-4xl font-semibold mb-1">Get your quote!</h1>
        <p>To receive your quote, please enter your contact details</p>
      </div>

      <div className="grid w-full gap-6 my-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            placeholder="Enter your first name"
            id="firstName"
            className="py-5"
            value={firstName}
            onChange={handleInputChange(setFirstName, "firstName")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            placeholder="Enter your last name"
            id="lastName"
            className="py-5"
            value={lastName}
            onChange={handleInputChange(setLastName, "lastName")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            placeholder="Enter your email"
            id="email"
            className="py-5"
            value={email}
            onChange={handleInputChange(setEmail, "email")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            placeholder="Enter your company name"
            id="company"
            className="py-5"
            value={company}
            onChange={handleInputChange(setCompany, "company")}
          />
        </div>
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
          disabled={!isFormValid()}
        >
          <span>Submit</span>
        </Button>
      </div>
    </div>
  );
};
