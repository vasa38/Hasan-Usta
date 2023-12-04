"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WaFab() {
  return (
    <FloatingWhatsApp
      phoneNumber="+905374962788"
      statusMessage="Yaklaşık 30 dakika içinde cevap veriyoruz."
      accountName="Hasan Usta"
      placeholder="Size nasıl yardımcı olabiliriz?"
      avatar="https://i.ibb.co/wJVM62z/logo.png"
      chatMessage="Merhaba ben Hasan Usta, size nasıl yardımcı olabiliriz?"
    />
  );
}
