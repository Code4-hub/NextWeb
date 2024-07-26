import { Button } from "@/components/ui/button";

export const Submited = () => {
  return (
    <div className="text-center flex flex-col gap-5">
      <h1 className="text-6xl font-semibold">Request submitted</h1>
      <h2 className="text-3xl ">Thank you for getting in contact with us.</h2>
      <p>We will get back to you as soon as possible</p>
      <div>
        <Button
          className="px-9 py-6 rounded-full flex items-center gap-2 transition-all duration-200 ease-in-out hover:transform hover:scale-[0.9] m-auto"
          onClick={() => window.location.assign("/")}
        >
          <span>Go Home</span>
        </Button>
      </div>
    </div>
  );
};
