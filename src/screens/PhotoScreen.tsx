import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParams } from "../../App";
import { useScreenValues } from "../hooks/useScreenValues";
import { IconHearth } from "../icons/IconHeart";
import { IconEye } from "../icons/IconEye";
import { IconDownload } from "../icons/IconDownload";
import { capitalize } from "../helpers/functions";
import { Table } from "../components/Table/Table";

type Props = NativeStackScreenProps<StackParams, "Photo">;

export const PhotoScreen = ({ route }: Props) => {
  const {
    urls,
    height,
    width,
    description,
    alt_description,
    likes,
    user,
    views,
    downloads,
    exif,
  } = route.params.photo;
  const { width: screenWidth } = useScreenValues("screen");
  const imageHeight = (height * screenWidth) / width;

  return (
    <ScrollView>
      <View>
        <Image
          style={[styles.image, { width: screenWidth, height: imageHeight }]}
          source={{ uri: urls.regular }}
        />
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.stats}>
          <View style={styles.statsItem}>
            <IconHearth />
            <Text style={styles.statsItemText}>{likes}</Text>
          </View>

          <View style={styles.statsItem}>
            <IconEye />
            <Text style={styles.statsItemText}>{views}</Text>
          </View>

          <View style={styles.statsItem}>
            <IconDownload />
            <Text style={styles.statsItemText}>{downloads}</Text>
          </View>
        </View>
      </View>
      <View style={{ padding: 10 }}>
        <Text style={styles.title}>
          {description ?? capitalize(alt_description)}
        </Text>
        <Text style={styles.author}>{user.name}</Text>

        <Table exif={exif} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
  },
  stats: {
    flex: 1,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statsItem: {
    flexDirection: "row",
  },
  statsItemText: {
    fontSize: 20,
    paddingLeft: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  author: {
    fontSize: 22,
    fontWeight: "200",
    marginBottom: 10,
  },
  statsContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: "#fff"
  }
});
