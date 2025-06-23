import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Resultados({ route, navigation }) {
  const { correctas, incorrectas } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultados</Text>
      <Text style={styles.result}>Respuestas correctas: {correctas}</Text>
      <Text style={styles.result}>Respuestas incorrectas: {incorrectas}</Text>
      <View style={styles.button}>
        <Button
          title="Volver al inicio"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </View>
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
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  result: {
    fontSize: 20,
    marginVertical: 8,
    textAlign: "center",
  },
  button: {
    marginTop: 32,
    width: "100%",
  },
});
