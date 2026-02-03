import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

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
    <View style={styles.inputContainer}>
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
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginHorizontal: 24,
    elevation: 4,
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#72003b",
    shadowColor: "black",
    shadowOffset: { width: 8, height: 2 },
    shadowRadius: 6,
    borderRadius: 8,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 60,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
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
