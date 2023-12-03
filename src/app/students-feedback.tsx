"use client";
import React from "react";
import FeedbackCard from "@/components/feedback-card";
import { Typography } from "@material-tailwind/react";

const FEEDBACKS = [
  {
    feedback:
      "Profosyenel bir usta işini temiz ve profosyenel olarak yapıyor. İşin hakkını verdi, ben beğendiysem herkes beğenir.",
    client: "Ayşe Tutar",
    title: "Kayseri / Kocasinan",
    img: "/image/avatar1.jpg",
  },
  {
    feedback:
      "Güleryüz ve hızlı hizmetten fazlasıyla memnun kaldım, herkese tavsiye ederim. Kazandığınız para sonuna kadar helal ustam!",
    client: "Melis Rabiya Özkaya",
    title: "Kayseri / Melikgazi",
    img: "/image/avatar3.jpg",
  },
  {
    feedback:
      "Çözüm odaklı usta kullandığı malzemeler ve el aletlerinin kalitesi olması klasik ustalardan en önemli farkı. Ellerine sağlık Hasan Usta!",
    client: "Dilara Elgun",
    title: "Kayseri / Kocasinan",
    img: "/image/avatar2.jpg",
  },
];

export function StudentsFeedback() {
  return (
    <section className="px-8 py-36">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col items-center w-full">
          <Typography variant="h2" color="blue-gray" className="mb-2">
            Müşterilerimiz bizim hakkımızda neler söylemiş?
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl lg:text-center !text-gray-500"
          >
            Misyonumuz, müşterilimizin hayallerindeki sıcak yuvasında huzurlu
            olmalarını sağlamaktır. Ama sadece bizim sözümüze güvenmeyin, birde
            bizi müşterilimizden dinleyin.
          </Typography>
        </div>
        <div className="grid gap-x-8 gap-y-12 lg:px-32 grid-cols-1 md:grid-cols-3">
          {FEEDBACKS.map((props, key) => (
            <FeedbackCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudentsFeedback;
