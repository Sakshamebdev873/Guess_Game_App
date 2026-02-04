import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import Card from "../components/Card";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Color from "../constants/Color";

const StartGameScreen = ({ onPickNumber }: any) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  function numberInputHandler(enteredText: string) {
    setEnteredNumber(enteredText);
  }
  function resetInputHandler() {
    setEnteredNumber("");
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 to 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }],
      );
    }
    onPickNumber(chosenNumber);
  }
  return (
    <View style={styles.rootScreen}>
      <Title>Guess my Number</Title>
      <Card>
        <Text style={styles.instructionText}>Enter a Number</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          value={enteredNumber}
          onChangeText={numberInputHandler}
          autoCorrect={false}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btnWrapper}>
            <PrimaryButton onPress={confirmInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.btnWrapper}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  instructionText: {
    color: Color.accent500,
    fontSize: 24,
  },
  numberInput: {
    height: 60,
    width: 50,
    fontSize: 32,
    borderBottomColor: Color.accent500,
    borderBottomWidth: 2,
    color: Color.accent500,
    fontWeight: "bold",
    marginVertical: 8,
    textAlign: "center",
  },
  btnContainer: {
    flexDirection: "row",
    width: "100%",
  },
  btnWrapper: {
    marginHorizontal: 8,
    flex: 1,
  },
});
export default StartGameScreen;
