import { HTMLAttributes, MouseEventHandler } from "react";

type Props = {
  icon?: JSX.Element;
  text?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

export default function HeaderItem({
  icon,
  text,
  onClick,
}: Props & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="flex items-center gap-x-2 flex-nowrap cursor-pointer"
      onClick={onClick}
    >
      {icon}
      {text ? <span className="text-sm whitespace-nowrap">{text}</span> : null}
    </div>
  );
}
