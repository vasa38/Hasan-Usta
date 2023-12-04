// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import OutImpressiveStats from "./out-impressive-stats";
import CoursesCategories from "./courses-categories";
import ExploreCourses from "./explore-courses";
import Testimonial from "./testimonial";
import Events from "./events";
import StudentsFeedback from "./students-feedback";
import TrustedCompany from "./trusted-companies";
import Image from "next/image";
import Link from "next/link";

export default function Campaign() {
  return (
    <>
      <Link href={`tel:${+905374962788}`}>
        <Image
          className="fixed"
          src={"/image/logo.jpeg"}
          width={200}
          height={200}
          alt="Hasan Usta Kayseri Tesisatçı"
        />
      </Link>
      <Hero />
      <div className="mt-20">
        <OutImpressiveStats />
      </div>
      <div style={{ marginTop: 40 }}>
        <ExploreCourses />
      </div>
      <StudentsFeedback />
      <Footer />
    </>
  );
}
