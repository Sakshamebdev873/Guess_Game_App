import { StyleSheet, Text } from "react-native";

const Title = ({ children }: any) => {
  return <Text style={styles.title}>{children}</Text>;
};
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    borderColor: "white",
    borderWidth: 2,
    padding: 12,
    textAlign: "center",
  },
});
export default Title;
