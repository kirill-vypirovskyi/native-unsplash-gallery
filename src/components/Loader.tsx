import { View, ActivityIndicator, StyleSheet } from "react-native";
import { useScreenValues } from "../hooks/useScreenValues";

export const Loader = () => {
  const { height } = useScreenValues("window");

  return (
    <View style={[styles.container, { height: height }]}>
      <ActivityIndicator size="large" color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 50,
  }
})
