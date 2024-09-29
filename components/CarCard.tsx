"use client";

import { CarProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useState } from "react";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: CarProps;
}

function CarCard({ car }: CarCardProps) {
  const {
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;

  const carRent = calculateCarRent(city_mpg, year);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make}
          {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start font-semibold text-[14px]">$</span>
        {carRent}
        <span className="self-end font-semibold text-[14px]">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          fill
          priority
          src={"/hero.png"}
          className="object-contain"
          alt="car"
        />
      </div>
      <div className="relative w-full flex mt-2">
        <div className=" flex w-full justify-between gap-2 group-hover:invisible text-gray">
          <div className="flex-col flex gap-2 justify-center items-center">
            <Image
              src={"/steering-wheel.svg"}
              width={20}
              height={20}
              alt="steering-wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex-col flex gap-2 justify-center items-center">
            <Image src={"/tire.svg"} width={20} height={20} alt="tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex-col flex gap-2 justify-center items-center">
            <Image
              src={"/gas.svg"}
              width={20}
              height={20}
              alt="steering-wheel"
            />
            <p className="text-[14px]">{city_mpg}MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] bg-primary-blue rounded-full"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModel={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
}

export default CarCard;
