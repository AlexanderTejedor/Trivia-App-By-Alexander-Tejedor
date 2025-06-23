import React, { useState } from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";

const questions = [
  {
    question: "¿Cuál es el planeta más grande del sistema solar?",
    options: ["Marte", "Júpiter", "Saturno", "Venus"],
    answer: 1,
    explanation:
      "Júpiter es el planeta más grande del sistema solar, con un diámetro de aproximadamente 143,000 km.",
  },
  {
    question: "¿Cuántos elementos tiene la tabla periódica?",
    options: ["108", "112", "118", "120"],
    answer: 2,
    explanation:
      "La tabla periódica tiene 118 elementos reconocidos oficialmente hasta la fecha.",
  },
  {
    question: "¿Qué gas es esencial para la respiración humana?",
    options: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Helio"],
    answer: 0,
    explanation:
      "El oxígeno es esencial para la respiración humana, ya que permite la obtención de energía en las células.",
  },
  {
    question: "¿Quién propuso la teoría de la relatividad?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Nikola Tesla",
    ],
    answer: 1,
    explanation:
      "Albert Einstein propuso la teoría de la relatividad, revolucionando la física moderna.",
  },
  {
    question: "¿Cuál es el órgano más grande del cuerpo humano?",
    options: ["Corazón", "Hígado", "Piel", "Pulmón"],
    answer: 2,
    explanation:
      "La piel es el órgano más grande del cuerpo humano y actúa como barrera protectora.",
  },
];

export default function Ciencia({ navigation }) {
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
