"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  DocumentTextIcon,
  PlayCircleIcon,
  PencilSquareIcon,
  PhoneArrowDownLeftIcon,
  StarIcon,
  MapIcon,
} from "@heroicons/react/24/solid";

import StatsCard from "@/components/stats-card";

const STATS = [
  {
    icon: DocumentTextIcon,
    count: "30+",
    title: "Yıllık Deneyim",
  },
  {
    icon: StarIcon,
    count: "%99",
    title: "Müşteri Memnuniyeti",
  },
  {
    icon: PhoneArrowDownLeftIcon,
    count: "7/24",
    title: "Destek",
  },
  {
    icon: MapIcon,
    count: "Kayseri",
    title: "İçi",
  },
];

export function OutImpressiveStats() {
  return (
    <section className="px-8 pt-60">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          <Typography variant="h2" color="blue-gray" className="mb-2 text-4xl">
            30 Yılı Aşkın Tecrübemizle,
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 w-full !text-gray-500 lg:w-5/12"
          >
            Kayseri'de tesisat alanında lider konumdayız. Her türlü tesisat
            sorununu çözmek için gerekli bilgi ve beceriye sahibiz.
          </Typography>
        </div>
        <div className="grid gap-y-16 gap-x-10 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default OutImpressiveStats;
