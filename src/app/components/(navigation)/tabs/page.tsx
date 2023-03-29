import Heading from "@/components/Heading";
import Display from "@/components/ui/text/Display";
import {Tabs,TabsContent,TabsList,TabsTrigger} from "@/lib/Tabs";

const TabsPage = () => {
  return (
    <div>
      <Display className="mb-4">Tabs</Display>

      <div className="flex flex-col gap-2">
        <Heading>Примеры</Heading>
        <Tabs className="w-[500px]">
          <TabsList>
            <TabsTrigger value="x">First</TabsTrigger>
            <TabsTrigger value="y">Second</TabsTrigger>
            <TabsTrigger value="z">Third</TabsTrigger>
          </TabsList>
          <TabsContent value="x">First content</TabsContent>
          <TabsContent value="y">Second content</TabsContent>
          <TabsContent value="z">Third content</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TabsPage;
