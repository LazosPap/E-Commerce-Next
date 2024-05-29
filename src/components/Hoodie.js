import { cn } from "@/lib/utils";

const Hoodie = ({ className, imgSrc, dark = false, ...props }) => {
  return (
    <>
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
            className="object-contain max-w-[30%] max-h-[45%] pb-16"
            src={imgSrc}
            alt="overlaying hoodie image"
          />
        </div>
      </div>
    </>
  );
};

export default Hoodie;
