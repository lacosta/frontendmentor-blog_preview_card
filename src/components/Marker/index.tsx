// @packages
import cn from "classnames";

interface MarkerProps {
  label: string;
  color?: string;
}

export const Marker = ({ label, color = "#f4d04e" }: MarkerProps) => {
  return (
    <div className={cn(
      `inline py-1 px-3 rounded bg-[${color}]`,
      "text-xs font-extrabold leading-[18px]",
      "sm:text-sm sm:leading-[21px]"
    )}>
      {label}
    </div>
  );
};
