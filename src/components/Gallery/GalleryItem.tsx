import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { truncate, capitalize } from "../../helpers/functions";
import { styles } from "./GalleryStyles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../../../App";
import { Photo } from "../../types/Photo";
import { useAppSelector } from "../../app/hooks";
import { ListType } from "../../types/ListType";
import { useScreenValues } from "../../hooks/useScreenValues";

type Props = {
  item: Photo;
};

export const GalleryItem = ({ item }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const { listType } = useAppSelector((state) => state.photos);
  const { width: screenWidth } = useScreenValues("screen");

  const listTiles = listType === ListType.TILES;
  const spacing = 10;
  const imageWidth = listTiles ? (screenWidth - 3 * spacing) / 2 : (screenWidth - spacing * 2);

  return (
    <View style={styles.imageContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Photo", { photo: item })}
      >
        <Image
          style={[
            styles.image,
            { width: imageWidth},
            listTiles
              ? { aspectRatio: 1 }
              : { height: 150 },
          ]}
          source={{ uri: item.urls.small }}
        />

        <View style={styles.imageDescr}>
          <Text style={styles.imageText}>
            {truncate(item.description ?? capitalize(item.alt_description))}
          </Text>
          <Text style={styles.imageText}>{item.user.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
