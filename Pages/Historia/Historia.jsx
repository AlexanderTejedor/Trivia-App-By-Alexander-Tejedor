import React, { useState } from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";

const questions = [
  {
    question: "¿Quién fue el Libertador de Colombia?",
    options: [
      "Simón Bolívar",
      "Francisco de Paula Santander",
      "Antonio Nariño",
      "José María Córdova",
    ],
    answer: 0,
    explanation:
      "Simón Bolívar es conocido como el Libertador de Colombia porque lideró la independencia del dominio español en varios países de Sudamérica.",
  },
  {
    question: "¿En qué año se firmó el Acta de Independencia de Colombia?",
    options: ["1810", "1819", "1821", "1830"],
    answer: 0,
    explanation:
      "El Acta de Independencia de Colombia se firmó el 20 de julio de 1810, marcando el inicio del proceso de independencia del país.",
  },
  {
    question: "¿Cuál es la ciudad más antigua de Colombia?",
    options: ["Bogotá", "Cartagena", "Santa Marta", "Cali"],
    answer: 2,
    explanation:
      "Santa Marta, fundada en 1525, es la ciudad más antigua de Colombia y una de las más antiguas de Sudamérica.",
  },
  {
    question: "¿Quién fue el primer presidente de Colombia?",
    options: [
      "Rafael Núñez",
      "Francisco de Paula Santander",
      "Simón Bolívar",
      "Tomás Cipriano de Mosquera",
    ],
    answer: 1,
    explanation:
      "Francisco de Paula Santander fue el primer presidente de la República de la Nueva Granada, hoy Colombia, en 1832.",
  },
  {
    question: "¿Cuál es el río más largo de Colombia?",
    options: ["Río Magdalena", "Río Cauca", "Río Amazonas", "Río Putumayo"],
    answer: 0,
    explanation:
      "El río Magdalena es el más largo de Colombia, recorriendo más de 1,500 km desde el sur hasta el mar Caribe.",
  },
  {
    question: "¿En qué año comenzó la Segunda Guerra Mundial?",
    options: ["1914", "1939", "1945", "1929"],
    answer: 1,
    explanation:
      "La Segunda Guerra Mundial comenzó en 1939 con la invasión de Polonia por parte de Alemania.",
  },
  {
    question: "¿Cuál civilización construyó las pirámides de Guiza?",
    options: ["Griega", "Romana", "Egipcia", "China"],
    answer: 2,
    explanation:
      "Las pirámides de Egipto fueron construidas por la civilización egipcia como tumbas para sus faraones.",
  },
];

export default function Historia({ navigation }) {
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
});
