import { Image, StyleSheet, View, Text, TextInput } from "react-native";
import { WingBlank, Button } from "@ant-design/react-native";

import vectorLogin from "../../../assets/images/vector_login.png";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  wrapper: {
    backgroundColor: "#fff",
    width: "100%",
    height: "90%",
  },
  containerHorizontal: {
    alignItems: "center",
    justifyContent: "center",
    height: 150,
  },
  text: {
    color: "#fff",
    fontSize: 36,
  },
  input: {
    height: 46,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#004A99",
    textAlign: "center",
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
});

const AuthLogin = ({ navigation }) => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 2 }}>
        <View style={{ ...styles.containerHorizontal, margin: "auto" }}>
          <Image source={vectorLogin} />
        </View>
      </View>

      <View style={{ flex: 2 }}>
        <View>
          <Text style={{ fontSize: 20, textAlign: "center" }}>LOGIN</Text>
        </View>

        <View>
          <TextInput style={styles.input} placeholder="Masukan User-ID Anda" />
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Masukan Password Anda"
            secureTextEntry={true}
          />
        </View>

        <WingBlank style={{ marginTop: 10, backgroundColor: "#FFFFFF" }}>
          <Button
            type="primary"
            style={{ borderRadius: 50 }}
            onPressIn={() => {
              navigation.navigate("Dashboard");
            }}
          >
            MASUK
          </Button>
        </WingBlank>
      </View>
    </View>
  );
};

export default AuthLogin;
