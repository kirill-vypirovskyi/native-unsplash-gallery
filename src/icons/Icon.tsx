import React from "react";
import { StyleSheet, View } from "react-native";
import Svg from "react-native-svg";

type Props = {
  children: React.ReactNode;
  size: number;
  viewBox?: string;
};

export const Icon = ({ children, size, viewBox = '0 0 24 24' }: Props) => {
  return (
    <View style={styles.container}>
      <Svg
        width={size}
        height={size}
        viewBox={viewBox}
      >
        {children}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
