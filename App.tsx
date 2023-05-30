import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainScreen } from "./src/screens/MainScreen";
import { PhotoScreen } from "./src/screens/PhotoScreen";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { Photo } from "./src/types/Photo";
import { ListButtons } from "./src/components/ListButtons";

export type StackParams = {
  Main: undefined;
  Photo: {
    photo: Photo;
  };
};

const Stack = createNativeStackNavigator<StackParams>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            animation: "slide_from_right",
          }}
        >
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{
              headerTitle: "Unsplash Gallery",
              headerRight: () => <ListButtons />
            }}
          />

          <Stack.Screen name="Photo" component={PhotoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
