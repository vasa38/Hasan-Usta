"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PhoneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Fab, Action } from "react-tiny-fab";

export function FixedPlugin() {
  {
    /**<Link href={"tel:+905374962788"}>
      <div className="">
        <p>medium</p>
        <button className="!fixed bottom-4 left-4 flex gap-1 pl-2 justify-center fixed text-center item-center p-0 w-12 h-12 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
          <PhoneIcon className="h-10 w-10 text-white" />
        </button>
      </div>
    </Link> */
  }
  return (
    <div className="fixed bottom-5 left-4">
      <Link href={`tel:${+905374962788}`}>
        <div className="bg-green-500 text-white p-4 my-4 rounded-full shadow-md">
          <PhoneIcon className="h-6 w-6 text-white" />
        </div>
      </Link>
    </div>
  );
}
/**return {
    <a href={`tel:${+905374962788}`}>
      <Button
        color="green"
        className="!fixed bottom-4 left-4 flex gap-1 pl-2 items-center rounded-full"
      >
        <PhoneIcon className="h-10 w-10 text-blue-500" />
      </Button>
    </a> 
  }; */
