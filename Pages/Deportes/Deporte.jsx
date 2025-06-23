import React, { useState } from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";

const questions = [
  {
    question: "¿Cuántos jugadores hay en un equipo de fútbol?",
    options: ["9", "10", "11", "12"],
    answer: 2,
    explanation:
      "Un equipo de fútbol está compuesto por 11 jugadores en el campo, incluyendo al portero.",
  },
  {
    question: "¿En qué deporte se utiliza una raqueta?",
    options: ["Tenis", "Fútbol", "Natación", "Ciclismo"],
    answer: 0,
    explanation:
      "El tenis se juega con raqueta y pelota, a diferencia de los otros deportes mencionados.",
  },
  {
    question: "¿Dónde se celebraron los Juegos Olímpicos de 2016?",
    options: ["Londres", "Río de Janeiro", "Tokio", "Pekín"],
    answer: 1,
    explanation:
      "Los Juegos Olímpicos de 2016 se celebraron en Río de Janeiro, Brasil.",
  },
  {
    question: "¿Qué país ha ganado más Copas Mundiales de Fútbol?",
    options: ["Alemania", "Argentina", "Brasil", "Italia"],
    answer: 2,
    explanation:
      "Brasil es el país con más Copas Mundiales de Fútbol, con un total de 5 títulos.",
  },
  {
    question: "¿Cuántos puntos vale un triple en baloncesto?",
    options: ["1", "2", "3", "4"],
    answer: 2,
    explanation:
      "Un tiro triple en baloncesto vale 3 puntos, siempre que se realice desde fuera de la línea de triple.",
  },
];

export default function Deporte({ navigation }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [correctas, setCorrectas] = useState(0);
  const [incorrectas, setIncorrectas] = useState(0);

  const current = questions[index];

  const handleOption = (i) => {
    if (selected !== null) return;
    setSelected(i);
    setShowResult(true);
    if (i === current.answer) {
      setCorrectas(correctas + 1);
    } else {
      setIncorrectas(incorrectas + 1);
    }
  };

  const next = () => {
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      navigation.replace("Resultados", { correctas, incorrectas });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.question}>{current.question}</Text>
        {current.options.map((opt, i) => (
          <TouchableOpacity
            key={i}
            style={[styles.option, selected === i && styles.selectedOption]}
            disabled={selected !== null}
            onPress={() => handleOption(i)}
          >
            <Text style={styles.optionText}>{opt}</Text>
          </TouchableOpacity>
        ))}
        {showResult && (
          <>
            <Text style={styles.result}>
              {selected === current.answer ? "¡Correcto!" : "¡Incorrecto!"}
            </Text>
            <Text style={styles.explanation}>
              Respuesta correcta: {current.options[current.answer]}
              {"\n"}
              {current.explanation}
            </Text>
          </>
        )}
        {showResult && (
          <View style={styles.nextButton}>
            <Button
              title={
                index + 1 < questions.length
                  ? "Siguiente Pregunta"
                  : "Ver Resultados"
              }
              onPress={next}
            />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  card: {
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    padding: 24,
    elevation: 2,
  },
  question: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  option: {
    backgroundColor: "#e0e0e0",
    padding: 14,
    borderRadius: 8,
    marginVertical: 6,
  },
  selectedOption: {
    backgroundColor: "#b3e5fc",
  },
  optionText: {
    fontSize: 18,
    textAlign: "center",
  },
  result: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 18,
    textAlign: "center",
    color: "#1976d2",
  },
  explanation: {
    fontSize: 16,
    marginTop: 12,
    textAlign: "center",
    color: "#444",
  },
  nextButton: {
    marginTop: 18,
  },
  finished: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#388e3c",
  },
});
