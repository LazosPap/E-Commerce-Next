"use client";

import { useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const HOODIES = [
  "/Testimonials/1.png",
  "/Testimonials/3.png",
  "/Testimonials/1.png",
  "/Testimonials/1.png",
  "/Testimonials/1.png",
  "/Testimonials/1.png",
];

function splitArray(array, numParts) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

const Hoodie = ({ className, imgSrc, dark = false, ...props }) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        className="pointer-events-none z-50 select-none"
        src={dark ? "/Black_Hoodie.png" : "/Black_Hoodie.png"}
        alt="Hoodie Image"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          className="object-contain max-w-[40%] max-h-[50%] pb-16"
          src={imgSrc}
          alt="Overlaying Testimonial Image"
        />
      </div>
    </div>
  );
};

function Review({ imgSrc, testimonialSrc, className, ...props }) {
  const POSSIBLE_ANIMATION_DELAYS = [
    "0s",
    "0.1s",
    "0.2s",
    "0.3s",
    "0.4s",
    "0.5s",
  ];

  const animationDelay =
    POSSIBLE_ANIMATION_DELAYS[
      Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)
    ];

  return (
    <div
      className={cn(
        "animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5",
        className,
        "flex justify-center items-center"
      )}
      style={{ animationDelay }}
      {...props}
    >
      <Hoodie imgSrc={testimonialSrc} />
    </div>
  );
}

function ReviewColumn({ reviews, className, reviewClassName, msPerPixel }) {
  const columnRef = useRef(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) return;

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={cn("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration }}
    >
      {reviews.concat(reviews).map((imgSrc, reviewIndex) => (
        <Review
          key={reviewIndex}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          testimonialSrc={imgSrc}
        />
      ))}
    </div>
  );
}

function ReviewGrid() {
  const containerRef = useRef();
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const columns = splitArray(HOODIES, 3);
  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = splitArray(columns[2], 2);

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView ? (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              cn({
                "md:hidden": reviewIndex >= column1.length + column3[0].length,
                "lg:hidden": reviewIndex >= column1.length,
              })
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? "lg:hidden" : ""
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden md:block"
            msPerPixel={10}
          />
        </>
      ) : null}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32
      bg-gradient-to-b from-slate-100"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32
      bg-gradient-to-t from-slate-100"
      />
    </div>
  );
}

export function Reviews() {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <img
        aria-hidden="true"
        src=""
        className="absolute select-none hidden xl:block -left-32 top-1/3"
      />
      <ReviewGrid />
    </MaxWidthWrapper>
  );
}
