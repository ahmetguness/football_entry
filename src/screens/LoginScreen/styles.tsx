import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    height: "65%",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: COLORS.softGray,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    padding: "10%",
    justifyContent: "space-evenly",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  btnContainer: {
    alignItems: "center",
    width: "100%",
  },
  innerBtnContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  loginBtn: {
    alignItems: "center",
  },
  inputContainer: {},
});
