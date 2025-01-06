// @packages
import cn from "classnames";

// @app
import Illustration from "@images/illustration.svg";
import UserAvatar from "@images/user-avatar.webp";

// @own
import { Card } from "@components/Card";
import "./index.css";

export const App = () => {
  const cardData = {
    imageSrc: Illustration,
    imageAlt: "Illustration",
    markerLabel: "Learning",
    publishedDate: "Published 21 Dec 2023",
    title: "HTML & CSS foundations",
    description: "These languages are the backbone of every website, defining structure, content, and presentation.",
    authorAvatar: UserAvatar,
    authorName: "Greg Hooper",
  };

  return (
    <div
      className={cn(
        "bg-[#f4d04e] flex h-lvh items-center justify-center",
        "text-white"
      )}
    >
      <Card {...cardData} />
    </div>
  );
};
