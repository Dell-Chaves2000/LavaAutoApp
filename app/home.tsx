import { Text, Image, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../logo/logo.png")}
        style={styles.backgroundImage}
      />

      <Image source={require("../logo/note.png")} style={styles.note} />

      <Text style={[styles.paragraph, styles.texto]}>
        Este botão é utilizado para
        {"\n"}
        efetuar o cadastro do veiculo
      </Text>

      <Image source={require("../logo/lavadora.png")} style={styles.note} />

      <Text style={(styles.paragraph, styles.texto)}>
        Este botão é utilizado para
        {"\n"}
        abrir uma ordem de serviço.
      </Text>

      <Image source={require("../logo/chklist.png")} />

      <Text style={(styles.paragraph, styles.texto)}>
        Este botão é utilizado para abrir
        {"\n"}o check list da ordem de serviço.
      </Text>

      <Link href="/">Voltar a tela de login</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "space-between",
    marginTop: 50,
  },
  note: {
    width: 100,
    height: 100,
    borderWidth: 20,
    margin: 10,
  },
  paragraph: {},
  texto: {
    color: "#00008B",
    fontWeight: "bold",
    fontSize: 15,
  },
  backgroundImage: {
    resizeMode: "cover",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: 150,
    width: "100%",
    height: "60%",
    opacity: 0.6,
  },
});
