import { Image, StyleSheet, Text, View } from "react-native";
import InstructionText from "../components/InstructionText";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Color from "../constants/Color";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }: any) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over !!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={{ flex: 1, objectFit: "cover", width: "100%", height: "100%" }}
          source={{
            uri: "https://images.unsplash.com/photo-1631499792544-3c313e2a2511?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed
        <InstructionText style={styles.textX}>
          {" "}
          {roundsNumber}
        </InstructionText>{" "}
        rounds to guess the number{" "}
        <InstructionText style={styles.textX}>{userNumber}</InstructionText>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Color.primary800,
    overflow: "hidden",
    margin: 36,
  },
  summaryText: {
    fontSize: 24,
    marginVertical: 24,
  },
  textX: {
    color: Color.primary800,
    fontSize: 24,
  },
});
export default GameOverScreen;
