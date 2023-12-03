"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a href={`tel:${+905374962788}`}>
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 left-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
        Ara
      </Button>
    </a>
  );
}
