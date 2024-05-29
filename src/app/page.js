import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Hoodie from "@/components/Hoodie";
import { Check, Star } from "lucide-react";
import { Icons } from "@/components/icons";
import { Reviews } from "@/components/Reviews";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="bg-slate-50">
        <section>
          <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
            <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
              <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
                <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                  <img src="/Hoodie Logo.png" className="w-full" />
                </div>
                <h1
                  className="relative w-fit tracking-tight text-balance mt-16 font-bold 
                !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl"
                >
                  Your Image on a{" "}
                  <span className="bg-purple-600 px-2 text-white">Custom</span>{" "}
                  Hoodie
                </h1>
                <p
                  className="mt-8 text-lg lg:pr-10 max-w-prose text-center 
                lg:text-left text-balance md:text-wrap"
                >
                  Capture your favorite images with your own,
                  <span className="font-semibold">one-of-one</span> hoodie.
                  HoodieStamp allows you to create your unique style.
                </p>
                <ul
                  className="mt-8 space-y-2 text-left font-medium flex flex-col items-center
                sm:items-start"
                >
                  <div className="space-y-2">
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-purple-600" />
                      Premium Quality Materials
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-purple-600" />
                      Customizable Designs
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-purple-600" />
                      Comfort and Style
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-purple-600" />
                      Affordable Pricing
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className="h-5 w-5 shrink-0 text-purple-600" />
                      Unique Gifting Options
                    </li>
                  </div>
                </ul>
                <div
                  className="mt-12 flex flex-col sm:flex-row items-center
                sm:items-start gap-5"
                >
                  <div className="flex -space-x-4">
                    <img
                      className="inline-block h-10 w-10 rounded-full
                    ring-2 ring-slate-100"
                      src="/Users/User_1.jpg"
                      alt="user image"
                    />
                    <img
                      className="inline-block h-10 w-10 rounded-full
                    ring-2 ring-slate-100"
                      src="/Users/User_2.jpg"
                      alt="user image"
                    />
                    <img
                      className="inline-block h-10 w-10 rounded-full
                    ring-2 ring-slate-100"
                      src="/Users/User_3.jpg"
                      alt="user image"
                    />
                    <img
                      className="inline-block h-10 w-10 rounded-full
                    ring-2 ring-slate-100"
                      src="/Users/User_4.jpg"
                      alt="user image"
                    />
                    <img
                      className="inline-block object-cover h-10 w-10 rounded-full
                    ring-2 ring-slate-100"
                      src="/Users/User_5.jpg"
                      alt="user image"
                    />
                  </div>
                </div>
                <div
                  className="flex flex-col justify-between items-center
                  sm:items-start pt-5"
                >
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-purple-600 fill-purple-600" />
                    <Star className="h-4 w-4 text-purple-600 fill-purple-600" />
                    <Star className="h-4 w-4 text-purple-600 fill-purple-600" />
                    <Star className="h-4 w-4 text-purple-600 fill-purple-600" />
                    <Star className="h-4 w-4 text-purple-600 fill-purple-600" />
                  </div>
                </div>
                <p>
                  <span className="font-semibolt">2.500</span> happy customers
                </p>
              </div>
            </div>

            <div
              className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16
            md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit"
            >
              <div className="relative md:max-w-xl">
                <img
                  className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block 
                lg:hidden xl:block"
                  src="/your-image.png"
                />
                <img
                  className="absolute w-20 -left-6 -bottom-6 select-none"
                  src=""
                />
                <Hoodie className="w-[500px]" imgSrc="/Testimonials/1.png" />
              </div>
            </div>
          </MaxWidthWrapper>
        </section>

        {/* value proposition section */}

        <section className="bg-slate-100 py-24">
          <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
            <div className="flex flex-col lg:row items-center gap-4 sm:gap06">
              <h2
                className="order-1 mt-2 tracking-tight text-center
              text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900"
              >
                What our{" "}
                <span className="relative px-2">
                  customers{" "}
                  <Icons.underline
                    className="hidden sm:block pointer-events-none absolute
                  inset-x-0 -bottom-6 text-purple-500"
                  />
                </span>{" "}
                say
              </h2>
              <img src="/Hoodie Logo.png" className="w-24 order-0 lg:order-2" />
            </div>

            <div
              className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0
            lg:max-w-none lg:grid-cols-2 gap-y-16"
            >
              <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
                <div className="flex gap-0.5 mb-2">
                  <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
                  <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
                  <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
                  <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
                  <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
                </div>
                <div className="text-lg leading-8">
                  <p>
                    "I've been a customer of HoodieStamp for over a year now,
                    and I can confidently say that their products and services
                    are exceptional.
                    <span className="p-0.5 bg-slate-800 text-white">
                      The quality of the hoodies
                    </span>{" "}
                    is unparalleled – they are incredibly comfortable, durable,
                    and stylish."
                  </p>
                </div>
                <div className="flex gap-4 mt-2">
                  <img
                    className="rounded-full h-12 w-12 object-cover"
                    src="/Users/User_1.jpg"
                    alt="user"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">Lazaros</p>
                    <div className="flex gap-1.5 items-cneter text-zinc-600 ">
                      <Check className="h-4 w-4 stroke-[3px] text-purple-600" />
                      <p className="text-sm">Verified Purchase</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
                <div className="flex gap-0.5 mb-2">
                  <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
                  <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
                  <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
                  <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
                  <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
                </div>
                <div className="text-lg leading-8">
                  <p>
                    "The team is always ready to assist, ensuring that every
                    order meets my expectations. Whether I'm ordering a single
                    hoodie for myself or bulk orders for my business,
                    HoodieStamp never fails to deliver excellence.
                    <span className="p-0.5 bg-slate-800 text-white">
                      I highly recommend HoodieStamp
                    </span>{" "}
                    to anyone looking for high-quality, customizable hoodies
                    that make a statement."
                  </p>
                </div>
                <div className="flex gap-4 mt-2">
                  <img
                    className="rounded-full h-12 w-12 object-cover"
                    src="/Users/User_4.jpg"
                    alt="user"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">Jane Doe</p>
                    <div className="flex gap-1.5 items-cneter text-zinc-600 ">
                      <Check className="h-4 w-4 stroke-[3px] text-purple-600" />
                      <p className="text-sm">Verified Purchase</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
          <div className="pt-16">
            <Reviews />
          </div>
        </section>

        <section>
          <MaxWidthWrapper className="py-24">
            <div className="mb-12 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                  Upload your photo and get{" "}
                  <span className="relative px-2 bg-purple-600 text-white">
                    your own stamp
                  </span>{" "}
                  now
                </h2>
              </div>
            </div>

            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
                <img
                  src="/arrow.png"
                  className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
                />

                <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                  <img
                    src="/Testimonials/2.jpg"
                    className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
                  />
                </div>

                <Hoodie className="" imgSrc="/Testimonials/2.jpg" />
              </div>
            </div>

            <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
              <li className="w-fit">
                <Check className="h-5 w-5 text-purple-600 inline mr-1.5" />
                Express Your Unique Style
              </li>
              <li className="w-fit">
                <Check className="h-5 w-5 text-purple-600 inline mr-1.5" />
                Perfect Gift
              </li>
              <li className="w-fit">
                <Check className="h-5 w-5 text-purple-600 inline mr-1.5" />
                Conversation Starter
              </li>
              <li className="w-fit">
                <Check className="h-5 w-5 text-purple-600 inline mr-1.5" />5
                High-Quality Materials
              </li>

              <div className="flex justify-center">
                <Link
                  className={buttonVariants({
                    size: "lg",
                    className: "mx-auto mt-8",
                  })}
                  href="/configure/upload"
                >
                  Create your hoodie now{" "}
                  <ArrowRight className="h-4 w-4 ml-1.5" />
                </Link>
              </div>
            </ul>
          </MaxWidthWrapper>
        </section>
      </div>
    </>
  );
}
