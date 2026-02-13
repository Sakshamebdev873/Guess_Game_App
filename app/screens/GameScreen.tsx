import AntDesign from "@expo/vector-icons/AntDesign";
import { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import Card from "../components/Card";
import GuessLogItem from "../components/game/GuessLogItem";
import NumberContainer from "../components/game/NumberContainer";
import InstructionText from "../components/InstructionText";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Color from "../constants/Color";
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
  const [currentGuess, setCurrentGuess] = useState<number>(intialGuess);
  const [guessRounds, setGuessRounds] = useState<number[]>([intialGuess]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  const { width, height } = useWindowDimensions();
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
      minBoundary = currentGuess + 1;
    }
    const rndNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(rndNum);
    setGuessRounds((prev) => [...prev, rndNum]);
  }
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);
  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.btnContainer}>
          <View style={styles.btnWrapper}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <AntDesign name="plus" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.btnWrapper}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <AntDesign name="minus" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>

        <View style={styles.btnContainerWide}>
          <View style={styles.btnWrapper}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <AntDesign name="plus" size={24} color="white" />
            </PrimaryButton>
          </View>

          <NumberContainer>{currentGuess}</NumberContainer>

          <View style={styles.btnWrapper}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <AntDesign name="minus" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <>
      <View style={styles.rootscreen}>
        <Title>Opponent's Guess</Title>
        {content}
        <View style={styles.listContainer}>
          <FlatList
            data={guessRounds}
            renderItem={(item) => (
              <GuessLogItem
                roundsNumber={guessRounds.length - item.index}
                guess={item.item}
              />
            )}
            keyExtractor={(item) => item.toString()}
          />
        </View>
      </View>
    </>
  );
};
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  rootscreen: {
    flex: 1,
    paddingTop: deviceWidth > 350 ? 20 : 50,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  btnWrapper: {
    flex: deviceWidth > 380 ? 1 : 0,
  },
  instructionText: {
    color: Color.accent500,
    fontSize: 24,
    marginBottom: 12,
    textAlign: "center",
  },
  listContainer: {
    flex: 1,
    padding: 10,
    maxHeight: deviceWidth > 350 ? 200 : 350,
  },
  listContent: {
    paddingBottom: 40, // IMPORTANT: Adds space at the end so you can scroll past the bottom
  },
  btnContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default GameScreen;
