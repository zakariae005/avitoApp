import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface Props {
  link: string;
  linkTitle: string;
}

const NoResult = ({ link, linkTitle }: Props) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Image
        src="/assets/images/Noresult.jpg"
        alt="no result"
        width={300}
        height={300}
        className="mb-4 rounded-md"
      />
      <h2 className="mb-2 text-3xl font-bold">Something looks fishy!</h2>
      <p className="mb-4 text-center text-gray-600">
        But not exactly what you were looking for. We&apos;re so sorry about this.
      </p>
      <Link href={link}>
        <Button className="bg-red-500 text-white hover:bg-red-600">{linkTitle}</Button>
      </Link>
    </div>
  );
};

export default NoResult;
