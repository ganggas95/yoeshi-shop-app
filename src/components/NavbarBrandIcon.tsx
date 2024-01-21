import { HTMLAttributes } from "react";

type Props = {
  width?: number;
  height?: number;
};
export default function NavbarBrandIcon({
  width,
  height,
  ...other
}: Props & HTMLAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      width={width || "97"}
      height={height || "98"}
      {...other}
      viewBox="0 0 97 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="0.778564"
        width="96.5844"
        height="96.5844"
        rx="16"
        fill="#40BFFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M68.1838 45.2765C70.2792 47.372 70.2792 50.7694 68.1838 52.8649L52.0864 68.9623C49.9909 71.0578 46.5935 71.0578 44.498 68.9623L28.4006 52.8649C26.3051 50.7694 26.3051 47.372 28.4006 45.2765L44.498 29.1791C46.5935 27.0837 49.9909 27.0837 52.0864 29.1791L68.1838 45.2765ZM48.2922 40.5617L39.7832 49.0707L48.2922 57.5797L56.8012 49.0707L48.2922 40.5617Z"
        fill="white"
      />
    </svg>
  );
}
