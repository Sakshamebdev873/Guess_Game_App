import { Pressable, StyleSheet, Text, View } from "react-native";

const PrimaryButton = ({ children, onPress }: any) => {
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#6e6369" }}
        style={({ pressed }) =>
          pressed
            ? [styles.btnInnerContainer, styles.pressed]
            : styles.btnInnerContainer
        }
      >
        <Text style={styles.btn}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btnOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  btnInnerContainer: {
    backgroundColor: "#950f52",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  btn: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.6,
  },
});
export default PrimaryButton;
