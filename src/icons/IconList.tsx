import { Path, G, Rect } from "react-native-svg";
import { Icon } from "./Icon";

type Props = {
  size?: number;
  color?: string;
};

export const IconList = ({ size = 20, color = "#000" }: Props) => (
  <Icon size={size}>
    <Path
      d="M9 17H20M9 12H20M9 7H20M4 16.5H5V17.5H4V16.5ZM4 11.5H5V12.5H4V11.5ZM4 6.5V7.5H5V6.5H4Z"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);
