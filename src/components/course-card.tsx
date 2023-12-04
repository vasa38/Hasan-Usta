import {
  Typography,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";

interface CourseCardProps {
  img: string;
  title: string;
  desc: string;
}

export function CourseCard({ img, title, desc }: CourseCardProps) {
  return (
    <Card className="border">
      <CardHeader className="h-54">
        <Image
          width={600}
          height={600}
          src={img}
          alt={title}
          className="transform transition duration-500 hover:scale-110"
        />
      </CardHeader>
      <CardBody>
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-900"
        >
          <Typography variant="h5" className="mb-2 normal-case">
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default CourseCard;
