# Trivia-App-By-Alexander-Tejedor

Trabajo para la universidad Uniminuto en la cual se desarrolló una aplicación de Trivia.

Esta es una aplicación de trivia desarrollada en React Native utilizando React Navigation. Permite a los usuarios seleccionar una categoría (Historia, Ciencia o Deportes), responder preguntas de opción múltiple y ver sus resultados al final.

## Características

- Selección de categoría de trivia.
- Preguntas con 4 opciones de respuesta.
- Retroalimentación inmediata sobre si la respuesta es correcta o incorrecta.
- Explicación de la respuesta correcta después de cada pregunta.
- Pantalla de resultados con el conteo de respuestas correctas e incorrectas.
- Navegación sencilla entre pantallas.

## Instalación

1. **Clona el repositorio:**

   ```sh
   git clone <URL_DEL_REPOSITORIO>
   cd trivia-app
   ```

2. **Instala las dependencias:**

   ```sh
   npm install
   ```

3. **Instala las dependencias de navegación:**

   ```sh
   npm install @react-navigation/native @react-navigation/stack
   npx expo install react-native-screens react-native-safe-area-context
   ```

4. **Inicia la aplicación:**
   ```sh
   npx expo start
   ```
   O si usas React Native CLI:
   ```sh
   npx react-native run-android
   # o
   npx react-native run-ios
   ```

## Estructura del Proyecto

```
/App.js
/Pages/
  /Historia/Historia.jsx
  /Ciencia/Ciencia.jsx
  /Deportes/Deporte.jsx
  /Resultados/Resultados.jsx
```

- **App.js:** Configura la navegación y la pantalla de inicio.
- **Historia.jsx, Ciencia.jsx, Deporte.jsx:** Contienen la lógica y las preguntas de cada categoría.
- **Resultados.jsx:** Muestra el resumen de respuestas correctas e incorrectas.

## ¿Cómo funciona?

1. **Pantalla de inicio:**  
   El usuario selecciona una categoría de trivia.

2. **Pantalla de preguntas:**  
   Se muestra una pregunta con 4 opciones. Al seleccionar una opción, se indica si la respuesta es correcta o incorrecta y se muestra una breve explicación. Luego, el usuario puede avanzar a la siguiente pregunta.

3. **Pantalla de resultados:**  
   Al finalizar todas las preguntas, se muestra la cantidad de respuestas correctas e incorrectas y un botón para volver al inicio.

## Personalización

- Puedes agregar o modificar preguntas editando los archivos de cada categoría en `/Pages/`.
- Para agregar nuevas categorías, crea un nuevo archivo similar y agrégalo al `Stack.Navigator` en `App.js`.

## Requisitos

- Node.js y npm instalados.
- Expo CLI recomendado para desarrollo rápido.

## Créditos

Desarrollado por Jimmy Alexander Tejedor Romero.

---

¿Dudas o sugerencias? ¡Abre un issue o contacta
