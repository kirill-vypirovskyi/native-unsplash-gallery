import { Dimensions } from "react-native";

export const useScreenValues = (type: 'screen' | 'window') => {
  const width = Dimensions.get(type).width;
  const height = Dimensions.get(type).height;

  return { width, height };
}