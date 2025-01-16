import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { GRADIENTCOLORS } from "../../theme/colors";
import { Text, View, TextInput, Alert } from "react-native";
import { styles } from "./styles";
import GradientButton from "../../components/buttons/GradientButton";
import TextButton from "../../components/buttons/TextButton";
import { USERS } from "../../data/dummy_data";
import { useNavigation } from "@react-navigation/native";
import { LoginScreenNavigationProp } from "../../types/NavigationTypes";

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text>{label}</Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={label.toLowerCase() === "password"}
      />
    </View>
  );
};

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in both fields");
      return;
    }
    const user = USERS.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      navigation.navigate("HomeScreen");
    } else {
      Alert.alert("Error", "Invalid email or password");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <LinearGradient
      colors={GRADIENTCOLORS}
      style={styles.root}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.bottomContainer}>
        <InputField label="Email" value={email} onChangeText={setEmail} />
        <InputField
          label="Password"
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.loginBtn}>
          <GradientButton label="Log In" onPress={handleLogin} />
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.innerBtnContainer}>
            <TextButton
              label="Register"
              onPress={() => console.log("Register")}
            />
            <TextButton
              label="Forgot Password?"
              onPress={() => console.log("Forgot Password")}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;
