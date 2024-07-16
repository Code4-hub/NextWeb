import React from "react";
import { Separator } from "@/components/ui/separator";
import { FaApple, FaWindows } from 'react-icons/fa';
import { SiXiaomi, SiSamsung } from 'react-icons/si';
import { MdAndroid } from 'react-icons/md';
const Home = () => {
  return (
    
    <div className="h-screen flex justify-center items-center shadow-transparent h-5/6">
      <header ><div>

<h1 className="font-bold text-center text-7xl mb-6">Interactive product demos for small marketing teams</h1>
<h5 className="text-center text-2xl ">More people convert when they experience your product. Craft and embed guided tours for your website, get expert support from your very first demo.</h5>
<div className="grid grid-cols-2 gap-0 mt-10"><button className="w-auto shadow-sm bg-black  text-white rounded-2xl  ">see it in action</button>
<button className=  "bg-black shadow-sm text-white border rounded-2xl">get started for free</button></div>

<p className=" text-center font-semibold mt-7">trusted by marketers at</p>
<div className="flex justify-center mt-10 space-x-7 ">
            <FaApple
              size={56}
              className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-black"
            />
            <FaWindows
              size={56}
              className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-black"
            />
            <SiSamsung
              size={56}
              className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-black"
            />
            <SiXiaomi
              size={56}
              className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-black"
            />
            </div>
<div className="flex justify-center">
  <img src="images/computer-820281_640.jpg" alt="jj" />
</div>


</div>
</header>
<br />
   <div className="block">aloo</div>
   <div>aloo</div>
   <div>aloo</div>
   <div>aloo</div>
  
    </div>
   
  );
};

export default Home;
