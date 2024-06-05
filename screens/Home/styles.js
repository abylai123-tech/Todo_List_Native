import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#000000",
  },
  form: {
    flexDirection: "row",
    marginBottom: 42,
    marginTop: 32,
    gap: 12,
  },
  input: {
    backgroundColor: "#262626",
    borderRadius: 5,
    color: "#FFFFFF",
    // flex: 1,
    fontSize: 16,
    height: 54,
    padding: 16,
    width: 150,
  },
  button: {
    backgroundColor: "#1e6f9f",
    borderRadius: 5,
    height: 54,
    alignContent: "center",
    justifyContent: "center",
  },
});
