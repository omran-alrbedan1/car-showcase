"use client";

import { CarProps } from "@/types";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { generateCarImageUrl } from "@/utils";
interface CarDetailsProps {
  isOpen: boolean;
  closeModel: () => void;
  car: CarProps;
}

function CarDetails({ isOpen, closeModel, car }: CarDetailsProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className={"relative z-10"} onClose={closeModel}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25"></div>
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-out duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={
                    "relative w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 transform rounded-2xl bg-white flex flex-col text-left transition-all shadow-xl"
                  }
                >
                  <button
                    className="
                      absolute top-2 right-2 z-10  w-fit p-2 bg-primary-blue-100 rounded-full
                    "
                    type="button"
                    onClick={closeModel}
                  >
                    <Image
                      src={"/close.svg"}
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex flex-1 flex-col gap-3">
                    <div className="bg-pattern bg-center bg-cover w-full h-30 rounded-lg">
                      <Image
                        src={"/hero.png"}
                        alt="image"
                        priority
                        width={240}
                        height={240}
                        className="object-contain mx-auto"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex h-24 w-full relative flex-1 rounded-lg bg-primary-blue-100">
                        <Image
                          src={"/front.webp"}
                          alt="image"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex h-24 w-full relative flex-1 rounded-lg bg-primary-blue-100">
                        <Image
                          src={"/back.webp"}
                          alt="image"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex h-24 w-full relative flex-1 rounded-lg bg-primary-blue-100">
                        <Image
                          src={"/inside.webp"}
                          alt="image"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 gap-3">
                    <h1 className="font-semibold capitalize text-xl">
                      {car.make}
                      {car.model}
                    </h1>
                    <div className="flex flex-wrap gap-4 mt-3">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between text-right w-full gap-5 "
                          key={key}
                        >
                          <h4 className="text-black-100 font-semibold">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className=" capitalize text-gray-400">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default CarDetails;
