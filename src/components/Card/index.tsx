// @packages
import cn from "classnames";

// @own
import { Marker } from "@components/Marker";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  markerLabel: string;
  publishedDate: string;
  title: string;
  description: string;
  authorAvatar: string;
  authorName: string;
}

export const Card = ({
  imageSrc,
  imageAlt,
  markerLabel,
  publishedDate,
  title,
  description,
  authorAvatar,
  authorName,
}: CardProps) => (
  <article
    className={cn(
      "w-[327px] bg-white p-6 rounded-[20px] flex gap-6 flex-col cursor-pointer ease-in duration-100 group border border-[#111]",
      "shadow-[8px_8px_0px_0px_#000] hover:shadow-[16px_16px_0px_0px_#000]",
      "text-black",
      "sm:w-96"
    )}
  >
    <figure className="rounded-[10px] w-full h-full overflow-hidden">
      <img src={imageSrc} alt={imageAlt} />
    </figure>
    <section className="flex flex-col items-start gap-3">
      <Marker label={markerLabel} />
      <p className={cn(
        "text-xs leading-[18px] text-[#111] font-medium",
        "sm:text-sm sm:leading-[21px]"
      )}>
        {publishedDate}
      </p>
      <p className={cn(
        "text-xl leading-[30px] font-extrabold text-[#111] group-hover:text-[#f4d04e]",
        "ease-in duration-300",
        "sm:text-2xl sm:leading-9"
      )}>
        {title}
      </p>
      <p className={cn(
        "text-sm leading-[21px] font-medium text-[#6b6b6b]",
        "sm:text-base sm:leading-6"
      )}>
        {description}
      </p>
    </section>
    <footer className="flex items-center gap-3">
      <figure className="w-8 h-8">
        <img src={authorAvatar} alt={`${authorName}'s avatar`} />
      </figure>
      <p className="text-sm leading-[21px] font-extrabold text-[#111]">
        {authorName}
      </p>
    </footer>
  </article>
);
