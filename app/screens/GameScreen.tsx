import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";

function generateRandomBetween(
  min: number,
  max: number,
  exclude: number,
): number {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum == exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = ({ userNumber, onGameOver }: any) => {
  const intialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(intialGuess);
  function nextGuessHandler(direction: string) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert(`Don't lie`, "You know that is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction == "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess;
    }
    const rndNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(rndNum);
  }
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  return (
    <>
      <View style={styles.rootscreen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
          <Text>Higher or lower?</Text>
          <View>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              +
            </PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              -
            </PrimaryButton>
          </View>
        </Card>
        <View>{/* Log Rounds */}</View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  rootscreen: {
    padding: 40,
  },
});
export default GameScreen;
