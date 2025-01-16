import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { styles } from "./styles";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.root}>
      <View style={styles.navbarContainer}>
        <TouchableOpacity style={styles.image} onPress={() => console.log(1)}>
          <Image
            source={require("../../assets/dummy_assets/icardi.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text style={styles.nameText}>AHMET GÜNEŞ</Text>
        <TouchableOpacity style={styles.image} onPress={() => console.log(2)}>
          <Image
            source={require("../../assets/dummy_assets/gala.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.swapListRoot}>
        <TouchableOpacity
          style={styles.swapListContainer}
          onPress={() => console.log(3)}
        >
          <Text>For You</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.swapListContainer}
          onPress={() => console.log(4)}
        >
          <Text>Team Only</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
