import { Text, TouchableOpacity, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { loadInitialPhotos } from "../app/slice";
import { useInitialLoad } from "../hooks/useInitialLoad";
import { Loader } from "../components/Loader";
import { IconReload } from "../icons/IconReload";
import { Gallery } from "../components/Gallery/Gallery";

export const MainScreen = () => {
  const { photos, hasError, loaded } = useAppSelector((state) => state.photos);

  const loadPhotos = useInitialLoad();

  const tryAgain = () => {
    loadPhotos();
  };

  return (
    <View>
      <Gallery photos={photos} />

      {!loaded && (
        <View>
          <Loader />
        </View>
      )}

      {hasError && (
        <View>
          <Text style={{ fontSize: 24, padding: 10, marginBottom: 50 }}>
            An error occured while loading data. Try again later.
          </Text>

          <TouchableOpacity onPress={tryAgain}>
            <IconReload size={50} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
