import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  navbarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: "5%",
    paddingHorizontal: "5%",
    // backgroundColor: "red",
    alignItems: "center",
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
    // color: COLORS.white,
  },
  swapListRoot: {
    flexDirection: "row",
    // backgroundColor: "yellow",
    height: "4%",
    borderWidth: 0.5,
  },
  swapListContainer: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
  },
});
