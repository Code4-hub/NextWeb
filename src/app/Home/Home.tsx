import React from 'react';
import { FaApple, FaWindows } from 'react-icons/fa';
import { SiXiaomi, SiSamsung } from 'react-icons/si';
import BlurFade from '@/components/magicui/blur-fade';
import { Separator } from "@/components/ui/separator";
import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FaCheck } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-10">
        <div className="text-center">
          <h1 className="font-bold text-7xl mb-3">
            Interactive product demos for small marketing teams
          </h1>
          <h5 className="text-2xl mb-10">
            More people convert when they experience your product. Craft and embed guided tours for your website, get expert support from your very first demo.
          </h5>
          <div className="flex justify-center gap-4 mb-6">
            <button onClick={() => navigate('/contact-us')} className="shadow-sm bg-black text-white rounded-2xl h-12 w-56">
              See it in Action
            </button>
            <button onClick={() => navigate('/contact-us')} className="bg-black shadow-sm text-white border rounded-2xl h-12 w-56">
              Get Started for Free
            </button>
          </div>
          <p className="font-semibold mb-5">Trusted by marketers at</p>
          <div className="flex justify-center gap-8 mb-10">
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
            <img src="images/computer-820281_640.jpg" alt="Computer" className="max-w-full h-auto" />
          </div>
        </div>
      </header>

      {/* BlurFade Section */}
      <div className="flex flex-row items-center space-x-6 py-10 justify-center h-96  ">
        <BlurFade delay={0.25} inView={true}>
          <div className="block bg-gray-200 p-4 rounded-lg shadow-lg w-96 h-82 mt-6"><h1 className='font-bold text-3xl'>More people convert when they experience your product
         </h1> Flagsmith embeds HowdyGo demos on their website to ensure prospects understand their product's value before signing up or booking a demo.
         <div className='flex flex-rows space-x-3 '>
         <div className='font-bold text-2xl'>1.7x
         More sign ups</div>
         <div className='font-bold text-2xl'>1.5x
         More activations</div>
         <div className='font-bold text-2xl'> 90%
         Demo engagement</div>
         </div>
         </div>
        </BlurFade>
        <BlurFade delay={0.25} inView={true}>
          <div className="block bg-gray-200 p-4 rounded-lg shadow-lg w-96 h-82 mt-6">
            <div className='flex justify-center'>
            <StarIcon style={{ color: yellow[500] }} />
          <StarIcon style={{ color: yellow[500] }} />
          <StarIcon style={{ color: yellow[500] }} />
          <StarIcon style={{ color: yellow[500] }} />
          <StarIcon style={{ color: yellow[500] }} />
            </div>
<div className='font-bold text-2xl'>"We have clear attribution and have been able to track results — demos are having tangible impact for us."</div>
<div className='h-8'></div>
<div className='flex flex-row space-x-5'><div className='font-bold text-sm'><AccountCircleIcon /> MR bilal
<h1>Co-founder of apple</h1></div>
<div className='bg-slate-100 h-14 w-1'></div>
<FaApple
              size={56}
             
            /></div>
</div>
        </BlurFade>
       
      </div>
      <Separator className="my-6" />
      <BlurFade delay={0.25} inView={true}>
        <div className='w-2/3 m-3'> <div className='text-blue-600/100 font-semibold mb-6'>Why small marketing teams choose us</div>
        <div className='font-bold text-3xl'>Hands on support from your very first demo</div>
        <p className='text-xl mt-4'>For small marketing teams, our approach saves time, gives you more confidence and gets you more MQLs.
        By choosing us, you won't be left alone, staring blankly at your screen trying to come up with a story for your demos. We (the founders) help you create and update your demos using the depth of knowledge we've acquired by making 1000s of demos and obsessively reviewing analytics data.</p>
        <div className='h-5'></div>
        <div className="flex justify-center gap-4 mb-6 mt-7">
            <button onClick={() => navigate('/contact-us')} className="shadow-sm bg-white text-black drop-shadow-2xl rounded-2xl h-12 w-56">
              Talk to Us
            </button>
            <button onClick={() => navigate('/contact-us')} className="bg-black shadow-sm text-white border rounded-2xl h-12 w-56">
              Get Started for Free
            </button>
          </div></div>
       
      </BlurFade>
      <Separator className="my-4" />
      <BlurFade delay={0.25} inView={true}>   <div className='text-center'>
<div className='text-blue-600/100 font-semibold mt-5'>How it works
</div>
<div className='font-bold text-3xl'>HTML interactive demos made easy</div>
<div className='text-xl mt-2 mb-6'>With HowdyGo you can share self-guided tours that show your product at its best.</div>

      </div></BlurFade>
      <BlurFade delay={0.25} inView={true} >
        <div className='flex flex-row space-x-4 items-center'>
<div>
  <h1 className='font-bold text-3xl'>Capture quickly, edit anything
  </h1>
  <p className='text-xl mt-2 '>You only need one take to turn your product into your best marketing asset. Click through your app to capture a flow and use our editor to craft the perfect story</p>
  <div className="flex justify-center gap-4 mb-6">
            <button onClick={() => navigate('/contact-us')} className="shadow-sm bg-white text-black drop-shadow-2xl rounded-2xl h-12 w-56">
              Learn about Demo Creation
            </button>
            <button onClick={() => navigate('/contact-us')} className="bg-black shadow-sm text-white border rounded-2xl h-12 w-56">
              Get Started for Free
            </button>
          </div>
</div>
<img src="images/business-man-1572059_640.jpg" alt="" />


        </div>
        <div className='h-6'></div>
        <div className='flex flex-row-reverse gap-6 items-center'>
<div>
  <h1 className='font-bold text-3xl'>Share and embed anywhere
  </h1>
  <p className='text-xl mt-2 mb-6 '>Embed demos on your website, share personalized links and build in-depth demo centres so your prospects can experience and understand your product.</p>
  <div className="flex justify-center gap-4 mb-6">
            <button onClick={() => navigate('/contact-us')} className="shadow-sm bg-white text-black drop-shadow-2xl rounded-2xl h-12 w-56">
              Learn about Demo Distribution
            </button>
            <button onClick={() => navigate('/contact-us')} className="bg-black shadow-sm text-white border rounded-2xl h-12 w-56">
              Get Started for Free
            </button>
          </div>
</div>
<img src="images/business-man-1572059_640.jpg" alt="" />


        </div>
      </BlurFade>
   <div className='h-14'></div>

<div className='flex flex-row space-x-4 items-center justify-center'>
<div className='rounded-full border-8 border-yellow-200'><FaCheck
              size={96}
             
            /></div>
            <div className='font-bold text-3xl'>Try it risk free</div>
<div className='text-2xl'>Free 14-day trial .No credit card required</div>

</div>
      <div className='flex justify-center mt-4'>
        
      <button onClick={() => navigate('/contact-us')} className="bg-black shadow-sm text-white border rounded-2xl h-12 w-56">
              Get Started for Free
            </button>
      </div>
      <div className='h-20'></div>
      <Separator className="my-6" />
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
    </div>
  
);
};

export default Home;
