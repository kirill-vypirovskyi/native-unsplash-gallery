import { Path, G, Rect } from "react-native-svg";
import { Icon } from "./Icon";

type Props = {
  size?: number;
  color?: string;
};

export const IconTiles = ({ size = 20, color = "#000" }: Props) => (
  <Icon size={size} viewBox="0 0 18 18">
    <G
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      
      <G fill={color} fill-rule="nonzero">
        
        <Rect width="8" height="8" rx="2"></Rect>
        <Rect width="8" height="8" x="10" rx="2"></Rect>
        <Rect width="8" height="8" x="10" y="10" rx="2"></Rect>
        <Rect width="8" height="8" y="10" rx="2"></Rect>
      </G>
    </G>
  </Icon>
);

