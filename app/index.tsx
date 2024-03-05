import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import StyledInput from "../components/StyledInput";
import StyledButton from "../components/StyledButton";

export default function Login() {
  const handleLogin = () => {
    router.push("home");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../logo/logo.png")}
        style={styles.backgroundImage}
      />

      <Text>Tela de login</Text>
      <StyledInput
        onChangeText={(texto) => console.log(texto)}
        placeholder="Digite o seu e-mail!"
      />
      <StyledInput
        onChangeText={(texto) => console.log(texto)}
        placeholder="Digite o sua senha!"
      />
      <StyledButton
        title="Clique para acessar"
        onPress={handleLogin}
        color="blue"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    resizeMode: "cover",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "60%",
    opacity: 0.6,
  },
});
