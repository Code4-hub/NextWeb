import TextReveal from "@/components/magicui/text-reveal";

export const TextReveals = () => {
  const text = `At AutomatorDev, we believe that creativity has the power to transform brands and drive business success. 
As a leading agency specializing in web development and UI design, we are passionate about helping 
businesses like yours stand out in today's competitive landscape.
  `;

  return (
    <div className="z-10 flex  items-center ">
      <TextReveal text={text} className="text-4xl font-bold text-white" />
    </div>
  );
};
