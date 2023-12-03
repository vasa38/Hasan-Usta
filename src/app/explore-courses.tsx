"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const COURSES = [
  {
    img: "/image/blogs/blog4.jpg",
    title: "Su Tesisatı",
    desc: "Kayseri’de en profesyonel ekipmanlarla su tesisatı kurulumu, bakım ve onarım hizmetleri vermekteyiz.",
  },
  {
    img: "/image/blogs/blog3.jpg",
    title: "Kanal Tıkanıklığı Açma",
    desc: "Kayseri’de tıkanmış su tesisatlarını en teknolojik cihazları kullanarak tıkanıklığı pratik şekilde gideriyoruz.",
  },
  {
    img: "/image/blogs/blog5.jpg",
    title: "Su Kaçağı Tespiti",
    desc: "Kayseri’de su kaçağı olan tesisatlarda profesyonel ekipman ve hassas çalışmalarla kaçağı tespit ediyoruz.",
  },
  {
    img: "/image/blogs/blog6.jpg",
    title: "Kırmadan Dökmeden Su Kaçağı Tamiri ",
    desc: "Kayseri’de ihtiyacınız olan su kaçağının tamirat işlemlerini en detaylı ve hassas şekilde gerçekleştiriyoruz.",
  },
  {
    img: "/image/blogs/blog7.jpg",
    title: "Klozet Tamiri",
    desc: "Kayseri’de bozulan klozet tesisatları ve ekipmanlarınıı en pratik ve doğru şekilde tamir edip hızlı bir şekilde teslim ediyoruz.",
  },
  {
    img: "/image/blogs/blog8.jpg",
    title: "Su Tesisat Kimyasalı İle Kaçak Tamiri",
    desc: "Su kaçağı problemlerinizi su tesisat kimyasalları kullanarak en pratik şekilde tamiratını gerçekleştiriyoruz.",
  },
];

export function ExploreCourses() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-24 text-center">
        <Typography variant="h2" color="blue-gray">
          Hizmetlerimiz
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
          Birçok pratik tesisat çözümü ile hizmetinizdeyiz.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default ExploreCourses;
