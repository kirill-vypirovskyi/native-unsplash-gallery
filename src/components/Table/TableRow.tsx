import { View, Text } from "react-native";
import { styles } from "./TableStyles";

type Props = {
  title: string;
  value: string | number;
};

const noInfo = "No info";

export const TableRow = ({ title, value }: Props) => {
  return (
    <View style={styles.tableContainer}>
      <Text style={styles.tableText}>{title}:</Text>
      <Text style={styles.tableText}>{value ?? noInfo}</Text>
    </View>
  );
};
