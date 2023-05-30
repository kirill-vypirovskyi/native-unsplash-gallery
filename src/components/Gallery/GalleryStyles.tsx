import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  imageContainer: {
    flex: 1,
    padding: 5,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  imageDescr: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    bottom: 0,
    margin: 5,
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 5,
  },
  imageText: {
    color: '#fff',
  },
});