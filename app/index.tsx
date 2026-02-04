import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Color from "./constants/Color";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
export default function Index() {
  const [userNumber, setUserNumber] = useState<number>();
  const [gameIsOver, setgameIsOver] = useState<boolean>(false);
  function pickedNumberHandler(pickedNumber: number) {
    setUserNumber(pickedNumber);
    setgameIsOver(false);
  }
  function gameOverHandler() {
    setgameIsOver(true);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <>
      <LinearGradient
        colors={[Color.primary800, Color.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={
            "https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?q=80&w=1071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          contentFit="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
