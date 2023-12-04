import React, { useEffect } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  ChatBubbleBottomCenterIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const NAV_MENU = [
  {
    name: "Ara",
    icon: PhoneIcon,
    href: `tel:${+905374962788}`,
  },
  {
    name: "Whatsapp",
    icon: ChatBubbleBottomCenterIcon,
    href: `https://wa.me/+905374962788`,
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(true);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsMobile(false);
    }
  }, []);
  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  if (!isMobile) {
    return (
      <Link href={`tel:${+905374962788}`}>
        <Image
          className="fixed"
          src={"/image/logo.jpeg"}
          width={200}
          height={200}
          alt="Hasan Usta Kayseri Tesisatçı"
        />
      </Link>
    );
  }

  return (
    <Link href={`tel:${+905374962788}`}>
      <div className="flex justify-center">
        <div className="bg-green-300 box-border w-[390px] h-16 text-center text-[21.83px] text-white font-font-awesome-5-free border-b-[1px] border-solid border-gray">
          <div className="absolute top-[0px] left-[calc(50%_-_179.4px)] bg-lightgreen w-[358.8px] h-[63px]">
            <div className="absolute top-[21px] left-[calc(50%_-_179px)] leading-[22px] flex items-center justify-center w-[22.2px] h-[22px]">
              📞
            </div>
            <div className="absolute top-[14px] left-[calc(50%_-_150px)] text-[22px] leading-[22px] font-semibold font-saira flex items-center justify-center w-[329px] h-[35px]">
              Bizi Arayın | 90 537 496 2788
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Navbar;
