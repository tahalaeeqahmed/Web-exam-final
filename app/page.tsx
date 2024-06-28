"use client";

import { deleteLorem } from "@/actions/deleteLorem";
import { getLorems } from "@/actions/getLorems";
import { MyForm } from "@/components/myform";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useCallback, useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Main = () => {
  const [lorems, setLorems] = useState<any>();

  useEffect(() => {
    getLorems().then((data: any) => {
      setLorems(data);
      console.log(data);
    });
  }, [lorems]);

  const handleDelete = useCallback((id: string) => {
    deleteLorem(id);
  }, []);

  return (
    <main className="flex flex-col flex-1 items-center bg-white-100">
      <div className="grid grid-cols-3 gap-x-20 mt-8">
        <div className="flex flex-col items-center justify-center py-4 gap-y-2 w-[300px] rounded-lg bg-blue-300 border border-slate-600">
          <h1 className="font-medium text-3xl">Total task</h1>
          <h2 className="font-bold text-6xl">04</h2>
        </div>
        <div className="flex flex-col items-center justify-center py-4 gap-y-2 w-[300px] rounded-lg bg-green-300 border border-slate-600">
          <h1 className="font-medium text-3xl">Completed</h1>
          <h2 className="font-bold text-6xl">00</h2>
        </div>
        <div className="flex flex-col items-center justify-center py-4 gap-y-2 w-[300px] rounded-lg bg-orange-300 border border-slate-600">
          <h1 className="font-medium text-3xl">Pending</h1>
          <h2 className="font-bold text-6xl">04</h2>
        </div>
      </div>
      <div className="mt-8">
        <MyForm />
      </div>
      <div className="flex flex-col my-6 gap-y-4">
        {lorems?.map((lorem: any, index: number) => {
          return (
            <Card key={index} className="flex flex-col justify-center p-4 ">
              <CardContent className="text-2xl font-medium">
                {lorem.name}
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <Button size={"lg"} className="bg-red-500 w-[200px]">
                  Mark if completed!
                </Button>
                <Button
                  variant={"ghost"}
                  className="w-fit"
                  onClick={() => handleDelete(lorem.id)}
                >
                  <span>
                    <RiDeleteBin6Line size={30} />
                  </span>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <div className="flex justify-center py-4 gap-y-2 w-[300px]">
      <div className="flex flex-col items-center justify-center py-4 gap-y-2 w-[300px] rounded-lg bg-white-300 border border-slate-600">
        Previous
      </div>
      <div className="flex flex-col items-center justify-center py-4 gap-y-2 w-[300px] rounded-lg bg-white-300 border border-slate-600">
        Next
      </div>
      </div>
    </main>
  );
};

export default Main;
