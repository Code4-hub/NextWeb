import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Monthly } from "./plan/Monthly";
import { Yearly } from "./plan/Yearly";

export function PricingTabs() {
  return (
    <Tabs defaultValue="monthly" className="mt-10 w-full">
      <TabsList className="max-grid max-w-[500px] grid-cols-2 h-auto rounded-full">
        <TabsTrigger value="monthly" className="py-3 rounded-full text-md ">
          Monthly billing
        </TabsTrigger>
        <TabsTrigger
          value="yearly"
          className="py-3 flex items-center gap-2 rounded-full text-md px-4"
        >
          Yearly billing{" "}
          <Badge
            variant={"outline"}
            className="text-xs rounded-full text-black bg-transparent"
          >
            Save 20%
          </Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="monthly" className="flex w-full">
        <Monthly />
      </TabsContent>
      <TabsContent value="yearly">
        <Yearly />
      </TabsContent>
    </Tabs>
  );
}
