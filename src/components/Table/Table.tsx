import React from "react";
import { View, Text } from "react-native";
import { styles } from "./TableStyles";
import { Exif } from "../../types/Exif";
import { TableRow } from "./TableRow";

type Props = {
  exif: Exif;
};

export const Table = ({ exif }: Props) => {
  return (
    <View>
      <Text style={styles.tableTitle}>Captured on:</Text>
      <TableRow title="Model" value={exif.model}/>
      <TableRow title="Focal length" value={exif.focal_length}/>
      <TableRow title="Aperture" value={exif.aperture}/>
      <TableRow title="Exposure time" value={exif.exposure_time}/>
      <TableRow title="ISO" value={exif.iso}/>
    </View>
  );
};
