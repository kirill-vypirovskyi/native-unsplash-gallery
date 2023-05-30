import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { IconList } from "../icons/IconList";
import { IconTiles } from "../icons/IconTiles";
import { useAppDispatch } from "../app/hooks";
import { changeListType } from "../app/slice";
import { ListType } from "../types/ListType";

export const ListButtons = () => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => dispatch(changeListType(ListType.LIST))} style={{ marginRight: 10 }}>
        <IconList size={30} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => dispatch(changeListType(ListType.TILES))}>
        <IconTiles />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
