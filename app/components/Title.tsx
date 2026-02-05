import { StyleSheet, Text, View } from "react-native";

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    padding: 12,
    borderWidth: 2,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white", // Make sure this contrasts with your background!
    textAlign: "center",
  },
});

export default Title;
