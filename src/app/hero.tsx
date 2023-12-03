"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";
import { isMobile } from "react-device-detect";

function Hero() {
  return (
    <div
      style={{ marginTop: isMobile ? 1000 : 0 }}
      className="!flex h-[55vh] w-full items-center justify-between px-10"
    >
      <Image width={1200} height={1200} src="/image/logo.jpeg" alt="bg-img" />
      <Image
        width={500}
        height={500}
        src="/image/image8.jpeg"
        alt="bg-img"
        className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
      />
      <div className="container mx-auto mt-28">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
            <Typography
              variant="h1"
              color="blue-gray"
              className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl"
            >
              Bambaşka bir tesisat deneyimi
            </Typography>
            <Typography variant="lead" className="mb-10 mt-6 !text-gray-900">
              Mükemmel tesisat hizmetleri için sürekli olarak size vermiş
              olduğumuz hizmeti en kaliteli şekilde sunmayı hedefliyoruz.
              Profosyenel hizmetlerimizle evinizi veya iş yerinizi güvende ve
              konforlu tutmak için buradayız.
            </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <a href={`tel:${+905374962788}`}>
                <Button color="gray">Telefon</Button>
              </a>
              <a href="https://wa.me/+905374962788">
                <Button color="gray" variant="outlined">
                  Whatsapp
                </Button>
              </a>
            </div>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <a href="https://instagram.com/tesisatcihasanustaksyeri">
                <Button color="gray" variant="outlined">
                  Instagram
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;
