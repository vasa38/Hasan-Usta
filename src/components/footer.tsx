import { Typography, Button, Input } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Hasan Usta",
    items: [
      "Whatsapp: +905374962788",
      "Telefon: +905374962788",
      "Instagram: @tesisatcihasanustakayseri",
    ],
    links: [
      "https://wa.me/+905374962788",
      `tel:${+905374962788}`,
      "https://instagram.com/tesisatcihasanustakayseri",
    ],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-24 pb-8">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 !w-full ">
          <div className="flex col-span-2 items-center gap-10 mb-10 lg:mb-0 md:gap-36">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography variant="h6" color="blue-gray" className="mb-4">
                  {title}
                </Typography>
                {items.map((link, i) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href={LINKS[0].links[i]}
                      className="py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="md:text-center mt-16 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} Made by{" "}
          <a href="#" target="_blank">
            Cizup
          </a>
          .
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
