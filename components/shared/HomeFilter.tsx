import { HomeFilters } from "@/constants";
import Image from "next/image";
import React from "react";

const HomeFilter = () => {
  return (
    <div className="mx-auto max-w-screen-xl py-8">
      <h1 className="mb-6 text-3xl font-bold">Que cherchez-vous?</h1>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {HomeFilters.map((item) => (
          <div
            key={item.value}
            className="flex flex-col items-center justify-center rounded-md bg-white p-4 shadow-md"
          >
            <div className="relative mb-2">
              <Image
                src={item.imageUrl}
                alt={item.value}
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
            <p className="text-sm font-medium text-gray-800">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFilter;
