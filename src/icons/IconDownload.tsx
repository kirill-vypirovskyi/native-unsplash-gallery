<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g
    id="SVGRepo_tracerCarrier"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></g>
  <g id="SVGRepo_iconCarrier">
    {" "}
    <title></title>{" "}
    <g id="Complete">
      {" "}
      <g id="download"> </g>{" "}
    </g>{" "}
  </g>
</svg>;

import { Path, G, Line, Polyline } from "react-native-svg";
import { Icon } from "./Icon";

type Props = {
  size?: number;
  color?: string;
};

export const IconDownload = ({ size = 20, color = "#000" }: Props) => (
  <Icon size={size}>
    <G>
      <Path
        d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <G>
        <Polyline
          data-name="Right"
          fill="none"
          id="Right-2"
          points="7.9 12.3 12 16.3 16.1 12.3"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <Line
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          x1="12"
          x2="12"
          y1="2.7"
          y2="14.2"
        />
      </G>
    </G>
  </Icon>
);
