"use client";

import { motion } from "framer-motion";
import { AiOutlineCar, AiOutlineWifi } from "react-icons/ai";
import { BiCctv } from "react-icons/bi";
import { BsFire } from "react-icons/bs";
import { FaFireExtinguisher } from "react-icons/fa";
import { GiButterflyFlower } from "react-icons/gi";
import { GrWorkshop } from "react-icons/gr";
import { MdOutlineBathtub, MdOutlineCoffeeMaker } from "react-icons/md";
import { RiSafeLine } from "react-icons/ri";

const offersRowOne = [
  {
    label: "Garden view",
    icon: GiButterflyFlower,
  },
  {
    label: "Hot water",
    icon: BsFire,
  },

  {
    label: "Wifi",
    icon: AiOutlineWifi,
  },
  {
    label: "Coffee",
    icon: MdOutlineCoffeeMaker,
  },
  {
    label: "Security cameras on property",
    icon: BiCctv,
  },
];

interface LocationCardProps {
  location: string;
  locationData: string;
}

const LocationCard: React.FC<LocationCardProps> = (location, locationData) => {
  return (
    <div>
      <p className="text-xl font-semibold">
        Explore what&apos;s near this space
      </p>
      <div className="flex justify-start space-x-12 pt-6">
        <div className="flex flex-col gap-2">
          {offersRowOne.map((item, index) => (
            <div
              key={index}
              className="flex justify-start items-center text-center gap-4 my-1 "
            >
              <item.icon size={25} className="text-gray-700" />
              <p className="text-neutral-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
