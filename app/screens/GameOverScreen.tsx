import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import InstructionText from "../components/InstructionText";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Color from "../constants/Color";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }: any) => {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;
  if (width > 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over !!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={{
              flex: 1,
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
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
    </ScrollView>
  );
};
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: "auto",
    margin: "auto",
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Color.primary800,
    overflow: "hidden",
    margin: 36,
  },
  summaryText: {
    fontSize: 24,
    marginVertical: deviceWidth > 300 ? 1 : 24,
  },
  textX: {
    color: Color.primary800,
    fontSize: 24,
  },
});
export default GameOverScreen;
