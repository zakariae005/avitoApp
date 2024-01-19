import React from "react";
import Image from "next/image";

interface Props {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  author: { _id: string, name: string, picture: string},
  createdAt: Date,
}

const AnnonceCard = ({ _id, title, price, imageUrl, author, createdAt }: Props) => {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={300}
          className="size-full rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h4 className="mb-2 text-xl font-semibold">{title}</h4>
        <p className="text-blue-500">${price}</p>
      </div>
    </div>
  );
};

export default AnnonceCard;
