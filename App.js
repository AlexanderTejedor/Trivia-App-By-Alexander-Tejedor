import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Historia from "./Pages/Historia/Historia";
import Ciencia from "./Pages/Ciencia/Ciencia";
import Deporte from "./Pages/Deportes/Deporte";
import Resultados from "./Pages/Resultados/Resultados";

const categories = [
  { name: "Historia", screen: "Historia" },
  { name: "Ciencia", screen: "Ciencia" },
  { name: "Deportes", screen: "Deporte" },
];

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona una categoría</Text>
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat.name}
          style={styles.button}
          onPress={() => navigation.navigate(cat.screen)}
        >
          <Text style={styles.buttonText}>{cat.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Historia" component={Historia} />
        <Stack.Screen name="Ciencia" component={Ciencia} />
        <Stack.Screen name="Deporte" component={Deporte} />
        <Stack.Screen name="Resultados" component={Resultados} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#e0e0e0",
    padding: 16,
    borderRadius: 8,
    marginVertical: 10,
    minWidth: 200,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
  },
});
