import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1A1A",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 10,
    width: "100%",
    justifyContent: "space-between",
  },
  taskDone: {
    color: "tomato",
    fontSize: 16,
    marginLeft: 16,
    textDecorationStyle: "dashed",
    textDecorationColor: "black",
  },
  taskNone: {
    color: "#ffff",
    fontSize: 16,
    marginLeft: 16,
  },
  checkbox: {
    borderRadius: 999,
    borderColor: "#4ea8de",
    marginLeft: 18,
  },
  textWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});
