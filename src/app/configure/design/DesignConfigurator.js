"use client";

import HandleComponent from "@/components/HandleComponent";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import NextImage from "next/image";
import { Rnd } from "react-rnd";

const DesignConfigurator = ({ configId, imageUrl, imageDimensions }) => {
  return (
    <div className="relative mt-20 grid grid-cols-3 mb-20 pb-20">
      <div className="relative h-auto overflow-hidden col-span-2 w-full max-w-6xl flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
        <div className="relative w-[100%] h-[100%] bg-opacity-50 pointer-events-none">
          <AspectRatio
            ratio={1000 / 1000}
            className="pointer-events-none relative z-10 w-full h-full"
          >
            <NextImage
              fill
              alt="hoodie image"
              src="/Template_Hoodie.png"
              className="pointer-events-none select-none"
            />
          </AspectRatio>
          <div className="absolute z-20 inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]" />
        </div>
        <Rnd
          default={{
            x: 10,
            y: 205,
            height: imageDimensions.height / 6,
            width: imageDimensions.width / 6,
          }}
          lockAspectRatio
          resizeHandleComponent={{
            bottomRight: <HandleComponent />,
            bottomLeft: <HandleComponent />,
            topLeft: <HandleComponent />,
            topRight: <HandleComponent />,
          }}
          className="z-30 border-[3px] border-primary absolute" // Ensure Rnd component is on top
        >
          <div className="relative w-full h-full">
            <NextImage
              src={imageUrl}
              fill
              alt="your image"
              className="pointer-events-none z-50" // Ensure the image is on top
            />
          </div>
        </Rnd>
      </div>

      <div className="h-[45rem] flex flex-col bg-white">
        <ScrollArea className="relative flex-1 overflow-auto">
          <div
            aria-hidden="true"
            className="absolute z-10 inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white pointer-events-none"
          />

          <div className="px-8 pb-12 pt-8">
            <h2 className="tracking-tight font-bold text-3xl">
              Customize your Hoodie
            </h2>

            <div className="w-full h-px bg-zinc-200 my-6" />
            <div className="relative mt-4 flex flex-col justify-between">
                Colors
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default DesignConfigurator;
